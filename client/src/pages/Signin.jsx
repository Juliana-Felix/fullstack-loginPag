import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { auth, provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import * as S from './styledSignIn';
//import api from "../services/api"

export const Signin = () => {
  const [name, setName] = useState("")
  //const [setEmail] = useState("")
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
        //console.log(result);
        axios.post("/auth/google", {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }).then((res) => {
          //console.log(res)
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

        <S.InputForm onChange={e => setName(e.target.value)} />

        <S.InputForm onChange={e => setPassword(e.target.value)} type="password" />

        <S.ButtonSignin onClick={handleLogin}>Sign in</S.ButtonSignin>
        <S.SubTitleForm>or</S.SubTitleForm>
        <S.BtnSigninGoogle onClick={signInWithGoogle}>Signin with Google</S.BtnSigninGoogle>
      </S.DivForm>
    </S.ContainerForm>
  )
}
