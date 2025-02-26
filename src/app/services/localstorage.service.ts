import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveKeys(keys: any) {
    localStorage.setItem("keys", keys)
  }

  getKeys() {
    return localStorage.getItem("keys")
  }

}
