const themeButton=document.getElementById('theme-toggle');
function applyTheme(dark){document.body.classList.toggle('dark-theme',dark);themeButton.setAttribute('aria-label',dark?'Activar tema claro':'Activar tema oscuro');themeButton.innerHTML=dark?'<span aria-hidden="true">☀</span><span class="theme-text">Tema claro</span>':'<span aria-hidden="true">☾</span><span class="theme-text">Tema oscuro</span>';}
applyTheme(false);
themeButton.addEventListener('click',()=>applyTheme(!document.body.classList.contains('dark-theme')));
