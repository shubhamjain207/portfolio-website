
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

import { getFirestore, collection, getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


import { getStorage,ref,uploadBytes,getDownloadURL,listAll} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";



let graphicsContent1 = document.getElementById("graphicsContent");
let appContent1 = document.getElementById("appContent");
let webContent1 = document.getElementById("webContent");


const firebaseConfig = {

  apiKey: "AIzaSyA8pF1EjwkanlYJb_qYq-Zn1wNhvjgeWqg",

  authDomain: "portfoliowebsite-c9bf1.firebaseapp.com",

  projectId: "portfoliowebsite-c9bf1",

  storageBucket: "portfoliowebsite-c9bf1.appspot.com",

  messagingSenderId: "951802283810",

  appId: "1:951802283810:web:f14c07737cd8820f5c077b",

  measurementId: "G-G51CNLY9CC"

};


  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);


  const db = getFirestore(app);
  const myCollection = collection(db, "blogs");



    const querySnapshot = await getDocs(collection(db, 'graphics'));
    const querySnapshot1 = await getDocs(collection(db, 'appdev'));
    const querySnapshot2 = await getDocs(collection(db, 'webdev'));


  
 
   
  let list = [];
  let list1  = [];
  let list2  = [];
  

  querySnapshot.forEach((doc) => {

  
    list.push(doc.data());
        
    });


    list.forEach((item)=>{

      if(item.image == null || item.image == ""){
        return;
      }

       else if(item.image.includes(".mp4")){

    
        graphicsContent1.innerHTML+=`
       
            
       <div class="contentItem">
    
       <iframe src=${item.image} frameBorder="0"></iframe>
     
       <p class="contentHeading">
             ${item.heading}
       </p>

       <a class="contentLink" href="${item.link}">
              ${item.link}
       </a>
     
     </div>
       
     
       
       
       `;


     }
     
     else{

        
      graphicsContent1.innerHTML+= `
           
           <div class="contentItem">
     
           <img src=${item.image}>
     
           <p class="contentHeading">
                 ${item.heading}
           </p>

           <a class="contentLink" href="${item.link}">
           ${item.link}
    </a>
     
       </div>
           
     
       
       `;

     }

 });


 querySnapshot1.forEach((doc) => {

  
  list1.push(doc.data());
      
  });


  list1.forEach((item)=>{

    if(item.image == null || item.image == ""){
      return;
    }

     else if(item.image.includes(".mp4")){

  
      appContent1.innerHTML+=`
     
          
     <div class="contentItem">
  
     <iframe src=${item.image} frameBorder="0"></iframe>
   
     <p class="contentHeading">
           ${item.heading}
     </p>

     <a class="contentLink" href="${item.link}">
            ${item.link}
     </a>
   
   </div>
     
   
     
     
     `;


   }
   
   else{

      
    appContent1.innerHTML+= `
         
         <div class="contentItem">
   
         <img src=${item.image}>
   
         <p class="contentHeading">
               ${item.heading}
         </p>

         <a class="contentLink" href="${item.link}">
         ${item.link}
  </a>
   
     </div>
         
   
     
     `;

   }

});


querySnapshot2.forEach((doc) => {

  
  list2.push(doc.data());
      
  });


  list2.forEach((item)=>{

    if(item.image == null || item.image == ""){
      return;
    }

     else if(item.image.includes(".mp4")){

  
      webContent1.innerHTML+=`
     
          
     <div class="contentItem">
  
     <iframe src=${item.image} frameBorder="0"></iframe>
   
     <p class="contentHeading">
           ${item.heading}
     </p>

     <a class="contentLink" href="${item.link}">
            ${item.link}
     </a>
   
   </div>
     
   
     
     
     `;


   }
   
   else{

      
    webContent1.innerHTML+= `
         
         <div class="contentItem">
   
         <img src=${item.image}>
   
         <p class="contentHeading">
               ${item.heading}
         </p>

         <a class="contentLink" href="${item.link}">
         ${item.link}
  </a>
   
     </div>
         
   
     
     `;

   }

});

