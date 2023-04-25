
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Body =(props)=>{
    return(
       
        
  
         
        <div className="App-body"> 
        <div>
        Productos 
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Descripcion</th>
            <th>Precio</th>
  
          </tr>
        </thead>
        <tbody>
  
          {
            props.productosLista.map((p,i)=>
            <tr key={i}>
              <td>{p.codigo}</td>
              <td>{p.descripcion}</td>
              <td>{p.precio}</td>
              <td><Button variant="success" onClick={() => {props.agregar(p)}}>+</Button>{' '}</td>
  
            </tr>
  
          
            )
          }
          
        </tbody>
  
  
          </Table>
          </div>
        <div>
          Total $ {props.total}
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Descripcion</th>
            <th>Precio</th>
  
          </tr>
        </thead>
        <tbody>
  
          {
            props.carrito.map((p,i)=>
            <tr key={i}>
              <td>{p.codigo}</td>
              <td>{p.descripcion}</td>
              <td>{p.precio}</td>
              <td><Button variant="danger" onClick={() => props.eliminar(p)}>-</Button>{' '}</td>
  
            </tr>
  
          
            )
          }
            
        </tbody>
  
  
          </Table>
          <h1> Total
          {
            props.total
          }
      </h1>

        </div>
        
        
        
        
        </div>
    )
}

export default Body;