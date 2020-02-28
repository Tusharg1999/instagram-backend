const app=require('express')();
const PORT=process.env.PORT;
const loader=require('./loaders/index')

async function startServer(){
   await loader(app); 
   app.listen(PORT,()=>{
      console.log("server running...");
   }) 
}
startServer();

