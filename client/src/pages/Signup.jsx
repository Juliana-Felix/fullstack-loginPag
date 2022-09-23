import React from 'react'
import { useState } from 'react';
import * as SS from './styledSignUp';
import { signupSuccess, signupStart, signupFailure } from '../redux/newuserSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const signupAccount = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      dispatch(signupSuccess(res.data));
    } catch {
      dispatch(signupFailure())
    }
  }

  let [animation1, setAnimation1] = useState(false)
  let [changeContainer, setChangeContainer] = useState(false)
  let [changeContainer2, setChangeContainer2] = useState(false)
  let [signupButton, setsignupButton] = useState(false)

  const ouvidorAnimation = document.addEventListener("animationend", animationWriter);


  function animationWriter() {
    setAnimation1(true);
  }

  function vamotestar(e) {
    e.preventDefault()
    setChangeContainer(!changeContainer)
    console.log(changeContainer)
  }

  function vamotestar2(e) {
    e.preventDefault()
    setChangeContainer2(!changeContainer2)
    console.log(changeContainer2)
  }

  function signupbutton(e) {
    e.preventDefault()
    setsignupButton(!signupButton)
    console.log(signupButton)
  }

  return (
    <SS.Container>
      <SS.Stars></SS.Stars>
      <SS.Stars2></SS.Stars2>
      <SS.Stars3></SS.Stars3>
      <SS.ContainerTotal>
        <SS.ContainerPhrase>
          <SS.Initialphrase>
            Welcome to my web animated site!
          </SS.Initialphrase>
          <SS.EmailContainer typeDisplay={animation1}>
            <SS.Emailphrase>
              Enter your email
            </SS.Emailphrase>
            <SS.EmailInputContainer>
              <SS.EmailInput>
                <SS.SpanEmail></SS.SpanEmail>
                <SS.InputEmailCheck autoComplete='off' onChange={e => setEmail(e.target.value)}></SS.InputEmailCheck>
                <SS.ButtonSignup onClick={vamotestar}>Continue</SS.ButtonSignup>
              </SS.EmailInput>
              {changeContainer && (
                <>
                  <SS.Emailphrase>
                    Enter your username
                  </SS.Emailphrase>
                  <SS.SenhaInputContainer>
                    <SS.InputSenhaCheck onChange={e => setName(e.target.value)}></SS.InputSenhaCheck>
                    <SS.ButtonSignup onClick={vamotestar2}>Continue</SS.ButtonSignup>
                  </SS.SenhaInputContainer>
                </>
              )}
              {changeContainer2 && (
                <>
                  <SS.Emailphrase>
                    Enter your password
                  </SS.Emailphrase>
                  <SS.SenhaInputContainer>
                    <SS.InputUsernameCheck autoComplete='off' type={password} onChange={e => setPassword(e.target.value)}></SS.InputUsernameCheck>
                    <SS.ButtonSignup onClick={signupbutton}>Continue</SS.ButtonSignup>
                  </SS.SenhaInputContainer>
                </>
              )}
              {signupButton && (
                <SS.ButtonSignupFim onClick={signupAccount}>Register</SS.ButtonSignupFim>
              )}
            </SS.EmailInputContainer>
          </SS.EmailContainer>
        </SS.ContainerPhrase>
      </SS.ContainerTotal>
    </SS.Container>
  )
}