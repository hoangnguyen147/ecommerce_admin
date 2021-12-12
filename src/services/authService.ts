import cookie from 'js-cookie';

class AuthService {
  handleAuthentication = () => {
    const accessToken = this.getAccessToken();
    if (!accessToken) return;
    cookie.set('accessToken', accessToken, { expires: 1 });
  };

  logOut = () => {
    cookie.remove('accessToken');
  };

  getAccessToken = () => cookie.get('accessToken');

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
