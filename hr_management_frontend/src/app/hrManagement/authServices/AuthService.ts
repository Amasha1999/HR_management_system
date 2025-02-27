

export class AuthService {

  constructor() {
  }

  loggedIn() {
    return sessionStorage.getItem('token');
  }

}
