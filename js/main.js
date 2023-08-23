if (!isLogged()){
    window.location.href = 'login.html';
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

function isLogged() {
    const sessionCookieValue = getCookie('session');
    if (sessionCookieValue === 'true') return true;
    else return false;
}

