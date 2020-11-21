import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";


const DEFAULT_REDIRECT_CALLBACK=()=>
    window.history.replaceState({}, document.title, window.location.pathname);

let instance;

export const useAuth0= ({
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    redirecUri= window.location.origin,
    ...options
})=>{
    if (instance) return instance;

    instance = new Vue({
        data(){
            return{
                loading:true,
                isAuthenticated:false,
                user:{},
                auth0Client:null,
                popupOpen:false,
                error:null
            };
        },
        
    })
}