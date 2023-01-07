const verifyAuth = (req , res , next) => {
    const date = new Date () ; 
    const day = date.getDay()
    const hour = date.getHours()
    
if(( day == 1 || day == 7 ) || (hour <= 5 || hour >=17 )) {
   res.send('erreur')
}else {next()}


}
module.exports=verifyAuth