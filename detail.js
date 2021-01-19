let titlePost = document.getElementById("title- post");
let datePost = document.getElementById("date-post");
let imageHeader = document.getElementById("image-header-post");
let bodyPost = document.getElementById("body-post");
let postAPI = "https://sheetdb.io/api/v1/o6lhpznfzeo4k"
fetch (postAPI)
   .then (function(res) {
      return res.json()
   })
   .then (function(data){
      console.log(data);
      titlePost.innerHTML = data[0].title;
      datePost.innerHTML= data[0].date;
      imageHeader.innerHTML = data[0].imageURL
      bodyPost.innerHTML = data[0].body;
   })