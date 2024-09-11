import { Component } from '@angular/core';
import { LandingPageServiceService } from '../service/landing-page-service.service';
import { WORKEXP } from '../professional-interfaces';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private landingPageService: LandingPageServiceService) {}

  ngOnInit(): void {
    let interfaces = this.landingPageService.getInterfaces();
  }
}
