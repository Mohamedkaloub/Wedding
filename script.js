const eventDate=new Date("2026-10-16T15:00:00+03:00");
const pad=n=>String(n).padStart(2,"0");
function tick(){let d=eventDate-new Date();if(d<0)d=0;document.querySelector("#days").textContent=Math.floor(d/86400000);document.querySelector("#hours").textContent=pad(Math.floor(d/3600000)%24);document.querySelector("#minutes").textContent=pad(Math.floor(d/60000)%60);document.querySelector("#seconds").textContent=pad(Math.floor(d/1000)%60)}tick();setInterval(tick,1000);
window.addEventListener("load",()=>{setTimeout(()=>document.querySelector("#preloader").classList.add("hide"),650)});
const style=document.createElement("style");style.textContent="#preloader.hide{opacity:0;visibility:hidden}";document.head.appendChild(style);
const music=document.querySelector("#bgMusic"),btn=document.querySelector("#musicBtn");
btn.onclick=async()=>{if(music.paused){try{await music.play();btn.textContent="Ⅱ"}catch{alert("ضع ملف music.mp3 داخل مجلد assets أولاً")}}else{music.pause();btn.textContent="♫"}};
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
document.querySelector("#calendarBtn").onclick=()=>{const ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Mohamed Aya//Invitation","BEGIN:VEVENT","DTSTART:20261016T150000","DTEND:20261016T170000","SUMMARY:كتب كتاب محمد وآيه","LOCATION:مسجد سيدي خليفة","DESCRIPTION:كتب كتاب محمد وآيه ثم العِزال عند بيت العروسة.","END:VEVENT","END:VCALENDAR"].join("\r\n");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([ics],{type:"text/calendar"}));a.download="mohamed-aya.ics";a.click()};
