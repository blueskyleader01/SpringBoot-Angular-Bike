import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeService: BikeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getBikes(); 
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {
        this.bikes = data,
        // console.log(this.bikes),
        err => console.log(err),
        () => console.log('bikes loaded');
      }
    )
  }

  handleLogOut() {
    // console.log("logout");
    this.authService.logout(); 
  }
}
