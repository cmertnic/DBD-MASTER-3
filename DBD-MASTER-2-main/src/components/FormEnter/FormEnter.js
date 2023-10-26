import "./FormEnter.scss"
import Input from "../input/input"
import Button from "../button/button"
const FormEnter = ({titleForm}) => {
    return (
        <form className="form-auth">
            <h2>{titleForm}</h2>
          <Input name="text" inputTitle="Логин" type="email" />
            <Input name="password" inputTitle="Пароль" type="password" />
            <Button buttonName="Войти"/>
        </form>
    );
}
export default FormEnter;