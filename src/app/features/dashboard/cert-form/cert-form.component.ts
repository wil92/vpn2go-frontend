import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VpnService } from '../../../core/services';

@Component({
  selector: 'app-cert-form',
  templateUrl: './cert-form.component.html',
  styleUrls: ['./cert-form.component.scss']
})
export class CertFormComponent {

  isCreatingCert = false;

  certForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
  });

  constructor(private vpn: VpnService) {
  }

  createCert() {
    if (this.certForm.valid && !this.isCreatingCert) {
      this.isCreatingCert = true;
      const user = this.certForm.controls.user.value;
      this.vpn.createNewCertificate({user}).subscribe(
        () => {
          this.certForm.controls.user.setValue('');
          this.isCreatingCert = false;
        },
        err => {
          console.error(err);
          this.isCreatingCert = false;
        });
    }
  }
}
