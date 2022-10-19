const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function errorHandler(error){
    throw new Error(error.message);
}

async function validate(resultList){
    try{
        const linkList = makeLinkList(resultList);
        const statusList = await checkStatus(linkList);

        const result = resultList.map((object, index) => ({
            ...object, status: statusList[index]
            // ... = spread operator: allows working inside of object
        }))
        return result;
    }catch(error){
        errorHandler(error);
    }
}




function makeLinkList(resultList){

    //Object.values retorna apenas os valores dentro dos pares chave-valor
    return resultList.map(linkObject => Object.values(linkObject).join());

}

async function checkStatus(linkList){

    const statusList = await Promise.all(linkList.map(async url => {
            const res = await fetch(url);
            return res.status;
        }))
    return statusList;

}


module.exports = makeLinkList;
module.exports = validate;