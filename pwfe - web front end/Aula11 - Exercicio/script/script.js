function LoginWithGitHub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=dd4b52b4245460ca6276&redirect_uri=http://127.0.0.1:5500/pages/login.html';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error == 'access_denied') {
    window.location.href='http://127.0.0.1:5500/pages/index.html';
}
