import {server} from "@/services/constants";
import router from "@/router";
// import httpClient from "@/services/httpClient"
// import * as productApis from "@/services/api_product";
const isLoggedIn = () =>{
    let token = localStorage.getItem(server.TOKEN_KEY);
    return token !=null;
};
const logoff = () =>{
    localStorage.removeItem(server.TOKEN_KEY);
    router.push("/login");
};

const login =  values => {

// let result = await httpClient.post(server.LOGIN_URL,values);
// if(result.data.result == "ok"){
//     localStorage.setItem(server.USERNAME,values.username);
//     localStorage.setItem(server.TOKEN_KEY,result.data.token);
//     router.push("/stock");
//     return true;
// }else{
//     return false;
// }



    localStorage.setItem(server.USERNAME,values.username);
    localStorage.setItem(server.TOKEN_KEY,"1234")
    return true;
};


export default {
    isLoggedIn,
    login,
    logoff,
}