import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const Container = styled.div`
  display: flex;
  width: 70%;
  background-color: #1b1c22;
  min-height: 80vh;
  border-radius: 6px;
  padding: 23px;
`

export const TextEditorContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 48%;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-weight: 500;
  font-size: 30px;
`

export const TextEditorContainer2 = styled.div`
  width: 52%;
  color: #ffffff;
  background-color: #25262c;
  border-radius: 12px;
  border: 2px solid #334155;
`

export const TextEditorImage = styled.img`
  width: 380px;
  margin: auto;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 16px 18px 14px 18px;
  border-bottom: 2px solid #334155;
`

export const ButtonItem = styled.li``

export const Button1 = styled.button`
  padding: 0;
  color: ${props => (props.isBoldClicked ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  margin-right: 20px;
  border: none;
  cursor: pointer;
`

export const Button2 = styled(Button1)`
  color: ${props => (props.isItalicClicked ? '#faff00' : '#f1f5f9')};
`

export const Button3 = styled(Button1)`
  color: ${props => (props.isUnderlineClicked ? '#faff00' : '#f1f5f9')};
`

export const TextInput = styled.textarea`
  color: #f1f5f9;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: ${props => (props.isBoldClicked ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicClicked ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineClicked ? 'underline' : 'normal'};
  font-family: 'Roboto';
  padding: 16px 18px 14px 18px;
  font-size: 15px;
`
