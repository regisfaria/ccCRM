import styled, { css } from 'styled-components';
import { linearGradient } from 'polished';

interface Props {
  btnColor?: string;
}

export const Container = styled.button<Props>`
  height: 5rem;
  width: 90%;
  max-width: 20rem;

  background-image: ${linearGradient({
    colorStops: ['#0aa278', '#043c2c 100%'],
    toDirection: 'to bottom',
  })};

  ${props =>
    props.btnColor === 'yellow' &&
    css`
      background-image: ${linearGradient({
        colorStops: ['#e9a957', '#d67b00 100%'],
        toDirection: 'to bottom',
      })};
    `}

  border: 0px;
  border-radius: 10px;
  color: var(--white);
  font-weight: 700;

  padding: 0 1.6rem;
  margin-bottom: 1rem;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
