"use client"
import React from 'react';
import styled from 'styled-components';

const BlurButton = () => {
  return (
    <StyledWrapper className="flex justify-center mx-4">
      <button className='px-4 w-full'>
        <span >
          Quero saber mais! </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    text-decoration: none;
    position: relative;
    border: none;
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    color: #fff;
    height: 3em;
    line-height: 2em;
    text-align: center;
    background: linear-gradient(90deg, #0fbaef, #1c1d30, #1c1d30, #28327c);
    background-size: 300%;
    border-radius: 30px;
    z-index: 1;
  }

  button:hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  button:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #0fbaef, #1c1d30, #1c1d30, #28327c);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  button:hover::before {
    filter: blur(20px);
  }

  button:active {
    background: linear-gradient(90deg, #0fbaef, #1c1d30, #1c1d30, #28327c);
  }`;

export default BlurButton;
