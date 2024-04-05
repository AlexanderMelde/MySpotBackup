config = {
    "uri": "http://youripaddress:8080",
    "login_url": "http://youripaddress:8080/login",
    "callback_uri": "http://youripaddress:8080/callback",
    "client_id": "yourclientid",
    "slowdown_import": 100,
    "slowdown_export": 100
}

if(module){
    module.exports = config;
}