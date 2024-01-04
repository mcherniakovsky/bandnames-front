import React, {useState} from 'react';
import { useSocket } from '../hooks/useSocket';

const BandAdd = () => {

  const[valor, setValor] = useState('');
  const {socket} = useSocket('http://localhost:8080')

  const onSubmit = (ev) => {
    ev.preventDefault();
    if(valor.length > 0) {
      //TODO: llamar la funcionar de emitir el Evento
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
