import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {VpnService} from '../../../core/services';

@Component({
  selector: 'app-cert-form',
  templateUrl: './cert-form.component.html',
  styleUrls: ['./cert-form.component.scss']
})
export class CertFormComponent {
  duration = 1460;
  isCreatingCert = false;
  certForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    duration: new FormControl(''),
  });

  constructor(private vpn: VpnService) {
  }

  createCert() {
    if (this.certForm.valid && !this.isCreatingCert) {
      this.isCreatingCert = true;
      const user = this.certForm.controls.user.value;
      this.duration = this.certForm.controls.duration.value ? this.certForm.controls.duration.value : 1460;
      this.vpn.createNewCertificate({user, duration: this.duration.valueOf()}).subscribe(
        () => {
          this.certForm.controls.user.setValue('');
          this.certForm.controls.duration.setValue('');
          this.isCreatingCert = false;
        },
        err => {
          console.error(err);
          this.isCreatingCert = false;
        });
    }
  }
}
