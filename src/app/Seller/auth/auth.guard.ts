import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

export const sellerAuthGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const isLoggedIn = localStorage.getItem("isSellerLoggedIn");
  const url = state.url;

  // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/seller/login'){
    if(isLoggedIn === null){
      return true;
    }else{
      _router.navigate(['/dashboard']);
      return false;
    }
  }

    // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/seller/signup'){
    if(isLoggedIn === null){
      return true;
    }else{
      _router.navigate(['/dashboard']);
      return false;
    }
  }

    // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/seller/changepassword'){
    if(isLoggedIn === null){
      return true;
    }else{
      _router.navigate(['/dashboard']);
      return false;
    }
  }

  // For Login User
  if(isLoggedIn === "true"){
    return true;
  }else{
    _router.navigate(['/login']);
    return false;
  }
};

