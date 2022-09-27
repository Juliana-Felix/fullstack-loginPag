import styled from 'styled-components';

export const ContainerForm = styled.div`
    background-color: #ffff;
    position: relative;
    width: 100%;
    height: 100%;
  `;
export const DivForm = styled.div`
  height: 430px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.03);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.1);
  padding: 50px 35px;

  `
export const InputForm = styled.input`
    margin-top: 4px;
    margin-bottom: 16px;
    display: block;
    width: 100%;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #d0d7de;
    border-radius: 6px;

    &:hover {
      border-color: #1e3ad7c9;
    }
  `
export const ButtonSignin = styled.button`
    background: #1e3ad7c9;
    margin-top: 16px;
    display: block;
    width: 100%;
    text-align: center;
    color: #ffffff;
    padding: 5px 16px;
    font-size: 14px;
    font-family: monospace;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    border: 1px solid;
    border-radius: 6px;
    font-weight: 800;

    &:hover {
      background: #3751e0c9;
    }
  `
export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    color: #24292f;
  `
export const BtnSigninGoogle = styled.button`
    background: #fff;
    margin-top: 16px;
    display: block;
    width: 100%;
    text-align: center;
    color: #24292f;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    border-radius: 6px;
    border: 1px solid #d0d7de;

    &:hover {
      color: #488b5a;
    }

  `
export const SubTitleForm = styled.p`
    margin-top: 5px;
    color: #24292f;
    display: flex;
    align-items: center;
    justify-content: center;
  `
export const Tittlesignin = styled.p`
    font-size: 2rem;
    color: #24292f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  `
export const LabelLogin = styled.label``

export const LinktoSignup = styled.p`
  color: rgba(0, 0, 0, 0.507);
  position: end;
  margin-top: 10px;
  text-align: end;
  font-size: 12px;
`
export const LinktoSignupSpan = styled.span`
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.507);

  &:hover {
    cursor: pointer;
    color: #1e3ad7c9;
  }
`
export const ImageGoogle = styled.img`
  height: 15px;
  padding-top: 4px;
  margin-right: 10px;
`;