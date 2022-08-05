import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import Backward from '../../assets/back.png';
import { App, Hr, Back, Logo, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/users';

const PaginaCadastro = () => {
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "", });
  const navigate = useNavigate();


  const onSubmitForm = (event) => {
    event.preventDefault();
    signup(form, clear, navigate);
  }

  const logged = () => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/home');
    };
  };

  useEffect(() => {
    logged();
  }, []);

  return (
    <App>
      <DivLogo>
        <Back onClick={() => navigate("/")} src={Backward} />
        <Hr></Hr>
        <Logo src={LogoVermelha} />
      </DivLogo>
      <h3>Cadastrar</h3>
      <DivForm>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            id="outlined-basic"
            label="Nome"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Nome e sobrenome'
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            id="outlined-basic"
            label="E-mail"
            margin='dense'
            type="email"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='email@email.com'
          />
          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            id="outlined-basic"
            label="CPF"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='000.000.000-00'
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            id="outlined-basic"
            label="Senha"
            margin='dense'
            type="password"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Mínimo 6 caracteres'
          />
          <Button><strong>Criar</strong></Button>
        </form>
      </DivForm>
    </App>
  );
};

export default PaginaCadastro;