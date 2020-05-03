
let a = 0

setTimeout(function () { a = 2 }, 3000);

var checkWifiStatus = setInterval(function () {
    console.log('a é: ', a)
    if (a == 2) {
        clearInterval(checkWifiStatus);
    }
}, 500);