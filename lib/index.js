const fs = require('fs');
const path = require('path');
const parser = require('swagger-parser-simple');
const R = require('ramda');

function Codegen() {
    
}

Codegen.prototype.keywordsSupport = [
    "$classStart",
    "$classEnd",
    "$className",
    "$interfaceStart",
    "$interfaceEnd",
    "$url",
    "$method",
    "$summary",
    "$description",
    "$parameters",
    "$exampleData",
];

Codegen.prototype.parseFileModel = function (filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error('filePath is invalid');
    }
    let content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    [/\$classStart/g, /\$classEnd/g, /\$interfaceStart/g, /\$interfaceEnd/g].forEach(regexp => {
        if ((content.match(regexp) || []).length != 1) {
            throw new Error('$classStart $classEnd $interfaceStart $interfaceEnd must be single');
        }
    });
    let classStr = content.match(/(?<=(\$classStart))[\s\S]*(?=(\$classEnd))/gm)[0],
        interfaceModel = classStr.match(/(?<=(\$interfaceStart))[\s\S]*(?=(\$interfaceEnd))/gm)[0],
        classValue = String(classStr)
            .replace('$interfaceStart', '')
            .replace('$interfaceEnd', '')
            .replace(interfaceModel, '$incPoint'),
        classModel = String(content)
            .replace('$classStart', '')
            .replace('$classEnd', '')
            .replace(classStr, classValue);
    return {
        classModel,
        interfaceModel,
    };
}

Codegen.prototype.appendInterface = function (info) {
    if (!fs.existsSync(info.filePath)) {
        let fileContent = String(info.classModel);
        fileContent = fileContent.replace(/\$className/g, String(info.fileName[0]).toUpperCase() + info.fileName.substr(1, info.fileName.length));
        fs.writeFileSync(info.filePath, fileContent);
    }
    let interfaceContent = String(info.interfaceModel);
    ["url", "method", "summary", "description", "parameters", "exampleData", "interfaceName"].forEach(k => {
        interfaceContent = interfaceContent.replace(`$${k}`, String(info[k] || ''));
    });
    let fileContent = fs.readFileSync(info.filePath, { encoding: 'utf-8' });
    fileContent = fileContent.replace(/\$incPoint/, interfaceContent + '\n' + '$incPoint');
    fs.writeFileSync(info.filePath, fileContent);
}

Codegen.prototype.generateCode = async function (yamlFilePath, targetDirPath = './', modelFilePath = '') {
    if (!fs.existsSync(yamlFilePath)) {
        throw new Error('yamlFilePath is invalid');
    }
    if (!fs.existsSync(targetDirPath)) {
        throw new Error('targetDirPath is invalid');
    }
    if (!fs.existsSync(modelFilePath)) {
        throw new Error('modelFilePath is invalid');
    }
    let yamlValue = await parser(yamlFilePath),
        modelValue = this.parseFileModel(modelFilePath),
        fileName = `${yamlFilePath.split('/').pop().split('.')[0]}_${modelFilePath.split('/').pop().split('.')[0]}`,
        modelFileSuffix = modelFilePath.indexOf('.') != -1 ? modelFilePath.split('.').pop() : '',
        filePath = path.join(targetDirPath, `${fileName}.${modelFileSuffix}`);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    for (let interface of yamlValue.paths) {
        let apiNameSplit = R.reject(item => item.startsWith('{') || item.endsWith('}'))(interface.url.split('/')),
            info = {
                url: interface.url,
                method: interface.method,
                summary: interface.summary || '',
                description: interface.description || '',
                parameters: R.pluck('name')(interface.parameters || []).toString(),
                exampleData: JSON.stringify(interface.responses && interface.responses[200] ? (interface.responses[200].data || {}) : {}),
                fileName,
                filePath,
                interfaceName: apiNameSplit[apiNameSplit.length - 1],
                classModel: modelValue.classModel,
                interfaceModel: modelValue.interfaceModel,
            };
        this.appendInterface(info);
    }
}

module.exports = new Codegen();