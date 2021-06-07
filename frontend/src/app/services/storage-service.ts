import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, of } from 'rxjs';
import { appConfig } from "../core/config/config";
@Injectable({
  providedIn: 'root'
})



export class StorageService {
  private _storage: Storage | null = null;
  private user_mobile:any;
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key: string, value: any) {
      this._storage?.set(key, value);
  }
  public async get (mobile:any){
  let localStorage_mobile: any;
   // console.log('Testing:', mobile);
     // return this.storage.get(mobile);
       // console.log(result);
       // return result;

  this.storage.forEach(async(key, value, index) => {
       console.log(index);
        console.log(key);
        console.log(value);
    if (value == mobile) {
        
        console.log(index);
        console.log(key);
        console.log(value);
        
        this.user_mobile = key;
        appConfig.mobile = key;
    }
     console.log('MOBILE #:', this.user_mobile);
    return await this.getMobileNo(this.user_mobile);
   
   });
 }
  //console.log(this.user_mobile);
  public passMobileNo(){
    console.log(this.getMobileNo(this.user_mobile));
    let mob = this.getMobileNo(this.user_mobile)
    return mob;
  }
  public getMobileNo(mobile:any){
     return mobile;
   // console.log(mobile);
  }

  public getAll(key:any) {
    return this._storage?.get(key);
  }
  public remove(key: string) {
    this._storage?.remove(key);
  }
  public clear() {
    this._storage?.clear();
  }
  public length() {
    this._storage?.length();
  }
  public setEncryptionKey(key: string) {
    this._storage?.setEncryptionKey(key);
  }

  public enumerateRecords(key, value, index) {
    
    this._storage?.forEach((key, value, index) => {
        console.log(key);
    });
  }
  
}
