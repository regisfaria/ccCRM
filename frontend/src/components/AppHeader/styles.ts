import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Header = styled.header`
  padding: 2em 3em;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  > button {
    margin-left: auto;
    margin-right: 3.4em;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }

  > img {
    align-self: center;
    height: 70px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ba382f;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
