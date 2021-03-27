import React, { ReactNode } from 'react'

interface ButtonProps {
    onClick: () => void;
    children: string | ReactNode;
}

const Button = ({
    onClick,
    children
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
