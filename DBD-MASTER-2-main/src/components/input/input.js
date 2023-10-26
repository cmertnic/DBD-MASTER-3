import "./input.scss"

const Input = ({ inputTitle, name, type}) => {
    return (
        <div className="input-group">
            <label>{inputTitle}</label>
            <input name={name} type={type}  required />
            
        </div>
    );
}

export default Input;
