import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Container, Text, Image, Content } from "./styles";

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Image />
      <Content>
        <Text size bottom={16}>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Text>
        <Text bottom={64}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" />
      </Content>
    </Container>
  );
};
