const production=true
function debugLog(msg){
    if(production){
        console.log(msg);
    }
}
function errorLog(msg) {
    if (production){
        console.error(msg)
    }
}
module.exports={debugLog,errorLog}
