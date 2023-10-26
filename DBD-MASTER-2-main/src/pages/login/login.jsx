import FormEnter from "../../components/FormEnter/FormEnter";
import "./login.scss"
import {Link} from 'react-router-dom';
import ROUTER from "../router/router";


const Login =() => {
  return (
  <div className="login">
    <FormEnter titleForm="Войти"/>
    <Link to={ROUTER.REGISTRATION} className="enter"><div className="link">Хотите зарегистрироваться?</div></Link>
  </div>
  );
}

export default Login;
