document.querySelectorAll(".lang-menu button").forEach(button=>{

    button.onclick=function(){

        const selected=this.dataset.lang;

        changeLanguage(selected);

        const currentLang=document.getElementById("currentLang");

        if(selected==="id"){
            currentLang.innerHTML="🇮🇩 ID ▼";
        }

        if(selected==="en"){
            currentLang.innerHTML="🇺🇸 EN ▼";
        }

        if(selected==="zh"){
            currentLang.innerHTML="🇨🇳 CH▼";
        }
if(selected==="ar"){
            currentLang.innerHTML="🇯🇵 JA ▼";
        }
     if(selected==="ar"){
            currentLang.innerHTML="🇰🇷 KO▼";
        }
  
if(selected==="ar"){
            currentLang.innerHTML="🇸🇦 AR ▼";
        }
 langMenu.classList.remove("show");



