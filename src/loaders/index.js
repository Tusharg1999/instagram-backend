const databaseLoader=require('../loaders/databaseLoader')
const expressLoader=require('../loaders/expressLoader')
module.exports=async function(app){
await expressLoader(app);
  await databaseLoader();
}