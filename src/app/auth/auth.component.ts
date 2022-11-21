import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  mode?: string|null = null
  oobCode?: string|null = null

  constructor(private route: ActivatedRoute) { 
    
    this.route.queryParamMap.subscribe(params => {
      this.mode = params.get("mode")
      this.oobCode = params.get("oobCode")
    })
  }

  ngOnInit(): void {
    console.log("Mode: " + this.mode)
    console.log("oobCode: " + this.oobCode)
  }

}
