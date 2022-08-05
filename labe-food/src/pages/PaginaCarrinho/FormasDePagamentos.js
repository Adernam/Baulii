import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


export default function RadioButtonsGroup() {
  const { paymentMethod, setPaymentMethod } = useContext(GlobalStateContext);

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Metodo de Pagamento</FormLabel>
      <RadioGroup
        aria-label="paymentMethod"
        name="paymentMethod1"
        value={paymentMethod}
        onChange={handleChange}
      >
        <FormControlLabel
          value="creditcard"
          control={<Radio />}
          label="Cartão de Credito"
        />
        <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
      </RadioGroup>
    </FormControl>
  );
};