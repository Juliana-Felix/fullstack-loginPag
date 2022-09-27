import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'
import { auth, provider } from "../../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import * as S from './styledSignIn';
import googlepng from "../../assets/pesquisa.png"


export const Signin = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data))
      navigate("/home")
    } catch (err) {
      dispatch(loginFailure())
    }
  };

  const signInWithGoogle = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
      .then((result) => {
        axios.post("/auth/google", {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }).then((res) => {
          dispatch(loginSuccess(res.data))
          navigate("/home")
        })
      })
      .catch((error) => {
        dispatch(loginFailure())
      });
  }


  return (
    <S.ContainerForm>
      <S.DivForm>
        <S.Tittlesignin>Sign in</S.Tittlesignin>
        <S.LabelLogin htmlfor="username">Username:</S.LabelLogin>
        <S.InputForm id="username" onChange={e => setName(e.target.value)} />
        <S.LabelLogin htmlfor="password" type="password">Password:</S.LabelLogin>
        <S.InputForm id="password" onChange={e => setPassword(e.target.value)} type="password" />

        <S.ButtonSignin onClick={handleLogin}>Sign in</S.ButtonSignin>
        <S.SubTitleForm>or</S.SubTitleForm>
        <S.BtnSigninGoogle onClick={signInWithGoogle}><S.ImageGoogle src={googlepng} />Signin with Google</S.BtnSigninGoogle>
        <S.LinktoSignup>don´t have a account? <Link to="/signup"><S.LinktoSignupSpan>Signup </S.LinktoSignupSpan></Link></S.LinktoSignup>
      </S.DivForm>
    </S.ContainerForm>
  )
}
