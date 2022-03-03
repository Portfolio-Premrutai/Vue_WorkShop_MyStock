import httpClient from "@/services/httpClient"
import {server} from "@/services/constants";
import router from "@/router";

// import * as productApis from "@/services/api_product";
const isLoggedIn = () =>{
    let token = localStorage.getItem(server.TOKEN_KEY);
    return token !=null;
};
const logoff = () =>{
    localStorage.removeItem(server.TOKEN_KEY);
    router.push("/login");
};

const login = async (values) => {

// let result = await httpClient.post(server.LOGIN_URL,values)
// alert(JSON.stringify(result))

let result = await httpClient.post(server.LOGIN_URL,values);
if(result.data.result == "ok"){
    localStorage.setItem(server.USERNAME,values.username);
    localStorage.setItem(server.TOKEN_KEY,result.data.token);
    router.push("/stock");
    return true;
}else{
    return false;
}



    // localStorage.setItem(server.USERNAME,values.username);
    // localStorage.setItem(server.TOKEN_KEY,"1234")
    // return true;
};

const register = async (values) =>{
    let result = await httpClient.post(server.REGISTER_URL,values);
    if(result.data.result == "ok"){
        router.go(-1);
    }else{
        alert(JSON.stringify(result))
    }
}

export default {
    isLoggedIn,
    login,
    logoff,
    register
}