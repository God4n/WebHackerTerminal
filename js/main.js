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

function isLogged() {
    const accessCookieValue = getCookie('access');
    
    if (accessCookieValue !== null) {
        if (accessCookieValue === 'true') {
            // Hacer algo si el valor de la cookie es true
            console.log('El valor de la cookie "access" es true. Acceso permitido.');
            // Aquí puedes realizar acciones específicas cuando el acceso es permitido.
        } else if (accessCookieValue === 'false') {
            // Hacer algo si el valor de la cookie es false
            console.log('El valor de la cookie "access" es false. Acceso denegado.');
            // Aquí puedes realizar acciones específicas cuando el acceso es denegado.
        } else {
            console.log('El valor de la cookie "access" no es válido.');
        }
    } else {
        console.log('La cookie de sesión "access" no se encontró.');
    }

    console.log(accessCookieValue);
}
