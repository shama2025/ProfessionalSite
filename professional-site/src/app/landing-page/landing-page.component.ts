import { Component } from '@angular/core';
import { LandingPageServiceService } from '../service/landing-page-service.service';
import { links } from '../links';
import { projects } from '../projects';
import { workExp } from 'src/work-exp';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private landingPageService: LandingPageServiceService) {}

  links: links[] = [];
  projects: projects[] = [];
  workExp: workExp[] = [];

  ngOnInit(): void {
    this.links = this.landingPageService.getLinks();
    this.projects = this.landingPageService.getProjects();
    this.workExp = this.landingPageService.getWorkExp();
  }

}
