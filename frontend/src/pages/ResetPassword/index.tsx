import React, { useRef, useCallback, useState } from 'react';
import { FiAlertTriangle, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useLocation, useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/cc_logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [onDev, setOnDev] = useState(true);

  const { addToast } = useToast();
  const history = useHistory();

  const location = useLocation();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Write a valid password'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Passwords must match',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, passwordConfirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          passwordConfirmation,
          token,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar senha, tente novamente',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          {!onDev ? (
            <>
              <img src={logoImg} alt="GoBarber" />

              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Resetar senha</h1>

                <Input
                  name="password"
                  icon={FiLock}
                  type="password"
                  placeholder="Nova senha"
                />

                <Input
                  name="passwordConfirmation"
                  icon={FiLock}
                  type="password"
                  placeholder="Confirmar senha"
                />

                <Button type="submit">Resetar</Button>
              </Form>
            </>
          ) : (
            <Form
              ref={formRef}
              onSubmit={() => {}}
              style={{ color: '#ffee00' }}
            >
              <FiAlertTriangle size={100} />
              <p>IN DEVELOPMENT...</p>
            </Form>
          )}
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
