import { Component } from '@angular/core';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent {


    username!: string;
    email!: string;
    password!: string;
    number!: number;
    gender!: string;


    onSubmit() {
      // Perform registration logic here, e.g. send data to a backend API
      console.log('Registration form submitted:', this.username, this.email, this.password,this.number, this.gender);
      // Add your registration logic here
    }

  }
