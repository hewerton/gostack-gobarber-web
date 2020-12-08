import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  border-radius: 5px;
  border: 0;
  padding: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;

  color: #312e38;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
