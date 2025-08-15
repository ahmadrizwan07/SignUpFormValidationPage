const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const eyeShow = document.getElementById("eye-slash")
const eyeHide = document.getElementById("eye")
const againEyeShow = document.getElementById("againeyeslash");
const againEyeHide = document.getElementById("again-eye")

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword() && validateAgainPassword() && matchPass() ){
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const conPassword = document.getElementById("conPassword");
        
        name.value = '';
        email.value = '';
        password.value = '';
        conPassword.value = '';
        alert("Form submitted successfully");
    }
    })

    function validateName (){
        let name = document.getElementById("name").value;

        if(name.length == 0){
            nameError.innerHTML = "Name is required";
            return false;
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = "Write the full name";
            return false
        }
         nameError.innerHTML = "";
        return true;
        
    }

function validateEmail (){
        let email = document.getElementById("email").value;

        if(email.length == 0){
            emailError.innerHTML = "Email is required";
            return false;
        }
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            emailError.innerHTML = "Enter valid email";
            return false
        }
         emailError.innerHTML = "";
        return true;
        
    }

    function validatePassword (){
        let password = document.getElementById("password").value;

        if(password.length == 0){
            passError.innerHTML = "Password is required";
            return false;
        }
        if(password.length < 8){
            passError.innerHTML = "Password should contain Atleast 8 character";
            return false
        }
         passError.innerHTML = "";
        return true;
        
    }

        function validateAgainPassword (){
        let conPassword = document.getElementById("conPassword").value;

        if(conPassword.length == 0){
            AgainPassError.innerHTML = "Password is required";
            return false;
        }
        if(conPassword.length < 8){
            AgainPassError.innerHTML = "Password should contain Atleast 8 character";
            return false
        }
         AgainPassError.innerHTML = "";
        return true;
        
    }

    function matchPass(){
        let password = document.getElementById("password").value;
        let conPassword = document.getElementById("conPassword").value;

        if(password === conPassword){
             AgainPassError.innerHTML = "";
            return true
           
        }
        else{
                AgainPassError.innerHTML = "Match the password";
            return false;
            
        }
        
    }


    function showPass (){
        let password = document.getElementById("password");
        
        if(password.type === "password"){
            password.type = "text"
            eyeShow.style.display = "none";
            eyeHide.style.display = "block";
        }
        else{
            password.type = "password"
            eyeShow.style.display = "block";
            eyeHide.style.display = "none";
        }
    }


     function hidePass (){
        let password = document.getElementById("password");
        
        if(password.type === "text"){
            password.type = "password"
            eyeShow.style.display = "block";
            eyeHide.style.display = "none";
        }
       
    }

    function showAgainPass(){
         let conPassword = document.getElementById("conPassword");
        
        if(conPassword.type === "password"){
            conPassword.type = "text";
            againEyeShow.style.display = "none";
            againEyeHide.style.display = "block";
        }
        else{
            conPassword.type = "password"
            againEyeShow.style.display = "block";
            againEyeHide.style.display = "none";
        }
    }

    function hideAgainPass(){
         let conPassword = document.getElementById("conPassword");
        
        if(conPassword.type === "text"){
            conPassword.type = "password";
            againEyeShow.style.display = "block";
            againEyeHide.style.display = "none";
        }
    }
