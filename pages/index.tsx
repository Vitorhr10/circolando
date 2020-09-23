import { FormEvent, useState } from 'react';
import {Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
    
    axios.post('/api/subscribe', { email })
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      size="100%"
    >

      <Flex gridArea="logo" flexDir="row" alignItems="flex-start">
        <Image src="/circolando-header.jpg" alt="Circolando" />
      </Flex>
 
      <Flex 
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        <Image marginBottom={2} src="/institutoagronelli.png" alt="Instituto Agronelli"/>
  
        <Text textAlign="center" fontSize="lg" color="#FFFFFF" marginBottom={2}>
          Insira seu e-mail e receba o Livreto do Circolando para colorir!
        </Text>
  
        <Input
          placeholder="Seu e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
  
        <Button
          type="submit"
          backgroundColor="#194E25"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#288B45' }}
        >
          QUERO RECEBER
        </Button>
      </Flex>

      <Flex 
        as="main"
        backgroundColor="gray.700"
        flexDir="column"
        alignItems="stretch"
        padding={4}
        marginTop={4}
        width="100%" 
      >

        <Text textAlign="center" marginTop={2} fontSize="sm" color="#FFFFFF" marginBottom={2}>
          © Instituto Agronelli de Desenvolvimento Social. All rights reserved.
        </Text>

      </Flex>
    </Flex>
  )
}
