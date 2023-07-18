import React from 'react'
import {Contaier} from './style.js'
import {Input,Button} from '../../generics'

const Step1 = ({setState}) => {

  return (
    <Contaier>
      <Contaier.Wrap>
        <Contaier.Img/>
        <Contaier.Column>

     <Input  width={'430px'} placeholder={'Your Frirst name'} header={'First name'}/>

     <Input  width={'430px'} placeholder={'Your Last name'} header={'Last name'}/>
     <Input  width={'430px'} placeholder={'Your email address'} header={'E mail'}/>
     <Input  width={'430px'} placeholder={'Your country'} header={'Country'}/>
     <Input  width={'430px'} placeholder={'Your Phone number'} header={'Phone number'}/>
     <Button onClick={()=>setState(1)} color='#fff' width={'430px'} height={'50px'} bg={'transparent linear-gradient(247deg, #4BB665 0%, #41AAD2 100%) 0% 0% no-repeat padding-box;'}>
     Next
        </Button>
        
        </Contaier.Column>
      </Contaier.Wrap>
    </Contaier>
  )
}

export default Step1