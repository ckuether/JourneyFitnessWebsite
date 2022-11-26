import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Auth, isSignInWithEmailLink, signInWithEmailLink, applyActionCode } from "@angular/fire/auth";

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
      let emailCookie = window.localStorage.getItem("emailForSignIn")
      if(!emailCookie){
        console.log("Do something")
      }
    }
  }

  onSubmit(form: NgForm){
    console.log(this.email)
    if(this.email != null){
      this.signInWithEmail()
    }
  }

  signInWithEmail(){
    console.log("Email Sign In Entered: ")
    if(this.oobCode != null){
      applyActionCode(this.auth, this.oobCode!).then((resp) => {
        console.log("Success")
      }).catch((error) => {
        console.log(error)
      })
    }
  }

}
