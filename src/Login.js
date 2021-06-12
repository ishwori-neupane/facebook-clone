import React from 'react'
import './Login.css'
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [user ,dispatch]=useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user
                })
                // console.log(result)
                console.log(result.user.displayName)
        }).catch(error=>alert(error.message))
        }
    return (
        
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" />
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </div>
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
