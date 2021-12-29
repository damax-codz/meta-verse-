
const openMenu=()=>{
    var menu = document.querySelector(".menu-toggle") 
    var item = document.querySelector(".items")
    var list=document.querySelector(".list")
    menu.style.backgroundColor="rgba(0, 0, 0, 0.58)"
    menu.style.width="100%"
    item.style.visibility="visible"
    document.body.style.overflow="hidden"
    
}
const clearMenu=()=>{
    var menu = document.querySelector(".menu-toggle")
    var item = document.querySelector(".items")
    menu.style.backgroundColor="none"
    menu.style.width="0%"
    item.style.visibility="hidden"
    document.body.style.overflow="scroll"
    document.body.style.overflowX="hidden"
}
    function confirm(){ 
   var emailconfirm= document.querySelector(".emailconfirm")
   var passwordconfirm=document.querySelector('.passwordconfirm')
   var email = document.getElementById("email")
   var linked =document.querySelector(".linked")
  if(!email.value.includes("@")||!email.value.includes(".")){
       emailconfirm.innerHTML="please input a valid email!!"

   } 
   else{
       emailconfirm.innerHTML=" "
       passwordconfirm.innerHTML=" "
       linked.href="index.html"
   }

}

document.getElementById("username").value=" "
document.getElementById("email").value=" "



