import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss', '../../assets/css/main.scss'],
})
export class ReferralPage implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit() {
  }

  copyReferralLink(){
    this.clipboard.copy(`I use Zappy to save money on airtime and more. Kindly signup with my link to get up to N250 free. https://zappy.com/casual5050`);
    this.clipboard.paste().then(
      (resolve: string) => {
          alert(resolve);
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
      );
    this.clipboard.clear();
  }
}
