import styled from 'styled-components/native';
import { theme } from '../../global/theme';

interface PropsText  {
  size?: boolean,
  bottom?: number
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
  padding-bottom: 20px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export const Text = styled.Text<PropsText>`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: ${props => props.size ? 40 : 15}px;
  margin-bottom: ${props => props.bottom ? props.bottom : 0}px;
`;

export const Image = styled.Image.attrs({
  source: theme.image.logoSignIn,
  resizeMode: 'stretch'
})`
  width: 100%;
  height: 360px;
`;

