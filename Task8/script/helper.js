let helper = (function() {

    return {
        redirect: (address) => {
            document.location.href = address;
        },
        distribution: (event) => {
            event.preventDefault();
            if(document.querySelector('#username') == null) {
                onAuthorization();
            } else {
                onRegistation();
            }
        },
    }
})();