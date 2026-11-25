const welcomeScreen=document.getElementById('welcome');
const mainApp=document.getElementById('main-app');
document.getElementById('enter-app').addEventListener('click',()=>{mainApp.hidden=false;welcomeScreen.classList.add('welcome-leave');setTimeout(()=>{welcomeScreen.hidden=true;document.getElementById('role').focus({preventScroll:true})},450)});
