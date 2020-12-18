import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiPower, FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import {
  Container,
  Header,
  HeaderContent,
  SignOut,
  Profile,
  MobileMenu,
  DesktopMenu,
} from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/cc_logo.png';

const AppHeader: React.FC = () => {
  const { signOut, user } = useAuth();

  const [menuState, setMenuState] = useState(false);

  const MenuClick = useCallback(() => {
    setMenuState(!menuState);
  }, [menuState]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <MobileMenu isActive={menuState}>
            <div>
              <button type="button" onClick={MenuClick}>
                {menuState ? <FiX /> : <FiMenu />}
              </button>
              <Link to="/dashboard">HOME</Link>
              <Link to="/leads">LEADS</Link>
            </div>
          </MobileMenu>

          <Profile>
            <div>
              <Link to="/profile">
                <FaUserCircle />
                <span>
                  Welcome,&nbsp;
                  <strong>{user.name}</strong>
                </span>
              </Link>
            </div>
          </Profile>

          <DesktopMenu>
            <Link to="/dashboard">HOME</Link>
            <Link to="/leads">LEADS</Link>
          </DesktopMenu>

          <SignOut type="button" onClick={signOut}>
            <FiPower />
          </SignOut>
          <img src={logoImg} alt="CCCRM" />
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default AppHeader;
