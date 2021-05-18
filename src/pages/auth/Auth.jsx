import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (!isSubmitting) {
            return
        }

       axios('https://conduit.productionready.io/api/users/login', {
           method: 'post',
           data: {
               user: {
                   email: 'qq@qq.com',
                   password: '12345'
               }
           }
       }).then(res => {
           console.log('Success', res);
           setIsSubmitting(false)
       }).catch(err => {
           console.log('Error: ', err);
           setIsSubmitting(false)
       })
    })

    return (
        <div className='auth-page'>
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <div className="text-xs-center">Login</div>
                        <p className="text-xs-center">
                            <Link to='register'>Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input type="email"
                                           className='form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty ng-valid-email'
                                           placeholder='Email'
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input type="password"
                                           className='form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty ng-valid-email'
                                           placeholder='Password'
                                           value={password}
                                           onChange={e => {
                                               setPassword(e.target.value)
                                           }}
                                    />
                                </fieldset>
                                <button className='btn btn-lg btn-primary pull-xs-right' type="submit" disabled={isSubmitting}>Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth