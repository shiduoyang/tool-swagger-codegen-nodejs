#!/usr/bin/env node
const generator = require('../lib/index');
const program = require('commander');

program
    .command('generate')
    .version('1.0.0')
    .description('generate code using a given modelFile')
    .option('-y, --yaml [string]', 'yaml file path', '')
    .option('-d, --codeDir [string]', 'code dir path', '')
    .option('-m, --modelPath [string]', 'model file path', '')
    .action(function (options) {
        console.log(options);
        generator.generateCode(options.yaml,options.codeDir,options.modelPath).then(val => {
            console.log(`code >> ${options.codeDir} done`);
        });
    });

program.parse(process.argv);