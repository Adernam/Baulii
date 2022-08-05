import React from 'react';
import TextField from '@material-ui/core/TextField';
import Backward from '../../assets/back.png';
import { App, Hr, Back, DivLogo, DivForm, Button } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { addres } from '../../services/users';
import { useProtectPage } from '../../routes/coordinator';


const PaginaCadastro = () => {
  useProtectPage();
  const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    addres(form, clear, navigate);
  };

  return (
    <App>
      <DivLogo>
        <Back src={Backward} />
        <Hr></Hr>
      </DivLogo>
      <h3>Cadastrar</h3>
      <DivForm>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"street"}
            value={form.street}
            onChange={onChange}
            id="outlined-basic"
            label="Logradouro"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Rua / Av.'
          />
          <TextField
            name={"number"}
            value={form.number}
            onChange={onChange}
            id="outlined-basic"
            label="Número"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Número'
          />
          <TextField
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            id="outlined-basic"
            label="Complemento"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Apto. / Bloco'
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            id="outlined-basic"
            label="Bairro"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Bairro'
          />
          <TextField
            name={"city"}
            value={form.city}
            onChange={onChange}
            id="outlined-basic"
            label="Cidade"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Cidade'
          />
          <TextField
            name={"state"}
            value={form.state}
            onChange={onChange}
            id="outlined-basic"
            label="Estado"
            margin='dense'
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
            variant="outlined"
            placeholder='Estado'
          />
          <Button><strong>Salvar</strong></Button>
        </form>
      </DivForm>
    </App>
  );
};

export default PaginaCadastro;