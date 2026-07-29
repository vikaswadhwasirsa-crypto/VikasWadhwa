// =========================
// Smooth Fade-in Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// =========================
// Scroll To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// =========================
// Gallery Image Zoom
// =========================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.cursor="pointer";
overlay.style.zIndex="9999";

const photo=document.createElement("img");

photo.src=img.src;

photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="15px";

overlay.appendChild(photo);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});


// =========================
// Active Navigation
// =========================

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =========================
// Typing Effect
// =========================

const title=document.querySelector(".left h2");

const text="Vikas Wadhwa";

let index=0;

title.innerHTML="";

function typing(){

if(index<text.length){

title.innerHTML+=text.charAt(index);

index++;

setTimeout(typing,120);

}

}

typing();