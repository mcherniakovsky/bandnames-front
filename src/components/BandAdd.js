import React, {useState, useContext} from 'react';
import { SocketContext } from '../context/SocketContext';

const BandAdd = () => {

  const[valor, setValor] = useState('');
  const {socket} = useContext(SocketContext);
  const onSubmit = (ev) => {
    ev.preventDefault();
    if(valor.length > 0) {
      socket.emit('agregar-banda', {nombre: valor});
      setValor('')
  }
}
  return (
    <div>
      <h3>
        Agregar Banda
      </h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={(ev) => {setValor(ev.target.value)}}
          value={valor}
          placeholder="Nuevo nombre de banda" className="form-Control"></input>
      </form>
    </div>
  )
}

export default BandAdd
