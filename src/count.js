const contar = (n)=>{
    if(n==1) return
    console.log(n)
    contar(n-1)
}
module.exports = {
    contar
}
//exports.default = { contar }