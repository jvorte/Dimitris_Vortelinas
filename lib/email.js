function sendMail() {
// check if text area is empty
  var isValidForm = document.forms["myForm"].checkValidity();
  if (isValidForm)
  {
      document.forms["myForm"].submit();

  //  -------------------------------------   
  //  location.replace("#up");  

        
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

           

        // call modal (message)
        var myModal = new bootstrap.Modal(document.getElementById('contactModal'), { 
          keyboard: false 
        })   
        myModal.show();
        
 
    })
    .catch(err=>console.log(err));
    
    location.replace("#up"); 
  }
  else
  {
  //  location.replace("./index.html?#contact");

  //  var myModal = new bootstrap.Modal(document.getElementById('contactModal2'), { 
  //   keyboard: false 
  // }) 
  // myModal.show();

  }

}

