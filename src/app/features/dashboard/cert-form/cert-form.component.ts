import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VpnService } from '../../../core/services';

@Component({
  selector: 'app-cert-form',
  templateUrl: './cert-form.component.html',
  styleUrls: ['./cert-form.component.scss']
})
export class CertFormComponent {

  certForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
  });

  constructor(private vpn: VpnService) {
  }

  createCert() {
    if (this.certForm.valid) {
      this.vpn.createNewCertificate({user: this.certForm.controls.user.value}).subscribe(
        certText => {

        },
        err => console.error(err));
    }
  }
}
