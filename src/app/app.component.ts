import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JourneyFitnessWebsite';

  ngOnInit(): void{
    console.log("App Component Init")
  }
}
