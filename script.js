
let toastbox=document.getElementById("toastbox");
let successMsg='<i class="fa-regular fa-circle-check"></i> successfully submitted';
let errorMsg='<i class="fa-solid fa-xmark"></i>please fix the error !';
let inavailidMsg='<i class="fa-solid fa-circle-exclamation"></i>invalid input check again' ;

function showTost(msg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML=msg;
   toastbox.appendChild(toast);
   if (msg.includes('error')){
    toast.classList.add('error')
   }
   if (msg.includes('invalid')){
    toast.classList.add('invalid')
   }
   setTimeout(()=>{
    toast.remove();
   },6000)
}