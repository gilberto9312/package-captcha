#### This in a package to obtain the token and to be able to safely validate the form


## install npm
~~~
npm i re-capt-v3
~~~
## install yarn
~~~
yarn add re-capt-v3
~~~

## import
~~~
import Recaptcha from 're-capt-v3'
~~~
### use
~~~
const captcha = new Recaptcha('TOKEN_SITE_KEY', "login")
~~~

~~~
let token = ''
const asyncToken = async ()=>{
    token = await captcha.getToken()
}

~~~
#### use fetch to validate
~~~
  validateRecaptcha(recaptchaToken) {
    const recaptchaSecret = 'TOKEN_SITE_KEY'
    const url = `https://www.recaptcha.net/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`
    let valid = false
    const threshold = 0.6
     axios.post(url)
        .then((response: any) => response.json())
        .then((data: any)=> {
            valid = (data.success && data.score && data.action && data.score >= threshold )
        })
    return valid
  }
~~~