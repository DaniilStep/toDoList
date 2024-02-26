import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup, NgForm, NgModel, Validators, } from '@angular/forms';

class User {
	constructor(
		public name: string,
		public email: string,
		public phone: string,
	) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
	styleUrl: './form.component.scss'
})
export class FormComponent {
	name!: string;
	email!: string;
	phone!: string;

	users: User[] = [];
	newUser = new User('', '', '');

	test: string = '';

	testControl: FormControl = new FormControl('');

	showMessage: boolean = false;

	public showText() {
		if (this.test == 'привет') this.showMessage = true;
		else this.showMessage = false;
	}

	// myForm!: FormGroup;

	// constructor() {
	// 	this.myForm = new FormGroup({
	// 		'name': new FormControl('', Validators.required),
	// 		'email': new FormControl('', [Validators.required, Validators.email]),
	// 		'phone': new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
	// 	})
	// }

	// private initForm(): void {
	// 	this.form = this.fb.group({
	// 		name: this.fb.control('', [Validators.required]),
	// 		company: this.fb.control('', [Validators.required]),
	// 		age: this.fb.control('', [Validators.required]),
	// 	})
	// }

	myForm!: FormGroup;

	constructor(private fb: FormBuilder) {

		this.testControl.valueChanges.subscribe((value) => {
			if (value == 'привет') {
				this.showMessage = true;
			} else {this.showMessage = false}
		});

		this.myForm = fb.group({
			'name': ['', [Validators.required]],
			'email': ['', [Validators.required, Validators.email]],
			'phone': ['', [Validators.required, Validators.pattern('[0-9]{11}')]]
		})

		// this.myForm.valueChanges.subscribe((value) => {
		// 	console.log(value)
		// })

		this.myForm.get('name')?.valueChanges.subscribe((value) => {
			if (value == 111) {
				console.log(value);
			}
		})
	}

	// constructor() {
	// 	this.myForm = new FormGroup({
	// 		'name': new FormControl('', Validators.required),
	// 		'email': new FormControl('', [Validators.required, Validators.email]),
	// 		'phone': new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
	// 	})
	// }

	public onSubmit() {
		console.log(this.myForm);
	}

	// public get nameControl(): FormControl {
	// 	return this.form.get('name') as FormControl;
	// }

	// public get companyControl(): FormControl {
	// 	return this.form.get('company') as FormControl;
	// }

	// public get ageControl(): FormControl {
	// 	return this.form.get('age') as FormControl;
	// }

	// public addUser() {
	// 	this.users.push({...this.newUser});
	// 	console.log(this.users);
	// }

	// public logUser(name: NgModel, company: NgModel, age: NgModel) {
	// 	console.log(name);
	// 	console.log(company);
	// 	console.log(age);
	// }

	// ngOnInit() {
	// 	this.initForm();
	// }
}
