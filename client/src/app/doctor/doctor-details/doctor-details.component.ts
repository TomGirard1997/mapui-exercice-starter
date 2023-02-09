import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private router:Router) {}

  public doctorId:string=""

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.doctorId = param['id'];
    })
  }

  back(): void {
    this.router.navigate([".."]);
}

}
