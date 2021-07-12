const fs = require('fs');
const path = require('path');
const parser = require('swagger-parser-simple');
const R = require('ramda');
const FileModel = require('./fileModel');

exports.getModelKeywordsSupport = function () {
    return [
        '$class',//类名
        '$interfaceIncPoint',//接口插入点
        '$interfaceName',//接口名称
        '$interfaceDesc',//接口详情
        '$paramBody',//参数对象
        '$exampleResult',//默认返回值
        '$interfaceUrl',//接口url
    ]
}

exports.generateCode = function (yamlFilePath, targetDirPath = './', model,) {
    if (!fs.existsSync(yamlFilePath)) {
        throw new Error('yaml file is wrong');
    }
    
    let yamlValue = await parser(yamlFilePath),
        fileModel = new FileModel();
    for (let interface of yamlValue.paths) {       
        fileModel.incInterface(interface, targetDirPath);
    }


    let interface = {
        "url": "/user/{username}",
        "method": "put",
        "summary": "Updated user",
        "description": "This can only be done by the logged in user.",
        "consumes": [],
        "produces": [
            "application/xml",
            "application/json"
        ],
        "parameters": [
            {
                "name": "username",
                "in": "path",
                "description": "name that need to be updated",
                "required": true,
                "type": "string"
            },
            {
                "name": "body",
                "in": "body",
                "description": "Updated user object",
                "required": true
            }
        ],
        "responses": {
            "400": {
                "description": "Invalid user supplied",
                "data": {}
            },
            "404": {
                "description": "User not found",
                "data": {}
            }
        }
    },
}