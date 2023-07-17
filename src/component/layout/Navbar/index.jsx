import React from 'react'
import {LogoIcon} from '../../../component/generics/genericIcons'
import {Wrapper} from './style';
import Button from '../../generics/Button';
import Select from '../../generics/Select';
const Navbar = () => (
 
  <Wrapper>
    <Wrapper.Wrap>
      <LogoIcon />
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


        <Wrapper.Title>For individuals</Wrapper.Title>
        <Button color='#4BB665' width={'fit-content'}>
          Login
        </Button>
        <Button color='#4BB665' border={'1px solid #4BB665'} width={'121px'} padding={'14px 3'}>
        Sign Up
        </Button>
        <Button color='#4BB665' border={'1px solid #4BB665'} width={'48px'} >
        En
        </Button>
      </Wrapper.Flex>
    </Wrapper.Wrap>

  </Wrapper>
)

export default Navbar