import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { StartPage } from '../start/start';
import { Http, Response } from '@angular/http';


@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {

	loader: any;
	signupForm: FormGroup;
	private apiUrl: String;

	constructor( 
		private loadingCtrl: LoadingController,
		private navCtrl: NavController,
		private http: Http,
		fb: FormBuilder) {

		this.loader = this.loadingCtrl.create({
			content: "Please wait..."
		});

		this.signupForm = fb.group({
			'email': ['', Validators.required],
			'password': ['', Validators.required],
			'dogName': ['', Validators.required],
			'dogGender': ['', Validators.required],
			'dogBreed': ['', Validators.required],
			'dogBirthdate': ['']
		});

		this.apiUrl = 'https://walkingdog-services.herokuapp.com/api/authentication';


	}

	ionViewDidLoad() {
	}

	signup(form: any) {
		this.loader.present();
		if (form.valid) {
			let value = form.value;
			this.http
			.post(`${this.apiUrl}/signup`, JSON.stringify(value))
			.subscribe((res: Response) => {
				if (res.status == 201) {
					this.loader.dismiss();
					alert('An e-mail has been sent. Please confirm you e-mail address before log in.');
					this.navCtrl.setRoot(StartPage);
				} 

			},
			(err:Response) => {
				if (err.status == 400) {
					this.loader.dismiss();
					alert('E-mail address already exists. Please use another one.');
					return false;
				} else {
					this.loader.dismiss();
					alert('Sorry, an error occured. Please come back later');
					return false;
				}
			});
		} else {
			this.loader.dismiss();
			alert('Required fields : email, password, dog name, dog gender, dog breed');
			return false;
		}

	}

}
