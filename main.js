let homelink = document.getElementsByClassName('homelink')[0];

let aboutlink = document.getElementsByClassName('aboutlink')[0];
let contactlink = document.getElementsByClassName('contactlink')[0];




const currentPageUrl = window.location.href;




 if (currentPageUrl.includes('about')) {
  aboutlink.classList.add('active-link');
} 

else if (currentPageUrl.includes('contact')) {
    contactlink.classList.add('active-link');
}
else{
  homelink.classList.add('active-link');
}

let a = [ 

  "20230405_114448.webp",
  "20230405_122919.webp",
  "20230405_151249.webp",
  "20230508_052405.webp",
  "IMG_20210331_183229.jpg",
  "IMG_20211114_084816.jpg",
  "IMG_20220624_104843.jpg",
   "IMG_20220626_170248.jpg",
  "20221012_181844.webp",
  "20221229_152235.webp",
  "20230101_120532.webp",
  "20230101_121634.webp",
  "20230102_121617.webp",
  "20230103_132209.webp",
  "20230103_132427.webp",
  "20230103_132936.webp",
  "20230103_133110.webp",
  "20230115_123108.webp",
  "20230115_125723.webp",
  "20230213_174840.webp",
  "20230405_081645.webp",
  "20230405_084039.webp",
  "20230405_084801.webp",
  "20230405_085232.webp",
  "20230405_090217.webp",
  "20230405_090318.webp",
  "20230405_092652.webp",
  "20230405_101242.webp",
  "20230405_102035.webp",
  "20230405_112541.webp",
  "20230405_114257.webp"

]

let b = [
"20230113_120121.jpg",
"IMG_20200316_131003-01.jpeg",
"IMG_20200320_170736-01.jpeg",
"IMG_20200320_170745-01.jpeg",
"IMG_20200405_142946-01.jpeg",
"IMG_20200520_202404.jpg",
"20230104_220627.jpg",
"20230107_134039.jpg",


]

let blogForm = document.getElementById("BlogForm");


function secretBtn(){
  if(blogForm.style.display === "flex")
          blogForm.style.display = "none";

  else
  blogForm.style.display = "flex";
}


let photographySection1 = document.getElementById("photographySection");

a.forEach((item)=>{
   photographySection1.innerHTML+=`

   
   <img src="./images/${item}" loading="lazy" decoding="async"></img>
  
   `;

})

let artSection1 = document.getElementById("artSection");

b.forEach((item)=>{
   artSection1.innerHTML+=`

   <img src="./art/${item}" loading="lazy"></img>
  
   `;

})




