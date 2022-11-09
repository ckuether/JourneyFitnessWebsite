import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  mode: string = ""
  oobCode: string = ""

  constructor(private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      this.mode = params.get("mode")
      this.oobCode = params.get("oobCode")
    })
  }

  ngOnInit(): void {

    console.log("mode: " + this.mode)
    console.log("oobCode: " + this.oobCode)
  }

}
