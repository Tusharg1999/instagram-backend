const dotEnv=require('dotenv')
const res=dotEnv.config();
if (res.error!=null){
    throw res.error
}