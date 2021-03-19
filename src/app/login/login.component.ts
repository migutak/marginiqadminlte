import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MarginService } from '../svc/margin.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  data: any;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    public marginService: MarginService,
  ) {
    this.valForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login($ev, value: any) {
    $ev.preventDefault();
    // console.log(value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.valForm.invalid) {
      return;
    }

    this.getuser((value.username).toLowerCase(), value.password);

  }

  getuser(username, password) {
    this.marginService.login(username).subscribe(user => {
      if (user) {
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/home']);
      } else {
        this.error = 'Error';
        this.loading = false;
      }

      // return user;
    }, error => {
      console.log(error);
      if (error.statusText === 'Not Found') {
        this.error = 'Error';
        this.loading = false;
      } else {
        this.error = 'Error during ';
        this.loading = false;
      }
    });
  }

}
