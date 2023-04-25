import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Banner from './Components/Banner';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';




class App extends Component{
  state = {
    carrito:[],
    total:0,
    productosLista:[
    {codigo:1,descripcion:"Moto G42 128 GB", precio:4299},
    {codigo:2,descripcion:"Laptop HP AMD Ryzen 5", precio:11999},
    {codigo:3,descripcion:"Apple Macbook Air", precio:18599},
    {codigo:4,descripcion:"Pantalla Tcl Led 55 Smart 4k", precio:7999},
    {codigo:5,descripcion:"Cámara Seguridad Wifi 2mp Hd", precio:411},
    {codigo:6,descripcion:"Licuadora Ninja Professional", precio:1799},
    {codigo:7,descripcion:"Ouo Silla Gamer Reclinable", precio:1499},
    {codigo:8,descripcion:"Auriculares In-ear Inalámbricos", precio:334},
    ],
    };

    agregar=(p)=>{
      let temp=[...this.state.carrito,p]
      let total=temp.reduce((acum,pr)=>{
        return acum+pr.precio},0)
     

      this.setState({
        carrito:temp,
        total
      }
      )
    }


eliminar=(p)=>{
  let temp=[...this.state.carrito,p]


  let temporal=this.state.carrito.filter((elemento,i)=>elemento.codigo!==p.codigo)
  let total=temporal.reduce((acum,pr)=>{
    return acum+pr.precio},0)
  
  this.setState({
    carrito:temporal,
    total
  })
}




  render(){
    return(
      <div className='App'>
        <Header/>

       <Body
        agregar={this.agregar}
        eliminar={this.eliminar}
        carrito={this.state.carrito}
        productosLista={this.state.productosLista}
        total={this.state.total}
       />

        <Banner/>

        
      </div>




    );
  }
}
export default App;
/*
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


<Button variant="warning">Warning</Button>{' '}
<Button variant="danger">Danger</Button>{' '}
<Button variant="primary">Primary</Button>{' '}

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
</Table>


MyComponent.propTypes = {
  name: PropTypes.string
};


*/