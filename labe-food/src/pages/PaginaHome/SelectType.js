import React from 'react';
import Button from '@material-ui/core/Button';


const SelectType = (props) => {
  const selectRestaurant = () => {
    if (props.item.category === props.tipoDeRestaurante) {
      props.setTipoDeRestaurante('');
    }
    else {
      props.setTipoDeRestaurante(props.item.category);
    };
  };

  return (
      <div>
        <Button
          variant="outlined"
          onClick={selectRestaurant}
        >{props.item.category}</Button>
      </div>
  );
};

export default SelectType;
