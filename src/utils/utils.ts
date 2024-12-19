export function logOut(redirectLoginPage: any) {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        redirectLoginPage('/login', {replace: true });
    }
}