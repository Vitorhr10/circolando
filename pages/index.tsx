import React from "react";
import { FormEvent, useState } from "react";
import axios from "axios";
import {
  Flex,
  Image,
  Button,
  Text,
  Box,
  Divider,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  useToast,
  Link,
  Heading,
} from "@chakra-ui/core";
import emailjs from "emailjs-com";
import Input from "../components/Input";

export default function Home() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post("/api/subscribe", { email });
  }

  function emailVerificationSuccess() {
    toast({
      description: "E-mail enviado com sucesso!",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }

  function emailVerificationFailure() {
    toast({
      description: "Erro ao enviar o e-mail!",
      status: "error",
      duration: 9000,
      isClosable: true,
    })
  }

  function sendEmail(e) {
    e.preventDefault();

    toast({
      description: "Aguarde!",
      status: "info",
      duration: 3000,
      isClosable: true,
    })

      emailjs
      .sendForm(
        "service_b9yo9wt",
        "template_tono4id",
        e.target,
        "user_KQ5mkawUdH2G6EMsezZ1F"
      )
      .then(
        (result) => {
          console.log(result.text);
          emailVerificationSuccess();
        },
        (error) => {
          console.log(error.text);
          emailVerificationFailure()
        },
      );
      e.target.reset();
      setEmail("");
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
        as="header"
        alignItems="center"
        flexDirection="column"
        backgroundColor="gray.700"
        width="100%"
      >
        <Heading
          as="h1"
          size="2xl"
          textTransform="uppercase"
          fontFamily="Times New Roman"
          color="#FBE059"
        >
          Circolando
        </Heading>

        <Heading
          as="h2"
          size="md"
          textTransform="uppercase"
          fontWeight="none"
          color="#FBE059"
          marginBottom="2"
        >
          Iniciativas Artísticas
        </Heading>
      </Flex>

      <Flex as="section" flexDir="row" alignItems="flex-start">
        <Image
          src="/circolando-header.jpg"
          alt="Circolando vamos colorir"
          htmlWidth="100%"
        />
      </Flex>

      <Flex gridArea="section" flexDir="column" align="top" alignItems="center">
        <Flex
          gridArea="text"
          flexDir="column"
          align="top"
          maxW="900px"
          margin="5"
          alignItems="center"
        >
          <Heading
            as="h1"
            textAlign="center"
            textTransform="uppercase"
            fontSize="xl"
            marginBottom={8}
            marginTop={5}
          >
            Comemoração mês das crianças
          </Heading>

          <Text fontSize="md" textAlign="justify">
            No ano em que o Instituto Agronelli comemora 20 anos de fundação
            convidamos o palhaço Malinha para conversar e colorir com as
            crianças em dois encontros muito legais!
          </Text>

          <Text fontSize="md" mt="5" textAlign="justify">
            O Malinha é o personagem do projeto Circolando que foi criado em
            2016 pelo artista e pedagogo Mayron Engel, aliando história pessoal
            com técnicas de circo, teatro, dança e música. Mayron resolveu
            dedicar-se exclusivamente ao riso e a expressividade, buscando
            estimular movimentos saudáveis em direção ao sensível.
          </Text>

          <Text fontSize="md" mt="5" textAlign="justify">
            Os encontros serão através de lives nos dias 14/10 às 15:30 e 21/10
            às 15h00. Insira seu e-mail abaixo para se inscrever e receba o
            Livreto do Circolando para colorir junto com o Malinha, no dia da
            live! Os 150 primeiros inscritos receberão o Livreto físico e os 50
            primeiros que buscarem o Livreto ganharão uma caixa de lápis de cor!
          </Text>
        </Flex>

        <Flex
          as="form"
          onSubmit={sendEmail}
          backgroundColor="gray.100"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={8}
          margin={5}
          maxW="400px"
        >
          
          <Image
            marginBottom={2}
            src="/institutoagronelli.png"
            alt="Instituto Agronelli"
          />

          <Text
            textAlign="center"
            fontSize="lg"
            marginBottom={2}
            marginTop={2}
            fontWeight="bold"
          >
            Insira seu e-mail e receba o Livreto do Circolando para colorir!
          </Text>

          <Input
            isRequired={true}
            color="#fff"
            placeholder="E-mail"
            marginTop={2}
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            backgroundColor="#194E25"
            height="50px"
            borderRadius="sm"
            color="#ffffff"
            marginTop={3}
            _hover={{bg: "#3e8e41"}}
          >
            QUERO RECEBER
          </Button>
        </Flex>
      </Flex>

      <Divider size="80%" />

      <Flex
        gridArea="section"
        flexDir="column"
        maxW="900px"
        alignItems="center"
      >
        <Heading
          as="h1"
          textAlign="center"
          fontSize="xl"
          marginTop={5}
          marginBottom={3}
        >
          Dúvidas frequentes
        </Heading>

        <Accordion defaultIndex={[0]} allowMultiple maxW="900px">
          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Sobre o Livreto Circolando
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              Conheça mais sobre o Livreto Circolando no{" "}
              <Link
                href="https://www.youtube.com/watch?v=Pu3Zz-iQO8w&feature=youtu.be"
                isExternal
              >
                YouTube
              </Link>{" "}
              ou acesse o site{" "}
              <Link href="http://circolando.com.br/entretenimento/" isExternal>
                Circolando
              </Link>
              .
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Sobre as Lives
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              <Text>
                1ª Live - 14/10 às 15:30 -{" "}
                <strong>
                  <Link
                    href="https://www.youtube.com/watch?v=mwasXhO_3pY"
                    isExternal
                  >
                    Clique aqui para assistir!
                  </Link>
                </strong>
              </Text>
              <Text>
                2ª Live - 21/10 às 15:00 -{" "}
                <strong>
                  <Link
                    href="https://www.youtube.com/watch?v=s7qaaKjJ0IU"
                    isExternal
                  >
                    Clique aqui para assistir!
                  </Link>
                </strong>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Como ganhar o Livreto físico e a caixa de lápis de cor?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              O Livreto físico será destinado somente aos{" "}
              <strong>150 primeiros inscritos no site</strong>. Já o Livreto em
              PDF, todos que se cadastrarem neste site, irão recebê-lo em seu
              e-mail para imprimi-lo e acompanhar a live. A caixa de lápis de
              cor será entregue aos{" "}
              <strong>50 primeiros que chegarem para buscar o Livreto</strong>.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Quantos Livreto físico posso receber?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              Será entregue 1 Livreto por criança.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Onde recebo o Livreto físico e a caixa de lápis de cor?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              O Livreto e a caixa de lápis de cor serão entregues no Instituto
              Agronelli, localizado no endereço Avenida Randolfo Borges Júnior,
              1900 - Bairro Univerdecidade, de segunda à sexta, das 08:00 às
              16:30,{" "}
              <strong>
                mediante a apresentação do e-mail enviado pelo Instituto
                Agronelli
              </strong>
              .
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Quando posso ir buscar o Livreto e a caixa de lápis de cor?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              Você pode ir pegar assim que receber o e-mail do Instituto
              Agronelli. Neste e-mail serão repassadas as instruções de como
              receber o Livreto e a caixa de lápis de cor.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Quem pode ir receber o Livreto?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              Qualquer pessoa pode ir receber o Livreto,{" "}
              <strong>
                mediante a apresentação do e-mail enviado pelo Instituto
                Agronelli
              </strong>
              .
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <Box as="h1" flex="1" textAlign="left">
                Mais informações?
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel as="text" pb={4}>
              Entre em contato pelo número (34) 3313-0770 ou envie um e-mail
              para comunicacao@institutoagronelli.org.br
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>

      <br></br>

      <Flex
        as="footer"
        backgroundColor="gray.700"
        flexDir="column"
        padding={4}
        marginTop={4}
        width="100%"
      >
        <Text
          textAlign="center"
          marginTop={2}
          fontSize="sm"
          color="#FFFFFF"
          marginBottom={2}
        >
          ©{" "}
          <Link href="https://www.institutoagronelli.org.br/" isExternal>
            Instituto Agronelli de Desenvolvimento Social
          </Link>
          . Todos os direitos reservados.
        </Text>
      </Flex>
    </Flex>
  );
}
