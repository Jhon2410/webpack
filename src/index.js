import { contar } from "./count";
import "./index.css"
const resultado  = async()=>{
    const respuesta =  await contar(prompt("veces a contar"))
    
}
resultado()