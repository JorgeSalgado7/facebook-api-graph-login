export function VUE3_FACEBOOK_LOGIN(appID, version) {

    if(appID === ''  || version === ''){
        return false
    }
    else{

        return new Promise(resolve => {
            
            
            window.fbAsyncInit = function () {

                window.FB.init({
                    appId: appID,
                    cookie: true,
                    xfbml: true,
                    version: version
                })

                resolve()

            };

            
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) { 
                    return 
                }

                js = d.createElement(s)
                js.id = id
                js.src = "https://connect.facebook.net/en_US/sdk.js"
                fjs.parentNode.insertBefore(js, fjs)

            }(document, 'script', 'facebook-jssdk'))  
        })

    }

    

}

module.exports = VUE3_FACEBOOK_LOGIN