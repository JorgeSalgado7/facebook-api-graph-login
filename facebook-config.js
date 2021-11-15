const VUE3_FACEBOOK_LOGIN = (appID, version) => {

    if(appID !== '' && version !== ''){

        return new Promise(resolve => {

            window.fbAsyncInit = function() {
                FB.init(
                    {
                        appId: appID, //FACEBOOK API ID
                        cookie: true,
                        xfbml: true,
                        version: version //FACEBOOK API VERSION
                    }
                )
            }
    
            (
                function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0]
                    if (d.getElementById(id)) return
                    js = d.createElement(s)
                    js.id = id
                    js.src = '//connect.facebook.net/en_US/all.js'
                    fjs.parentNode.insertBefore(js, fjs)
                }
                (document, 'script', 'facebook-jssdk')
            )
    
        })

    }

    else{
        console.error('Vue3 Facebook Login requires valid app ID and app version.')
    }


}

module.exports = VUE3_FACEBOOK_LOGIN