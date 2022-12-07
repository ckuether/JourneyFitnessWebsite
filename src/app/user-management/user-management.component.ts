import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Auth, isSignInWithEmailLink, signInWithEmailLink, applyActionCode } from "@angular/fire/auth";
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  isEmailInputPrompt: boolean = true
  emailVerified: boolean|null = null

  mode?: string|null = null
  oobCode?: string|null = null

  isEmailVerification: boolean = false

  email?: string|null = null

  constructor(private route: ActivatedRoute, private auth: Auth, private cookieService:CookieService) { 
    this.route.queryParamMap.subscribe(params => {
      this.mode = params.get("mode")
      this.oobCode = params.get("oobCode")

      if(this.mode == "verifyEmail"){
        this.isEmailVerification = true
      }
    })
  }

  ngOnInit(): void {

    let email = this.cookieService.get('emailVerification')
    let cookies = this.cookieService.getAll()

    console.log('email: ' + email)
    console.log(cookies)
  }

  onSubmit(form: NgForm){
    console.log(this.email)
    if(this.email != null){
      this.verifyEmail()
    }
  }

  verifyEmail(){
    console.log("Email Sign In Entered: ")
    if(this.oobCode != null){
      applyActionCode(this.auth, this.oobCode!).then((resp) => {
        this.emailVerified = true
        console.log("Success")
      }).catch((error) => {
        this.emailVerified = false
        console.log(error)
      })
    }
  }

}
