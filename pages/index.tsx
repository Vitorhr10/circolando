import { useState } from 'react';
import {Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'

export default function Home() {
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter() {

  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
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
        <Image marginBottom={2} src="/institutoagronelli.png" alt="Instituto Agronelli" />
  
        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Insira seu e-mail e receba o Livreto para colorir!
        </Text>
  
        <Input
          placeholder="Seu e-mail"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
  
        <Button
          type="submit"
          backgroundColor="#288B45"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: '#083f44' }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  )
}
