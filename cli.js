//import chalk from 'chalk';
const chalk = require('chalk');
const getFile = require('./index');
const makeLinkList = require('./validation');
const validate = require ('./validation');
const path = process.argv;

//async sinaliza para a função que ela pode precisar esperar algum resultado
async function processText(filePath){
    //await manda o código esperar o arquivo carregar corretamente
    const result = await getFile(filePath[2]);
    if (path[3] === 'validate'){
        console.log(chalk.yellow('validated links: '), await validate(result));
    }
    else {
    console.log(chalk.yellow('link list'), result);
    }
}

processText(path);

