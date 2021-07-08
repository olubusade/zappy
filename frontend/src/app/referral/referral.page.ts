import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
const { Share } = Plugins;
@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss', '../../assets/css/main.scss'],
})
export class ReferralPage implements OnInit {
  referralCode:any = localStorage.getItem(`setting:referral_code`);
  constructor(private clipboard: Clipboard,
              private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  copyReferralLink(){
    this.clipboard.copy(`I use Zappy to save money on airtime and more. Kindly signup with my link to get up to N200 free on your first transaction. https://accessbankplc.com/?ref=${this.referralCode}`);
    this.clipboard.paste().then(
      async (resolve: string) => {
            const toast = await this.toastCtrl.create({
              message: `Referral link copied to clipboard successfully`,
              duration: 2000
            });
            toast.present();
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
      );
    this.clipboard.clear();
  }
  async shareReferralLink(){
    await Share.share({
      title: 'Zappy Billing App',
      text: 'I use Zappy to save money on airtime and more. Kindly signup with my link to get up to N250 free.',
      url: `https://accessbankplc.com/?ref=${this.referralCode}`
    });
  }
}
