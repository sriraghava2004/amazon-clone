const xhr=new XMLHttpRequest();//creates new http message to send to the backend

xhr.addEventListener('load',()=> {
  console.log(xhr.response);//It is to print the response from the backend
})
xhr.open('GET','https://supersimplebackend.dev/products');
xhr.send();