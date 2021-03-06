import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';

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

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      (data: any) => this.handleResponse(data),
      (error: any) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  handleError(error: any) {
    this.error = error.error.errors;
    console.log(this.error);
  }

  ngOnInit(): void {}
}
