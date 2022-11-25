import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Auth, isSignInWithEmailLink, signInWithEmailLink } from "@angular/fire/auth";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  mode?: string|null = null
  oobCode?: string|null = null

  email?: string|null = null

  constructor(private route: ActivatedRoute, private auth: Auth) { 
    this.route.queryParamMap.subscribe(params => {
      this.mode = params.get("mode")
      this.oobCode = params.get("oobCode")
    })
  }

  ngOnInit(): void {
    console.log(window.location.href)
    if(isSignInWithEmailLink(this.auth, window.location.href)){
      console.log("Entered")
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn")
      if(!email){
        console.log("No email")
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      // signInWithEmailLink(auth, email, window.location.href)
      //   .then((result) => {
      //     // Clear email from storage.
      //     window.localStorage.removeItem('emailForSignIn');
      //     // You can access the new user via result.user
      //     // Additional user info profile not available via:
      //     // result.additionalUserInfo.profile == null
      //     // You can check if the user is new or existing:
      //     // result.additionalUserInfo.isNewUser
      //     console.log("Success")
      //   })
      //   .catch((error) => {
      //     // Some error occurred, you can inspect the code: error.code
      //     // Common errors could be invalid email and invalid or expired OTPs.
      //     console.log("Failed")
      //   });
    }else{
      console.log("Failed")
    }
  }

  onSubmit(form: NgForm){
    
  }

}
