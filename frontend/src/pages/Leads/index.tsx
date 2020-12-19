import React from 'react';
import 'react-day-picker/lib/style.css';
import { FiAlertTriangle } from 'react-icons/fi';
import AppHeader from '../../components/AppHeader';

import { Container, Content } from './styles';

const Leads: React.FC = () => {
  return (
    <Container>
      <AppHeader />

      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </Container>
  );
};

export default Leads;
