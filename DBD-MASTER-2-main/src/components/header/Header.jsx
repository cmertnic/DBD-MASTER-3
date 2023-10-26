import './Header.scss'
import { Link } from 'react-router-dom'; 
import MyRouter from '../../router/myRouter';

const Header = () => {
  return ( 
    <div className="header-app">

        <div className="header_div_1">

        <h1 className="main-header-txt">
          <Link to="/main" className="link_decor">
          DBD Master
          </Link>
        </h1> 

        <button className="header_button_1">
          <Link to="/registration" className="link_decor2">
          <p className="header-button-txt">Registration</p>
          </Link>
        </button>
        
        <button className="header_button_2">
          <Link to="/login" className="link_decor2">
          <p className="header-button-txt">Login</p>
          </Link>
        </button>

        </div>

    </div>
   );
}
 
export default Header;