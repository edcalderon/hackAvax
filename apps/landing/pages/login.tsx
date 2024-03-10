import { NextPage } from 'next'
import NextLink from 'next/link'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { 
  Box, 
  Button, 
  Center, 
  Image,
  Input, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement,
  Stack,
  Stepper,
  Step,
  Text,
  VStack,
  StepIndicator,
  Spacer,
  HStack,
  Select,
  Checkbox,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';

import { FormLayout, Link } from '@saas-ui/react';
import { useAuth } from '@saas-ui/auth';

import { TbMailDown } from "react-icons/tb";
import { MdOutlineHomeWork, MdArrowForward, MdInfo, MdOutlineCheckCircle } from "react-icons/md";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";

import PhoneNumberInput from '../components/phoneInput/PhoneNumberInput'
import { COUNTRIES } from '../components/phoneInput/countries'

import { PageTransition } from 'components/motion/page-transition'

import * as EmailValidator from 'email-validator';

import axios from 'axios';

import React, { ChangeEvent, useEffect, useState } from 'react'

import 'dotenv/config'

//require('dotenv').config()

const Login: NextPage = () => {
  const router = useRouter();
  var [validateMsg, setValidateMsg] = useState(false);
  const [show, setShow] = useState(false)
  const handleClickPass = () => setShow(!show)

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e && e.target) {
      const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });      
    }
  };

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission

    try {
      const response = await axios.post('/api/', formData);
      if (response.data.success) {
        alert('Email sent successfully!');
        setFormData({ 
          email:'',
          password:'',
        });
      } else {
        //setError('Failed to send email.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      //setError('Internal server error.');
    }
    console.log(formData);
    await delay(20);
  };

  useEffect(() => { 
    if (EmailValidator.validate(formData.email)){
      setValidateMsg(true);
    }
  }, [formData.email]); 

  const logocolor = '/static/logoUrbanik/color.png';

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });
    if (result?.ok) {
      router.replace('/dashboard');
      return;
    }
    alert('Credential is not valid');
  };

  return (
    <Box height="100vh">
      <PageTransition height="100%" display="flex" alignItems="center" bg={'white'}>
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          direction={{base:'column',lg:'row'}}
        >
          <Box minW='50%' minH='100vh'
           bgImage='url("/static/images/building4.jpeg")'
           bgPosition="center"
           bgRepeat="no-repeat"
           bgSize="cover"
           display={{base:'none', lg:'block'}}
          />
          <Stack direction='column' pt='5%' w={{base:'95%',lg:'25%'}} minH='100vh' mx='12.5vw'>
            <Box>
              <Center display={{base:'none', lg:'flex'}} mt='5%'>
                <NextLink href="/">
                  <Image
                    height='40px'
                    src={logocolor}
                    alt='logo Urbanik'
                  />
                </NextLink>
              </Center>
              <Box display={{base:'', lg:'none'}} px='8' mt='15%'>
                <NextLink href="/">
                  <Image
                    height='32px'
                    src={logocolor}
                    alt='logo Urbanik'
                  />
                </NextLink>
              </Box>
              <Box color='urbanik.green' fontWeight='bold' fontSize={{base:'25px',lg:'30px'}}
                mx={{base:'8',lg:'0'}} mt='20%'
                textAlign={{base:'left',lg:'center'}}
              >
                Tu experiencia de inversión inicia aquí
              </Box>
              <Box color='urbanik.green' fontSize='15px' mx={{base:'8',lg:'0'}} mt='2.5%' 
                textAlign={{base:'left',lg:'center'}}
              >
                Inicia sesión
              </Box>
            </Box>
            <form onSubmit={onSubmit}>
              <Center>
                <Stack spacing={4} align="stretch" mt='15%' direction='column'>
                      
                        <InputGroup>
                          <InputLeftElement pointerEvents='none'>
                            <EmailIcon color='urbanik.green' />
                          </InputLeftElement>
                          <Input type="email" name="email" isRequired={true} 
                            placeholder='Email' _placeholder={{color:'urbanik.gray.medium'}}
                            focusBorderColor='urbanik.orange' variant='flushed' borderColor='lightgray'
                            colorScheme='primary' autoComplete="off"
                            value={formData.email}
                            onChange={handleChange}
                          />                      
                        </InputGroup>
                        <InputGroup>
                          <InputLeftElement pointerEvents='none'>
                            <LockIcon color='urbanik.green' />
                          </InputLeftElement>
                          <Input name="password" type={show ? 'text' : 'password'} isRequired={true} 
                            variant='flushed' focusBorderColor='urbanik.orange' borderColor='lightgray'
                            placeholder='Contraseña' _placeholder={{color:'urbanik.gray.medium'}} 
                            maxLength={25} autoComplete="off"
                            value={formData.password}
                            onChange={handleChange}

                          />
                          <InputRightElement boxSize='40px'>
                            <Button onClick={handleClickPass} color={'urbanik.black'} bg='transparent'>
                              {show ? <FiEye size='20px'/> : <FiEyeOff size='20px' /> }
                            </Button>
                          </InputRightElement>
                        </InputGroup>

                        <Center>
                        <Box fontSize='12px' my='20px'>
                          <Link fontWeight='bold' color='gray' href="#" textDecoration= 'underline dotted'>¿Has olvidado tu contraseña?</Link>
                        </Box>
                      </Center>
                        <Button colorScheme='urbanik' 
                          borderRadius='20px' fontWeight='bold' 
                          fontSize='15px' mt='2%' 
                          boxShadow='3px 3px 5px darkgray'
                          isDisabled={!validateMsg}
                          onClick={(e) => onSubmit(e)}
                        >
                          Iniciar
                        </Button>
                      <Center>
                        <Box fontSize='15px' my='20px'>
                          ¿No tienes cuenta?{' '}
                          <Link fontWeight='bold' color='urbanik.orange' href="/signup">Crea una</Link>
                        </Box>
                      </Center>
                    </Stack>
              </Center>
            </form>
          </Stack>          
        </Stack>
      </PageTransition>
    </Box>
  )
}
export default Login

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        display: 'none',
      },
      webNav:{
        display: 'none',
      }
    },
  }
}
