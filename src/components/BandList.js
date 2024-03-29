import React, {useContext, useEffect, useState} from 'react'
import { SocketContext } from '../context/SocketContext';

const BandList = () => {
  const [bands, setBands] = useState([]);
  const {socket} = useContext(SocketContext)

  useEffect(() =>{
    socket.on('current-bands', (bands) =>{
        setBands(bands)
    })
    return () => socket.off('current-bands')
  }, [socket])



    const cambioNombre = (event, id) =>{
        const newName = event.target.value;
        setBands( bands => bands.map( band  =>{
          if(band.id == id ){
            band.name = newName;
          }
          return band;
        }))
    }

    const onPerdioFoco = (id, nombre) =>{
      socket.emit('cambiar-nombre', {id, nombre})
    }

    const votar = (id) =>{
      socket.emit('votar-banda', id)
    }

    const borrarBanda = (id) =>{
      socket.emit('borrar-banda', id)
    }
  

    const crearRows = () => {
      return (bands.map((band) => {
        return <tr key = {band.id}>
          <td>
            <button
            onClick={() => votar(band.id)}
             className="btn btn-primary">+1</button>
          </td>
          <td>
            <input className="form-control" value={band.name} onChange={(event) => cambioNombre(event, band.id) }
            onBlur={() => onPerdioFoco(band.id, band.name)} />
          </td>
          <td>
            <h3>{band.votes}</h3>
          </td>
          <td>
            {" "}
            <button
             onClick={() => borrarBanda(band.id) }
             className="btn btn-danger" >Borrar</button>
          </td>
        </tr>;
      }));
    };


  return (
    <div>
      <table className='table table-striped'>
        <thead>
            <tr>
                <th></th>
                <th>Nombre</th>
                <th>Votos</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {crearRows()}
        </tbody>
      </table>
    </div>
  )
}

export default BandList
