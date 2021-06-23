import React from 'react';

import { Container, IconWrapper, Image, Text } from './styles';

interface PropsButton {
  title: string;
}

export const ButtonIcon = ({ title }: PropsButton) => {
  return (
    <Container>
      <IconWrapper>
        <Image />
      </IconWrapper>
      <Text>
        {title}
      </Text>
    </Container>
  )
}

