import React from "react";

interface ButtonProps {
    onClick: () => any
}

const Button: React.FC<ButtonProps> = function({ onClick, children }) {
    return (
        <button type="button"
                onClick={onClick}
                className="btn btn-primary">
            {children}
        </button>
    )
};

export default Button;
