
//variables
const textInput = document.getElementById('textInput');
const postBtn = document.getElementById('postBtn');
const section = document.querySelector('section');
const blogTitle = document.getElementById('blogTitle');
const deleteBtn = document.getElementById('deleteBtn');
const updateBtn = document.getElementById('updateBtn');

const form = document.querySelector('form');
//javascript array
information = []

//Create the post function create new article,paragraph,header.
//the after append child elements
 function createPost() {
     const newArticle = document.createElement('article');
     newArticle.style.marginTop = "50px"
     const newHeader = document.createElement('h3');
     const newParagraph = document.createElement('p');

     //create new button containers
      const newDeleteBtn = document.createElement('button');
      const newUpdateBtn = document.createElement('button');
      newDeleteBtn.id = "deleteBtn";
      newUpdateBtn.id = "updateBtn";

      //button bootstrap class
      newDeleteBtn.classList.add("btn","btn-light","mr-2","mt-3");
      newUpdateBtn.classList.add("btn","btn-light","mr-2","mt-3");

      //text content for button
      newDeleteBtn.textContent = 'Delete';
      newUpdateBtn.textContent = 'Update';

      //text content value
      newHeader.textContent = blogTitle.value;
      newParagraph.textContent = textInput.value;

      //append child elements
      newArticle.appendChild(newHeader);
      newArticle.appendChild(newParagraph);
      newArticle.appendChild(newDeleteBtn);
      newArticle.appendChild(newUpdateBtn);

      var deleteBtnListerner = newDeleteBtn.addEventListener('click', e=>{
        e.preventDefault();
        newArticle.remove()  
      });

      if(deleteBtnListerner){
          form.reset()
          return true
      }
      else{
          form.reset()
          var results = {
              "Heading": newHeader.textContent,
              "Description": newParagraph.textContent
          }
          information.push(results);
      
        }
      return newArticle;

 }

postBtn.addEventListener('click', e =>{
    e.preventDefault();

    const newPost = createPost();
    //localStorage.setItem('post', JSON.parse(newPost))
    section.appendChild(newPost);
  
});

