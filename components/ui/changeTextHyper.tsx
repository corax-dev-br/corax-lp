"use client";

import React, { useState, useEffect } from 'react';
import HyperText from './hyper-text';

interface HyperTextChangeProps {
    texts: string[];
    interval: number; // interval in seconds
}

export function HyperTextChange({ texts, interval }: HyperTextChangeProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState(texts[0]);

    useEffect(() => {
        const textChangeInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval * 1000);

        return () => clearInterval(textChangeInterval);
    }, [texts, interval]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayText(texts[currentTextIndex]);
        }, 100); // Adjust the delay as needed

        return () => clearTimeout(timeout);
    }, [currentTextIndex, texts]);

    return (
        <div className="flex w-full flex-row justify-center md:text-8xl text-3xl font-bold text-white dark:text-white">
            <HyperText
                
                className='break-words whitespace-pre-wrap'
                text={displayText}
            />
        </div>
    );
}