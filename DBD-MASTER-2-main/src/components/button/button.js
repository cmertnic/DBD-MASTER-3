import "./button.scss"

const Button = ({buttonName}) => {
    return (
        <button className="button" type="submit" >
            {buttonName}
        </button>
    );
}

export default Button;
