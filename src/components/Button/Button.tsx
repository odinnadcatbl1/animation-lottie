import "./button.css";

export interface IButton {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <div className="button__container">
            <button onClick={onClick} className="button">
                {text}
            </button>
        </div>
    );
};

export default Button;
