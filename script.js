const audio=document.getElementById("audio");const playBtn=document.getElementById("play");const progress=document.getElementById("progress");const cover=document.querySelector(".music-cover");if(audio){playBtn.addEventListener("click",()=>{if(audio.paused){audio.play();playBtn.innerHTML="⏸";cover.classList.add("playing")}else{audio.pause();playBtn.innerHTML="▶";cover.classList.remove("playing")}});audio.addEventListener("timeupdate",()=>{if(audio.duration){progress.value=(audio.currentTime/audio.duration)*100}});progress.addEventListener("input",()=>{audio.currentTime=(progress.value/100)*audio.duration});audio.addEventListener("ended",()=>{playBtn.innerHTML="▶";cover.classList.remove("playing")})}
const startDate=new Date("2023-12-01T00:00:00");function updateLoveTimer(){const now=new Date();const difference=now-startDate;const seconds=Math.floor(difference/1000);const days=Math.floor(seconds/86400);const hours=Math.floor((seconds%86400)/3600);const minutes=Math.floor((seconds%3600)/60);const secs=seconds%60;document.getElementById("days").innerHTML=String(days).padStart(3,"0");document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0",);document.getElementById("seconds").innerHTML=String(secs).padStart(2,"0")}
setInterval(updateLoveTimer,1000);updateLoveTimer();function createPetal(){const petals=document.createElement("div");petals.className="petal";petals.style.left=Math.random()*100+"%";petals.style.animationDuration=5+Math.random()*8+"s";petals.style.opacity=Math.random();const size=15+Math.random()*20;petals.style.width=size+"px";petals.style.height=size+"px";document.body.appendChild(petals);setTimeout(()=>{petals.remove()},12000)}
setInterval(createPetal,400);function createHeart(){const heart=document.createElement("div");heart.className="floating-heart";heart.innerHTML="❤";heart.style.left=Math.random()*100+"%";heart.style.animationDuration=5+Math.random()*6+"s";heart.style.fontSize=15+Math.random()*30+"px";document.body.appendChild(heart);setTimeout(()=>{heart.remove()},10000)}
setInterval(createHeart,1200);const glow=document.createElement("div");glow.className="cursor-glow";document.body.appendChild(glow);document.addEventListener("mousemove",(e)=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});const cards=document.querySelectorAll(".photo-card");cards.forEach((card)=>{card.addEventListener("mousemove",(e)=>{const rect=card.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;const centerX=rect.width/2;const centerY=rect.height/2;const rotateX=((y-centerY)/centerY)*-10;const rotateY=((x-centerX)/centerX)*10;card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)

`});card.addEventListener("mouseleave",()=>{card.style.transform=""})});const reveals=document.querySelectorAll(".reveal");function reveal(){reveals.forEach((item)=>{const windowHeight=window.innerHeight;const top=item.getBoundingClientRect().top;if(top<windowHeight-100){item.classList.add("active")}})}
window.addEventListener("scroll",reveal,);reveal();document.addEventListener("mousemove",(e)=>{const blobs=document.querySelectorAll(".blob");const x=e.clientX/window.innerWidth;const y=e.clientY/window.innerHeight;blobs.forEach((blob,index)=>{const speed=(index+1)*15;blob.style.transform=`

translate(

${x * speed}px,

${y * speed}px

)

`})});const intro=document.getElementById("intro");const introHeart=document.querySelector(".intro-heart");introHeart.addEventListener("click",()=>{intro.classList.add("hide");if(audio){audio.play().catch(()=>{});playBtn.innerHTML="⏸";cover.classList.add("playing")}
createExplosion()});function createExplosion(){for(let i=0;i<30;i++){const spark=document.createElement("div");spark.innerHTML="❤";spark.style.position="fixed";spark.style.left="50%";spark.style.top="50%";spark.style.zIndex="10000";spark.style.fontSize=10+Math.random()*25+"px";spark.style.color=i%2===0?"#c97c97":"#4c6e91";document.body.appendChild(spark);const x=(Math.random()-0.5)*600;const y=(Math.random()-0.5)*600;spark.animate([{transform:"translate(0,0)",opacity:1,},{transform:`translate(${x}px,${y}px)`,opacity:0,},],{duration:1200,easing:"ease-out",},);setTimeout(()=>{spark.remove()},1200)}}