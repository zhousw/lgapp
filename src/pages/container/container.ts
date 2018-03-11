import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modelCtrl: ModalController) {
    this.goLigin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContainerPage');
  }

  goLigin(){
    this.navCtrl.push('LoginPage');
  }

}
