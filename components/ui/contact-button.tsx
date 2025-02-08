import { ButtonProps } from '@headlessui/react';
import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<CustomButtonProps> = ({ children, size = 'medium' }) => {
    return (
        <StyledWrapper size={size}>
            <button>
                {children}
            </button>
        </StyledWrapper>
    );
}



const sizeStyles = {
    small: `
    font-size: 12px;
    padding: 0px 0px;
  `,
    medium: `
    font-size: 18px;
    padding: 12px 24px;
  `,
    large: `
    font-size: 24px;
    padding: 14px 28px;
  `,
};


const StyledWrapper = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  button {
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    ${({ size }) => sizeStyles[size]}
  }

  button:focus,
  button:hover {
    color: transparent;
    background-image: radial-gradient(circle, #0FBAEF, #28327C);
    background-clip: text;
    -webkit-background-clip: text;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
    color: radial-gradient(circle, #0FBAEF, #28327C);
  }

button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-image: radial-gradient(circle, #0FBAEF, #28327C);
  color: #0FBAEF;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}`;

export default Button;
