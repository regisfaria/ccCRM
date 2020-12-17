import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ba382f;
  height: 3.4em;
  border: 0em;
  border-radius: 1em;
  padding: 0 0.8em;
  margin-top: 0.8em;
  width: 100%;
  color: #312e38;
  font-weight: 700;
  transition: background-color 0.2s;
  font-size: 1em;

  &:hover {
    background: ${shade(0.2, '#ba382f')};
  }
`;
