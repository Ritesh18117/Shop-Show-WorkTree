import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const token = sessionStorage.getItem("token");
  const isLoggedIn = "true";
  const url = state.url;

  // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/auth/login'){
    if(token === null){
      return true;
    }else{
      _router.navigate(['/dashboard']);
      return false;
    }
  }

    // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/auth/signup'){
    if(token === null){
      return true;
    }else{
      _router.navigate(['/dashboard']);
      return false;
    }
  }

    // For Redirecting Page to Dashboard if User if Loggedin
  if(url === '/auth/changepassword'){
    if(token === null){
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
}

