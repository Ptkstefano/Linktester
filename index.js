const chalk = require('chalk');
//import chalk from 'chalk';
const fs = require('fs'); //File system
//import * as fs from 'fs';

function errorFunction(error){
    throw new Error(chalk.red(error));
}

async function getFile(pathFile){
    const enconding = 'utf-8';
    try{
    const text = await fs.promises.readFile(pathFile, enconding);
    return linkExtractor(text)
    } catch(error){
        Error(error);
    }
}

function linkExtractor(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const results = [];
    let temp;
    while((temp = regex.exec(text)) !== null){
        results.push({ [temp[1]]: temp[2]})
    }
    return results.length === 0 ? 'No links found' : results;
    //Operador ternário: condição ? false : true
}


module.exports = getFile;

