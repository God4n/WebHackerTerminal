var pass = 'testpasswd';

$(document).ready(function() {
    let passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        verifyPassword(document.getElementById("passwd").value);
    });
});

function verifyPassword(password)
{
    if (password == pass) {
        setCookie("session","true",5)
        showGranted();
    }
    else {
        showFailed();
    }
}


// Login Failed

function showFailed()
{
    document.getElementById("password-box").style.display = "none";
    document.getElementById("denied-box").style.display = "block";
    document.getElementById("passwd").value = '';
    setTimeout(revertToPassword, 1500);
}

function revertToPassword()
{
    document.getElementById("denied-box").style.display = "none";
    document.getElementById("password-box").style.display = "block";
}


// Correct Login

function showGranted()
{
    document.getElementById("password-box").style.display = "none";
    document.getElementById("granted-box").style.display = "block";
    setTimeout(showAccessing, 1500);
}

function showAccessing()
{
    document.getElementById("granted-box").style.display = "none";
    document.getElementById("accessing-box").style.display = "block";
    startProgressBar();
}

function startProgressBar() 
{
    var a = 0;
    if (a == 0) 
    {
        a++;
        var width = 1;
        var pg = document.getElementById("progressBar");
        var interval = setInterval(increasePercentage, 30);

        function increasePercentage() 
        {
            if (width >= 100) 
            {
                clearInterval(interval);
                setTimeout(showLoading, 500);
            } 
            else 
            {
                width++;
                pg.style.width = width + "%";
                $("#accessing-loading-percentage").html(width  + "%");
            }
        }
    }
}

function showLoading()
{
    document.getElementById("password-box").style.display = "none";
    document.getElementById("accessing-box").style.display = "none";
    setTimeout(loadSite, 1500);
}

function loadSite()
{
    window.location.href = "index.html"
}


// Cookie Controls 

function setCookie(name, value, minutes) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (minutes * 60 * 1000));
    const expires = expirationDate.toUTCString();

    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}