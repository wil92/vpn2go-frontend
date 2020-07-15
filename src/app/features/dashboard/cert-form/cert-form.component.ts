import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { saveAs } from 'file-saver';

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
      const user = this.certForm.controls.user.value;
      this.vpn.createNewCertificate({user}).subscribe(
        certText => {
          const fileBlob = new Blob([certText], {type: 'text/plain;charset=utf-8'});
          saveAs(fileBlob, `${user}.ovpn`);
        },
        err => console.error(err));
    }
  }
}
