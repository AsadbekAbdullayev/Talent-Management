import React from 'react'
import {LogoIcon} from '../../../component/generics/genericIcons'
import {Wrapper} from './style';
import Button from '../../generics/Button';
import Select from '../../generics/Select';
import {
  useNavigate
} from "react-router-dom";
const Navbar = () => {
let navigate = useNavigate();
  
  return (
    <Wrapper bg={window.location.pathname === '/signUp' && 'transparent linear-gradient(165deg, #BFBFBF 0%, #F1DEFF26 100%) 0% 0% no-repeat padding-box'}>
    <Wrapper.Wrap>
      <LogoIcon color={'false'} onClick={()=>navigate('/')}/>
      <Wrapper.Flex>
        <Wrapper.Title>About us</Wrapper.Title>

        <Select
                  options={[
                    {
                      id: 1,
                      name: 'Explore services',
                      value: 'value 1',
                    },
                    {
                      id: 2,
                      name: 'Hire a freelancer',
                      value: 'value 2',
                    },
                    {
                      id: 3,
                      name: 'Partner with us',
                      value: 'value 2',
                    },
                  ]}
                  title='For companies'
                  width='fit-content'
                />

<Select
                  options={[
                    {
                      id: 1,
                      name: 'Explore opportunities',
                      value: 'value 1',
                    },
                    {
                      id: 2,
                      name: 'Find a job',
                      value: 'value 2',
                    },
                    {
                      id: 3,
                      name: 'Find a job',
                      value: 'value 2',
                    },
                  ]}
                  title='For individuals'
                  width='fit-content'
                />


        <Button color='#4BB665' width={'fit-content'} onClick={()=>navigate('/login')}>
          Login
        </Button>
        <Button color='#4BB665' border={'1px solid #4BB665'} width={'121px'} padding={'14px 3'} onClick={()=>navigate('/signUp')}>
        Sign Up
        </Button>
        <Button color='#4BB665' border={'1px solid #4BB665'} width={'48px'} >
        En
        </Button>
      </Wrapper.Flex>
    </Wrapper.Wrap>

  </Wrapper>

)}

export default Navbar