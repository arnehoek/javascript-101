define([], () => {
    return {
        log: message => {
            document.querySelector('.events').innerHTML += message + '<br>';
        }
    };
});