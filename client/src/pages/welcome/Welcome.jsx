import React from 'react'
import cat from '../../assets/cat.gif';
import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud1.png';
import cloud3 from '../../assets/cloud1.png';
import forest from '../../assets/forest.png';
import moon from "../../assets/moon.png"
import { Link } from 'react-router-dom';
import * as S from "./styledWelcome";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export const Welcome = () => {
  return (
    <S.Div>
      <S.Scene>
        <Parallax pages={3}>
          <S.Stars></S.Stars>
          <S.Stars2></S.Stars2>
          <S.Stars3></S.Stars3>
          <ParallaxLayer offset={0} speed={1}>
            <S.Moon src={moon} alt="moon"></S.Moon>
            <S.Rotate src={cloud1} alt="cloud1" />
            <S.Rotate2 src={cloud2} alt="cloud2" />
            <S.Rotate3 src={cloud3} alt="cloud3" />
            <S.Rotate4 src={cloud1} alt="cloud1" />
            <S.Rotate5 src={cloud2} alt="cloud2" />
            <S.Rotate6 src={cloud3} alt="cloud3" />
            <S.Button><Link to="/signup">EXPLORE</Link></S.Button>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0.9, end: 2.5 }}
            style={{ textAlign: 'center' }}
          >
            <S.catImage src={cat} />
          </ParallaxLayer>

          <S.Forest src={forest} alt="forest" />


        </Parallax>
      </S.Scene>
    </S.Div>
  )
}
