import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -136px auto 0;

  width: 100%;

  form {
    margin: 40px 0;
    width: 340px;
    display: flex;
    flex-direction: column;

    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 24px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    background-color: #ba382f;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    bottom: 0;
    right: 0;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${(shade(0.2), '#ba382f')};
    }
  }
`;
