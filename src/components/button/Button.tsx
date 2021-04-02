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
            {'asdas!!!!dasd!!!???111'}
        </button>
    );
};

export default Button;
