import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/cc_logo.png';

const AppHeader: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <div>
              <span>Welcome,</span>
              <Link to="/profile">
                <FiUser size={20} />
                &nbsp;
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
          <img src={logoImg} alt="CCCRM" />
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default AppHeader;
