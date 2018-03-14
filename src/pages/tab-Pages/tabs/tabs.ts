import { Component } from '@angular/core';
import { ContainerPage } from "../container/container";
import { LockPage } from "../lock/lock";
import { HomePage } from '../home/home';
import { PersonalCenterPage } from "../personal-center/personal-center";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  Home = HomePage;
  container = ContainerPage;
  myLock = LockPage;
  personalCenter = PersonalCenterPage
    
  constructor() {

  }

}