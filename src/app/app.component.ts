import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], // Importing RouterOutlet and CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  studentData: any[] = []; // Array with student data
  weatherData: any[] = []; // Array with weather data
  temperture: any = ""; // String to hold temperature

  constructor(private dataService: DataService) { } 

  ngOnInit(): void {
    // Getting student data on component initialization
    this.dataService.getStudentData().subscribe(
      (data) => {
        this.studentData = data.students; 
      }
    );

    // Getting weather data on component initialization
    this.dataService.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data.weather; // Getting fetched weather data to weatherData array
        this.temperture = (data.main.temp - 273.15).toFixed(2); // Converting temperature from Kelvin to Celsius and assigning to temperture
      }
    );
  }
}