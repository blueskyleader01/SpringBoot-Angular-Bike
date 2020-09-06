import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg; 

  constructor(private bikeService: BikeService, 
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id); 
  }

  getBikeReg(id: number){
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data
      }, 
      err => console.log(err),
      () => console.log('bike loaded')
    )
  }

  handleLogOut(){
    this.authService.logout(); 
  }

}
