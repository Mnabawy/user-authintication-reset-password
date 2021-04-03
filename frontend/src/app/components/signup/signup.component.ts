import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };

  public error: any = [];

  constructor(private Jarwis: JarwisService) {}

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      (data:any) => console.log(data),
      (error:any) => this.handleError(error)
    );
  }

  handleError(error: any) {
    this.error = error.error.errors;
    console.log(this.error);
  }

  ngOnInit(): void {}
}
