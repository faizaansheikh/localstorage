const foo = () =>{
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    var cpassword = document.getElementById('cpass').value
    

    // alert("Registration completed")

    localStorage.setItem("Name",fname)
    localStorage.setItem("Last name",lname)
    localStorage.setItem("Email",email)
    localStorage.setItem("Password",password)
    localStorage.setItem("Confirm passwrod",cpassword)

    if(fname === ""){
        var span = document.getElementById('ftext').innerHTML = "** please fill the name field"
        return false;
    }
    if(lname === ""){
        var span1 = document.getElementById('ltext').innerHTML = "** please fill the last name field"
        return false;
    }
    if(email === ""){
        var span2 = document.getElementById('etext').innerHTML = "** please fill the email field"
        return false;
    }
    if(password === ""){
        var span3 = document.getElementById('ptext').innerHTML = "** please enter password"
        return false;
    }
    if(password.length < 5 || password.length > 20){
        var span3 = document.getElementById('ptext').innerHTML = "** password must be between 5 to 20 charcters"
        return false;
    }
    if(cpassword === ""){
        var span4 = document.getElementById('cptext').innerHTML = "** please enter confirm password"
        return false;
    }
    if(cpassword !== password){
        var span4 = document.getElementById('cptext').innerHTML = "** your confirm password is not matching with password"
        return false;
    }
    else{
        window.location.href = "login.html"
    }

}
const login = () =>{
    var email1 = document.getElementById('email1').value
    var pass1 = document.getElementById('pass1').value

    var email2 = localStorage.getItem('Email')
    var pass2 = localStorage.getItem('Password')

    if(email1 === ""){
        var span5 = document.getElementById("e1text").innerHTML = "** please enter email address"
        return false;
    }
    if(pass1 === ""){
        var span6 = document.getElementById("p1text").innerHTML = "** please enter password"
        return false;
    }

    if(email1 === email2 && pass1 === pass2){
        localStorage.setItem("code","secret")
        window.location.href = "home.html"
        
    }else{
        alert("email & passwrod not found")
    }


    
}
// const news = () => window.location.href = "login.html"

const logout = () =>{
    localStorage.setItem("code","logout")
    window.location.href = "login.html"
} 
    

const access = () =>{
    var abc = localStorage.getItem("code")
    if(abc === "secret"){

    }else{
        window.location.href = "login.html"
    }
}