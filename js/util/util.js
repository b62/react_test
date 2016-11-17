
export  const checkLogin = (nextState, replace) => {

    let login = window.localStorage.getItem('iamlogin'),
        logged = window.localStorage.getItem('iamlogged') || false;
    try {
        logged = JSON.parse(logged);
    } catch(e) {
        logged = false;
    }

    // cl(123, logged, !logged);

    if (!logged) {
        replace('/');
    }
};





