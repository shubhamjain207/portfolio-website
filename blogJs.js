
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

  import { getFirestore, collection, getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


  import { getStorage,ref,uploadBytes,getDownloadURL,listAll} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";


  let uploadBlog1 = document.getElementById("uploadBlog");
  let content1 = document.getElementById("content");

  let date1 = document.getElementById("date");
  let heading1 = document.getElementById("heading");
  let file1 = document.getElementById("file");

  let blogList1 = document.getElementById("blogList");


  
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

  const storage = getStorage(app);
  const myCollection = collection(db, "blogs");


    const querySnapshot = await getDocs(collection(db, 'blogs'));
  

  let list = [];
  

  querySnapshot.forEach((doc) => {

  
    list.push(doc.data());
        
    });
    
   let sortedList = list.sort((r1, r2) => (r1.timestamp < r2.timestamp) ? 1 : (r1.timestamp > r2.timestamp) ? -1 : 0);
    
   sortedList.forEach((item)=>{
    
    if(item.image == null || item.image == ""){
      blogList1.innerHTML+= `
          
      <div class="blogItem"> 
    
      <p class="blogHeading">
            ${item.heading +  " | " + item.date}
      </p>
    

      <p class="blogContent">
         ${item.content}
      </p>
    </div>
     
      `
    }

          else if(item.image.includes(".mp4")){
      blogList1.innerHTML+= `
          
      <div class="blogItem">
    
    <a href="${item.image}">Link</a>
    
      <p class="blogHeading">
            ${item.heading + " | " + item.date}
      </p>
    
    
    
      <p class="blogContent">
         ${item.content}
      </p>
    </div>
      
    
      
      
      `;
    }else{
          blogList1.innerHTML+= `
          
          <div class="blogItem">
    
          <img src=${item.image}>
    
          <p class="blogHeading">
                ${item.heading + " | " + item.date}
          </p>
    
    
    
          <p class="blogContent">
             ${item.content}
          </p>
      </div>
          
    
          
          
          `;
    
    }

    
   });
 
 


uploadBlog1.addEventListener("click",async ()=>{
  
 
  var imageUrl = "";

const file = file1.files[0]; 

  if (file) {
    const storageRef = ref(storage,"blogsimages/"+ file.name); 

    uploadBytes(storageRef, file).then((snapshot) => {
      

      getDownloadURL(storageRef)
      .then(async (url) => {
      
        imageUrl = url;

        let content2 = content1.value;
        let date2 = date1.value;
        let heading2 = heading1.value;
        let image2 = imageUrl;

        console.log("IMAGE____<" + image2);

        const data = {
          content:content2,
          date:date2,
          heading:heading2,
          image:image2 == null?"":image2,
          timestamp:Date.now().toString()
        }
      
      
      const docRef = await addDoc(myCollection, data);

      document.location.reload();
      
    
      })
      .catch((error) => {
        
      });

    }).catch((error) => {
      console.error("Error uploading file:", error);
    });
  } else {
   
    

    let content2 = content1.value;
    let date2 = date1.value;
    let heading2 = heading1.value;
    let image2 = imageUrl;


    const data = {
      content:content2,
      date:date2,
      heading:heading2,
      image:image2,
      timestamp:Date.now().toString()
    }
  
  
  const docRef = await addDoc(myCollection, data);

  document.location.reload();



  }


 

});

