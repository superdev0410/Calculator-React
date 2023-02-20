import "./Button.css";

const Button = ({ className, value, onClick }) => {
    return (
        <button classname={className} onclick={onClick}>
            {value}
        </button>
    );
};

export default Button;