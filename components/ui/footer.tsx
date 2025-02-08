"use client";

import Logo from "./logo";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <footer className="relative d-flex flex-row p-6 shadow-lg bg-transparent bg-opacity-10 backdrop-blur-sm border-t-2 border-r-0 border-white border-opacity-5">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center space-x-4">
          <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
            <Logo />
            <span className="text-white text-lg font-semibold ml-2">Corax</span>
          </Link>
        </div>
        <ul className="flex flex-1 items-center justify-end gap-3 mt-4 md:mt-0">
          <li>
            <ul className="flex items-center space-x-4 mt-4 md:mt-0">
              <li>
                <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 256 256"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="0.625rem"
                      textAnchor="none"
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path>
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.379-.028-3.156-1.922-3.156-1.922 0-2.217 1.5-2.217 3.051v5.605h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.841-1.562 3.041 0 3.605 2.001 3.605 4.605v5.59z" />
                  </svg>
                </Link>
              </li>
            </ul>
           
          </li>
        </ul>
      </div>
      <div className="container mx-auto mt-4 flex flex-col items-center justify-between md:flex-row">
        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Corax LTDA -.454a12 CNPJ: 00.000.000/0000-00
        </div>
        <Link href="/signup">
          <StyledButton size="small">Entre em contato</StyledButton>
        </Link>
      </div>
    </footer>
  );
}

const sizeStyles = {
  small: `
    font-size: 12px;
    padding: 8px 16px;
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

const StyledButton = styled.button<{ size: 'small' | 'medium' | 'large' }>`
  color: #e1e1e1;
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  border: none;
  text-transform: uppercase;
  transition-timing-function: cubic-beier(0.25, 0.8, 0.25, 1);

  
`;