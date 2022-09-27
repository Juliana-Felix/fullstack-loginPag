import React from 'react'
import { useState } from 'react';
import * as SS from './styledSignUp';
import * as yup from "yup";
import { signupSuccess, signupStart, signupFailure } from '../../redux/newuserSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export const Signup = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const addUser = async (e) => {
    e.preventDefault();

    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      const res = await axios.post("/auth/signup", user);
      dispatch(signupSuccess(res.data));

    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    }
  };

  async function validate() {
    let schema = yup.object().shape({
      password: yup
        .string("Erro: Necessário preencher o campo senha!")
        .required("Erro: Necessário preencher o campo senha!")
        .min(6, "A senha tem que ter no mínimo 6 caracters"),
      email: yup
        .string("Erro: Necessário preencher o campo email!")
        .email("Erro: Necessário preencher o campo email!")
        .required("Erro: Necessário preencher o campo email!"),
      name: yup
        .string("Erro: Necessário preencher o campo nome!")
        .required("Erro: Necessário preencher o campo nome!"),
    });

    try {
      console.log({ user })
      await schema.validate(user);
      return true;
    } catch (err) {
      setStatus({
        type: "error",
        mensagem: err.errors,
      });
      return false;
    }
  }

  const [animation1, setAnimation1] = useState(false)
  const [changeContainer, setChangeContainer] = useState(false)
  const [changeContainer2, setChangeContainer2] = useState(false)
  const [signupButton, setsignupButton] = useState(false)
  const [button1, setButton1] = useState(false)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)

  const ouvidorAnimation = document.addEventListener("animationend", animationWriter);


  function animationWriter() {
    setAnimation1(true);
  }

  function vamotestar(e) {
    e.preventDefault()
    setChangeContainer(true)
    setButton1(!button1)
    console.log(changeContainer)
  }

  function vamotestar2(e) {
    e.preventDefault()
    setChangeContainer2(true)
    setButton2(!button2)
    console.log(changeContainer2)
  }

  function signupbutton(e) {
    e.preventDefault()
    setsignupButton(true)
    setButton3(!button3)
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
          <SS.EmailContainer onSubmit={addUser} typeDisplay={animation1}>
            {status.type === "success" ? (
              <SS.Psuccess>{status.mensagem}</SS.Psuccess>
            ) : (
              ""
            )}
            {status.type === "error" ? (
              <SS.Perror>{status.mensagem}</SS.Perror>
            ) : (
              ""
            )}
            <SS.Emailphrase>
              Enter your email
            </SS.Emailphrase>
            <SS.EmailInputContainer>
              <SS.EmailInput>
                <SS.SpanEmail></SS.SpanEmail>
                <SS.InputEmailCheck autoComplete='off' onFocus={(e) => setButton1(false)} onChange={valueInput} name="email"></SS.InputEmailCheck>
                <SS.ButtonSignup typeDisplay={button1} onClick={vamotestar}>Continue</SS.ButtonSignup>
              </SS.EmailInput>

              {changeContainer && (
                <>
                  <SS.Emailphrase>
                    Enter your username
                  </SS.Emailphrase>
                  <SS.EmailInputContainer>
                    <SS.EmailInput>
                      <SS.SpanEmail></SS.SpanEmail>
                      <SS.InputEmailCheck name="name" autoComplete='off' onFocus={(e) => setButton2(false)} onChange={valueInput}></SS.InputEmailCheck>
                      <SS.ButtonSignup typeDisplay={button2} onClick={vamotestar2}>Continue</SS.ButtonSignup>
                    </SS.EmailInput>
                  </SS.EmailInputContainer>
                </>
              )}
              {changeContainer2 && (
                <>
                  <SS.Emailphrase>
                    Enter your password
                  </SS.Emailphrase>
                  <SS.EmailInputContainer>
                    <SS.EmailInput>
                      <SS.SpanEmail></SS.SpanEmail>
                      <SS.InputEmailCheck autoComplete='off' name="password" type='password' id='password' onFocus={(e) => setButton3(false)} onChange={valueInput}></SS.InputEmailCheck>
                      <SS.ButtonSignup typeDisplay={button3} onClick={signupbutton}>Continue</SS.ButtonSignup>
                    </SS.EmailInput>
                  </SS.EmailInputContainer>
                </>
              )}
              {signupButton && (
                <SS.ContainerButtonLogin>
                  <SS.ButtonSignupFim type='submit'>Register</SS.ButtonSignupFim>
                </SS.ContainerButtonLogin>
              )}
            </SS.EmailInputContainer>
            <SS.LinktoSignin>Already have an account? <Link to="/signin"><SS.LinktoSigninSpan>Signin</SS.LinktoSigninSpan></Link></SS.LinktoSignin>
          </SS.EmailContainer>
        </SS.ContainerPhrase>
      </SS.ContainerTotal>
    </SS.Container>
  )
}