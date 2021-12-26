import { contar } from "./count";

const resultado  = async()=>{
    const respuesta =  await contar(prompt("veces a contar"))
    
}
resultado()