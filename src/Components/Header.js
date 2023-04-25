import React,{Component} from 'react';
import logo from '../logo.jpg';

class Header extends Component{
    render(){
        return(
            <div className='App-header'>

            <img src={logo} className='App-logo'>
                
            </img>

            </div>
        );
    }
}

export default Header;