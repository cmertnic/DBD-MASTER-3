import FormAuth from "../../components/formAuth/formAuth";
import "./registration.scss"
import {Link} from 'react-router-dom';
import ROUTER from "./../router/router";

const Registration =() => {
    return (
      <div className="registration">
        <FormAuth titleForm="Регистрация"/>
        <Link to={ROUTER.LOGIN} className="enter"><div className="link">Уже есть аккаунт?</div></Link>
      </div>
    );
  }
  
  export default Registration;