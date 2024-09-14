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

  infoGrid =
    'display: grid; grid-template-columns: repeat(4, 1fr); max-width: 1920px; margin-bottom: 2.5rem;';
  keyText = 'color: white; opacity: 0.5;';
  valueHeaderText =
    'color: #fff; font-size: 14px; font-weight: 400; text-decoration: none;';
  valueText = 'color: #a3a399;';
  toolsText = 'color: white; opacity: 0.5;';
  desc = ''; //for project and work description

  ngOnInit(): void {
    this.links = this.landingPageService.getLinks();
    console.log(this.links[1]['site']);
    this.projects = this.landingPageService.getProjects();
    this.workExp = this.landingPageService.getWorkExp();
  }

  generateWorkExp() {
    return this.workExp
      .map(
        (work) => `
          <div styles=${this.infoGrid}>
            <p styles=${this.keyText}>2023 - 2024</p>
            <div styles=${this.desc}>
              <a styles=${this.valueHeaderText} href="#"
                >Name of project/link to github or netilfy site</a
              >
              <p styles=${this.valueText}>Name of side project</p>
              <p styles=${this.toolsText}">This is the section for tools used</p>
            </div>
          </div>
      `,
      )
      .join('');
  }

  generateProjects() {
    return this.projects
      .map(
        (projects) =>
          `
            <div styles=${this.infoGrid}>
            <p styles=${this.keyText}>2023 - 2024</p>
            <div styles=${this.desc}>
              <p styles=${this.valueHeaderText}>Position Name</p>
              <p styles=${this.valueText}>Description of position</p>
              <p styles=${this.toolsText}>This is the section of tools used</p>
            </div>
          </div>
      `,
      )
      .join('');
  }

  generateLinks() {
    return this.links
      .map(
        (link) =>
          `
      <div styles=${this.infoGrid}>
        <p styles=${this.keyText}>${link.site}</p>
        <div styles=${this.desc}>
          <a styles=${this.valueHeaderText} href="${link.link}">${link.username}</a>
        </div>
      </div>
    `,
      )
      .join('');
  }
}
