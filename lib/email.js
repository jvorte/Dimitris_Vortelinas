function sendMail() {
// check if text area is empty
  var isValidForm = document.forms["myForm"].checkValidity();
  if (isValidForm)
  {


  //  -------------------------------------   

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_mxr11i5";
  const templateID = "template_ksnq0yr";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);

          
        location.replace("#up"); 
 
    })
    .catch(err=>console.log(err));
    
         // call modal (message)
         var myModal = new bootstrap.Modal(document.getElementById('contactModal'), { 
          keyboard: false 
        })   
        myModal.show();
        document.forms["myForm"].submit();
  }
  // else
  // {
  //  location.replace("./index.html?#contact");

  //  var myModal = new bootstrap.Modal(document.getElementById('contactModal2'), { 
  //   keyboard: false 
  // }) 
  // myModal.show();

  // }

}

