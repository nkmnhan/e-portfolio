import axios from "axios";
import Keycloak from "keycloak-js";

const auth = function initKeycloak() {
    let initOptions = {
        url: 'http://localhost:8080', realm: 'e-portfolio', clientId: 'pkce', onLoad: 'login-required'
    }

    let keycloak = new Keycloak(initOptions);

    keycloak.init({ onLoad: 'login-required' }).then((auth) => {
        if (!auth) {
            window.location.reload();
        } else {
            console.log(keycloak.userInfo);
            alert('Authenticated');
        }
    });

}

export const callback = function initKeycloak() {
    let initOptions = {
        url: 'http://localhost:8080', realm: 'e-portfolio', clientId: 'pkce', onLoad: 'login-required'
    }

    let keycloak = new Keycloak(initOptions);

    keycloak.init({}).then((auth) => {
        if (!auth) {
            window.location.reload();
        } else {
            console.log(keycloak.userInfo);

            var token = keycloak.token;
            console.log(token);
            axios({
                method: 'get',
                url: '/api',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response =>{
                alert(response.data.message);
            })
        }
    });

}

export const getToken = () => {
    let initOptions = {
        url: 'http://localhost:8080', realm: 'e-portfolio', clientId: 'pkce', onLoad: 'login-required'
    }

    let keycloak = new Keycloak(initOptions);

    keycloak.init({})
        .then((auth) => {
            return keycloak.token;
        });
}

export default auth;