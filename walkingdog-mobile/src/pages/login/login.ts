import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Auth as IonicAuth, User as IonicUser, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { FormBuilder,FormGroup } from '@angular/forms';

import { HomePage } from '../home/home';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-login',
    templateUrl: 'login.html'
  })
  export class LoginPage {

    loader: any;
    loginForm: FormGroup;

    constructor(
      private ionicAuth: IonicAuth, 
      private ionicUser: IonicUser, 
      private loadingCtrl: LoadingController,
      private navCtrl: NavController,
      fb: FormBuilder) {

      if (this.ionicAuth.isAuthenticated()) {
        this.navCtrl.setRoot(HomePage);
      }

      this.loader = this.loadingCtrl.create({
        content: "Please wait..."
      });

      this.loginForm = fb.group({
        'email': [''],
        'password': ['']
      });

    }

    ionViewDidLoad() {
    }


    login(value: any) {
      this.loader.present();
      let details: UserDetails = {'email': value.email, 'password': value.password};
      this.ionicAuth.login('basic', details).then( () =>{
        this.loader.dismiss();
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        this.loader.dismiss();
        alert(err);
      });

    }

  }
