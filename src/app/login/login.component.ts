import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    username!: string;
    password!: string;

    onSubmit() {
      // Perform login logic here, e.g. send data to a backend API for authentication
      console.log('Login form submitted:', this.username, this.password);
      // Add your login logic here
    }
  }

