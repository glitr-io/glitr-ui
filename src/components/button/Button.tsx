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
            className="test-button"
            onClick={onClick}
        >
            {children}
            {'asdasdasd'}
        </button>
    );
};

export default Button;
