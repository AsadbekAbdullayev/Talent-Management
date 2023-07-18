import React from 'react'
import {Contaier} from './style.js'
import {Input,Button} from '../../generics'

const Step1 = ({setState}) => {

  return (
    <Contaier>
        <Contaier.Column>

     <Input  width={'430px'} placeholder={'Your Place of study'} header={'Place of study'}/>

     <Input  width={'430px'} placeholder={'Your Direction of study'} header={'Direction of study'}/>
     <Input  width={'430px'} placeholder={'Your Degree'} header={'Degree'}/>
     <Input  width={'430px'} placeholder={'Choose your direction'} header={'Choose your direction'}/>
     <Input  width={'430px'} placeholder={'Choose your skills'} header={'Choose your skills'}/>
     <Button onClick={()=>setState(2)} color='#fff' width={'430px'} height={'50px'} bg={'transparent linear-gradient(247deg, #4BB665 0%, #41AAD2 100%) 0% 0% no-repeat padding-box;'}>
     Next
        </Button>
        
        </Contaier.Column>
    </Contaier>
  )
}

export default Step1