import React from 'react'
import {Contaier} from './style.js'
import {Input,Button} from '../generics'
import {
  useNavigate
} from "react-router-dom";
const SignUp = () => {
let navigate = useNavigate();

  return (
    <Contaier>
      <Contaier.Wrap>
        <Contaier.Img/>
        <Contaier.Column>

     <Contaier.Title>Personal account sign in</Contaier.Title>
     <Input  width={'317px'} placeholder={'Enter your email address'}/>

     <Input  width={'317px'} placeholder={'Enter your password'}/>
     <Button color='#fff' width={'317px'} height={'50px'} bg={'transparent linear-gradient(247deg, #4BB665 0%, #41AAD2 100%) 0% 0% no-repeat padding-box;'}>
        Sign Up
        </Button>
        <Contaier.Desc onClick={()=>navigate('/register')}>
        I don't have a profile
        </Contaier.Desc>
        </Contaier.Column>
      </Contaier.Wrap>
    </Contaier>
  )
}

export default SignUp