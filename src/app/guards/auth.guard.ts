import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthapiService } from '../services/authapi.service';


export const authGuard: CanActivateFn = (route, state) => {

  const authapiService = inject(AuthapiService);
  if(!authapiService.isLoggedIn()){ 
    return false;
  }
  return true;
};
