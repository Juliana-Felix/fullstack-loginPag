import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import { auth, provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
//import api from "../services/api"

export const Signin = () => {
  const [name,setName] = useState("")
  //const [setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try{
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data))
      navigate("/home")
    } catch(err){
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

  const Div = styled.div`
    background-color: #fafafa
    position: relative;
    width: 100%;
    height: 100%;
    
  ` 
  const DivForm = styled.div`
  left: 50%;
  top: 43%;
  margin-left: -140px;
  /* Metade do valor da Largura */
  margin-top: -105px;
  /* Metade da valor da Altura */
  position: absolute;
  width: 275px;
  /* Valor da Largura */
  height: 210px;
  /* Valor da Altura */
  background: #f6f8fa;
  color: #fff;
  `

  return (
    <Div>
      <DivForm>
            <h2>to continue to DogLovers</h2>
            <input placeholder="username" onChange={e=>setName(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Sign in</button>
            <h1>or</h1>
            <button onClick={signInWithGoogle}>Signin with Google</button>
      </DivForm>
    </Div>
  )
}
