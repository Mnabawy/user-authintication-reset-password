import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css'],
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null,
  };

  constructor(private Jarwis: JarwisService, private notify: SnotifyService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.notify.error(error.error.error)
    );
  }

  handleResponse(res: any) {
    this.form.email = null;
  }
}
