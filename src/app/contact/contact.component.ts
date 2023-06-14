import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }


  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    // Perform form submission logic here
    // You can use a service to send the form data to a backend API
    console.log('Form data:', this.formData);
    // Reset the form after submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
