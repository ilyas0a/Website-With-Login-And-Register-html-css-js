const wrpper= document.querySelector('.wrpper');
const loginregister= document.querySelector('.login-register');
const loginlink =document.querySelector('.login-link');
const botn =document.querySelector('.btn');



loginregister.addEventListener('click',()=>{

wrpper.classList.add('active')

});
loginlink.addEventListener('click',()=>{

    wrpper.classList.remove('active')
    
   });

botn.addEventListener('click',()=>{

     wrpper.classList.add('active-btn')
        
});
    
    
