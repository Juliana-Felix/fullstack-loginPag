import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styledHome';
import kitty from "../../assets/kitty.png";

export const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <S.Container>
      <S.KittyImage src={kitty} />
      Bem Vindo(a) {currentUser.name}
    </S.Container>
  )
}
