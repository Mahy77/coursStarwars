import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {
 
  constructor() { }
    consoleLogger() {
      console.log('Coucou');
    }
}
