# Facebook API Graph Log In

Facebook API Graph Log In and Log Out functions for popular JavaScript frameworks like: 
- Vue.js 2 and 3
- React
- Node.js


## Getting started with Vue.js

- Install the module:

```sh
npm i @jorge-salgado/facebook-api-graph-login
```
  
- Add the module into your app:

```html
<template>
  <button @click=" LogInWithFacebook">Log In</button>
  <button @click="LogOutFromFacebook">Log Out</button>
</template>
```

 ```javascript
import  FACEBOOK_API_GRAPH_LOGIN from '@jorge-salgado/facebook-api-graph-login'
  
export default {
  mounted() {
    FACEBOOK_API_GRAPH_LOGIN('your app ID', 'version')
  },
    
  methods: {
      
    LogInWithFacebook() {
      window.FB.login(
        (response) => {

          if(response.authResponse){
            window.FB.api('/me', 
              {
                fields: 'id, first_name, last_name, email, gender, locale'
              },
              (response) => {

                let profile = {
                  id: response.id,
                  first_name: response.first_name,
                  last_name: response.last_name,
                  email: response.email,
                  gender: response.gender,
                  profile_picture: response.picture.data.url,                      
                }
                                    
                console.log(profile)

              }
            )
          }

        },
        { scope: 'email', }
      )
    },

    LogOutFromFacebook() {
      window.FB.api(
        '/me/permissions',
        'delete',
        null, 
        () => window.FB.logout(function(response) {
          console.log(response)
        }) 
      )
    }
          
  },
},
  
```
