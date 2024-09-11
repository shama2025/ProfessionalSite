import { LiteralArray } from '@angular/compiler';
import { WORKEXP } from '../professional-interfaces';
import { LINKS } from '../professional-interfaces';
import { PROJECTS } from '../professional-interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingPageServiceService {
  constructor() {}

  getWorkExp() {
    return WORKEXP
  }

  getProjects(){
    return PROJECTS
  }

  getLinks(){
    return LINKS
  }
}
