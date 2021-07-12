const R = require('ramda');
const fs = require('fs');
const path = require('path');

function FileModel() {
}

FileModel.prototype.generateConfig = function () {
    return {
        fileName,
        fileType,
        file: {
            fileName,
            fileType,
        },
        interface: {
            url,
            desc: '',
            method,
            exampleData,
        }
    }
}

/**
 * 
 * @param {*} config {class:'',interface}
 */
FileModel.prototype.incInterface = function (config = {}, targetDirPath, modelStr) {
    if (!fs.existsSync(targetDirPath)) {
        throw new Error('targetDirPath is wrong');
    }
    let {
        fileName,
        fileType,
        interfaceName,
        method,
        description,
        parameters = [],
        exampleResult = {},
    } = config;
    let apiNameSplit = R.reject(item => item.startsWith('{') || item.endsWith('}'))(interface.url.split('/')),
        interfaceName = R.last(apiNameSplit),
        fileName = (apiNameSplit.length >= 2 ? apiNameSplit[apiNameSplit.length - 2] : 'common');


    let filePath = path.join(targetDirPath, fileName + fileType);
    if (!fs.existsSync(filePath)) {
        let className = String(fileName[0]).toUpperCase() + fileName.substr(1, fileName.length)
        fs.writeFileSync(filePath, String(this.classModel).replace('$class', className));
    }

    let nameSupport = [
        '$class',//类
        '$interfaceIncPoint',//接口相关插入点
        '$descIncPoint',//接口详细描述插入点
        '$interfaceName',//接口方法名
        '$paramBody',//参数对象
        '$exampleData',//示例数据
        '$interfaceUrl',//接口的路由
    ]


    let descStr = ''
        + `/**\n`
        + ` * @method ${method}\n`
        + ` * @description ${description}\n`,
        paramStr = '{';
    for (let param of parameters) {
        descStr += ` * @param ${param.name || ''} ${param.description || ''}\n`;
        paramStr += `${param.name}, `;
    }
    paramStr += '}';

    let interfaceStr = String(this.interfaceModel);
    interfaceStr.replace('$interfaceDesc', descStr);
    interfaceStr.replace('$interfaceName', interfaceName);
    interfaceStr.replace('$paramBody', paramStr);
    interfaceStr.replace('$exampleData', exampleResult);
    
    let fileValue = fs.readFileSync(filePath),
        fileValueSplit = fileValue.split('//$incPoint\n');
    if (fileValueSplit.length != 2) {
        throw new Error('incPoint lost');
    }
    fileValue = fileValue[0] + interfaceStr + '//$incPoint\n' + fileValue[1];

}

module.exports = FileModel;