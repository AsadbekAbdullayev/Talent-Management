import React,{useState} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import {Container} from './style';
const Register = () => {
  const [step,setState] = useState(0);
  const content = [
    {
      id:1,
      component:<Step1 setState={setState}/>
    },
    {
      id:2,
      component:<Step2 setState={setState}/>
    },
    {
      id:3,
      component:<h1>step 3</h1>
    }
  ]
  return (
    <Container>
      <Container.Wrap>
        <Container.Title>
        Register and pass tests to verify your account
        </Container.Title>
      </Container.Wrap>
      {content[step]?.component}
      
      </Container>
  )
}

export default Register