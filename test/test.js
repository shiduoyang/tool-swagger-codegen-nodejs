const fs = require('fs');
const codegen = require('../lib/index');
const path = require('path');
const should = require('should');

describe('keywordsSupport', () => {
    it('keywordsSupport must be same with keywordsSupportRight', () => {
        let keywordsSupport = codegen.keywordsSupport;
        let keywordsSupportRight = [
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
        JSON.stringify(keywordsSupport).should.equal(JSON.stringify(keywordsSupportRight));
    });
});

describe('parseFileModel', () => {
    it('should throw error when path is invalid ', () => {
        codegen.parseFileModel.bind(null, './xx.js').should.throw('filePath is invalid');
    });

    it('should throw error when fileModel is not standard', () => {
        codegen.parseFileModel.bind(null, path.join(__dirname, 'model', 'modelnotstandard.js')).should.throw('$classStart $classEnd $interfaceStart $interfaceEnd must be single');
    });

    it('should return value when fileModel is right', () => {
        let result = codegen.parseFileModel(path.join(__dirname, 'model', 'controller.js'));
        let classModelResult = fs.readFileSync(path.join(__dirname, 'parse', 'controller_classModel'), { encoding: 'utf-8' });
        let interfaceModelResult = fs.readFileSync(path.join(__dirname, 'parse', 'controller_interfaceModel'), { encoding: 'utf-8' });
        result.classModel.should.equal(classModelResult);
        result.interfaceModel.should.equal(interfaceModelResult);
    });
});

describe('generateCode', () => {
    it('should throw error when yamlFilePath is invalid', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger2.yaml'), path.join(__dirname, 'code'), path.join(__dirname, 'model', 'controller.js'))
                done('error');
            } catch (e) {
                done();
            }
        })();
    });
    it('should throw error when targetDirPath is invalid', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger.yaml'), path.join(__dirname, 'code2'), path.join(__dirname, 'model', 'controller.js'))
                done('error');
            } catch (e) {
                done();
            }
        })();
    });
    it('should throw error when modelFilePath is invalid', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger.yaml'), path.join(__dirname, 'code'), path.join(__dirname, 'model', 'controller2.js'))
                done('error');
            } catch (e) {
                done();
            }
        })();
    });
    it('should generate code when params is valid - model=controller.js', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger.yaml'), path.join(__dirname, 'code'), path.join(__dirname, 'model', 'controller.js'));
                done();
            } catch (e) {
                done(e);
            }
        })();
    });

    it('should generate code when params is valid - model=route.js', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger.yaml'), path.join(__dirname, 'code'), path.join(__dirname, 'model', 'route.js'));
                done();
            } catch (e) {
                done(e);
            }
        })();
    });

    it('should generate code when params is valid - model=controller.go', (done) => {
        (async () => {
            try {
                await codegen.generateCode(path.join(__dirname, 'swagger.yaml'), path.join(__dirname, 'code'), path.join(__dirname, 'model', 'controller.go'));
                done();
            } catch (e) {
                done(e);
            }
        })();
    });
});