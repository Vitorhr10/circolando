import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import {Flex, Image, Button, Text} from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();
    
    axios.post('/api/subscribe', { email })
  }
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1fldosj', e.target, 'user_dyd6MMzB00CNrMZdDrb7z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
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

      <Flex 
        gridArea="header"
        flexDir="row" 
        alignItems="flex-start"
      >
        <Image src="/circolando-header.jpg" alt="Circolando" />
      </Flex>

      <Flex 
        gridArea="section" 
        flexDir="column" 
        align="top"
        alignItems="center"
      >

        <Flex
          gridArea="text" 
          flexDir="column" 
          align="top"
          maxW="900px"
          margin="5"
          alignItems="center"
        >
          <Text textAlign="center" textTransform="uppercase" fontSize="xl" color="#FFFFFF" marginBottom={10} marginTop={5}>
            Programação dia das crianças
          </Text>

          <Text fontSize="md" color="#FFFFFF">
            A programação da "Semana da Criança" em Uberaba conta com diversas atividades para toda a população. Os eventos da Prefeitura de Uberaba, que acontecem até o próximo domingo (13), contam com apresentações musicais, brincadeiras, palestras, gincanas educativas, entre outros. Todas as atividades são gratuitas e os menores de idade devem estar acompanhados de um adulto responsável.
          </Text>   
          
          <br></br>

          <Text fontSize="md" color="#FFFFFF">
            As atividades programadas para a semana comemorativa começaram nesta segunda-feira (7), com o projeto de Conscientização Ambiental, na reabertura do Zoológico. O Parque do Jacarandá estava fechado para reformas de adequação. Além disso, desde o dia 2 até o dia 18 de outubro, palestras sobre educação infantil são apresentadas para a comunidade, voltada para pais e educadores.
          </Text>  

          <br></br>

          <Text fontSize="md" color="#FFFFFF">
            As atividades programadas para a semana comemorativa começaram nesta segunda-feira (7), com o projeto de Conscientização Ambiental, na reabertura do Zoológico. O Parque do Jacarandá estava fechado para reformas de adequação. Além disso, desde o dia 2 até o dia 18 de outubro, palestras sobre educação infantil são apresentadas para a comunidade, voltada para pais e educadores.
          </Text> 
        </Flex>
        
        <Flex 
          as="form"
          onSubmit={sendEmail}
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={8}
          margin={5}
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
            type="email"
            name="email"
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
