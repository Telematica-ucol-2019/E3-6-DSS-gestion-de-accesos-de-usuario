import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
const auth = getAuth()
//console.log(auth);
const signupForm = document.querySelector('#signup-form')
const signUpModal = document.querySelector('#signUpModal')

signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const signupEmail = document.querySelector('#signup-email').value
    const signupPassword = document.querySelector('#signup-password').value

        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then(userCredential => {
            //clear the form
            signupForm.reset()
            
            //hide modal
            $('#signUpModal').modal('hide')
            //signUpModal.hide()
            console.log("sign up AAA")    
        })
})
