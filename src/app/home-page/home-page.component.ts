import { Component, OnInit } from '@angular/core';
import { collection, doc, Firestore, setDoc, updateDoc, deleteDoc, Timestamp } from '@angular/fire/firestore'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  emailAddress: string = ''
  emailInputError = false
  emailConfirmation = false

  constructor(public db: Firestore) { }

  ngOnInit(): void {
  }

  submitted(){
    if(this.emailAddress.match('^[^\s@]+@[^\s@]+\.[^\s@]+')){
      let registeredUserDoc = doc(this.db, "userWaitlist/" + this.emailAddress)
      let platform = "Desktop"

      setDoc(registeredUserDoc, {
        "email": this.emailAddress,
        "platform": this.getPlatform(),
        "timestamp": Timestamp.now()
      }).then(() =>{
        this.emailConfirmation = true
      })
      this.emailInputError = false
    }else{
      this.emailConfirmation = false
      this.emailInputError = true
    }
  }

  getPlatform(){
    let platform = "Desktop"
    if(this.iOS()){
      platform = "iOS"
    }else if(this.isAndroid()){
      platform = "Android"
    }
    return platform
  }

  iOS(): boolean {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
  }

  isAndroid(): boolean {
    const userAgent = navigator.userAgent;
    return /Android/.test(userAgent);
  }
}
