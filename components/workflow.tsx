"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; title?: string; isActive?: boolean; onClick?: () => void }
>(({ className, children, title, isActive, onClick }, ref) => {
    return (
        <div className="flex flex-col items-center py-6">
            {title && (
                <div
                    className={cn(
                        "mb-2 text-center text-sm font-bold",
                        isActive ? "text-opacity-100 text-white" : "text-opacity-50 text-gray-50"
                    )}
                >
                    {title}
                </div>
            )}
            <div
                ref={ref}
                onClick={onClick}
                className={cn(
                    "z-10 flex size-10 items-center justify-center rounded-full p-3 cursor-pointer",
                    isActive
                        ? "bg-gradient-to-r from-[#28327C] to-[#13b6e8] shadow-[0px_0px_20px_0px_rgba(50,182,232,0.4)]"
                        : "bg-white bg-opacity-50"
                )}
            >
                {children}
            </div>
        </div>
    );
});

Circle.displayName = "Circle";



export function WorkflowBeam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div1RefMobile = useRef<HTMLDivElement>(null);
    const div2RefMobile = useRef<HTMLDivElement>(null);
    const div3RefMobile = useRef<HTMLDivElement>(null);
    const div4RefMobile = useRef<HTMLDivElement>(null);
    const div1Mobile = useRef<HTMLDivElement>(null);
    const div2Mobile = useRef<HTMLDivElement>(null);
    const div3Mobile = useRef<HTMLDivElement>(null);
    const div4Mobile = useRef<HTMLDivElement>(null);






    const [activeCircle, setActiveCircle] = useState<number | null>(1);
    const [activeCircleM, setActiveCircleM] = useState<number | null>(1);

    const [prevActiveCircle, setPrevActiveCircle] = useState<number | null>(-1);
    const [prevActiveCircleM, setPrevActiveCircleM] = useState<number | null>(-1);
    const handleCircleClick = (index: number) => {
        setPrevActiveCircle(activeCircle);
        setActiveCircle(index);


    };

    const handleCircleClickM = (index: number) => {
        setPrevActiveCircleM(activeCircleM);
        setActiveCircleM(index);
    }

    const textPerIndex: { [key: number]: string } = {
        1: "Entendemos as necessidades e desafios do seu negócio, analisando as melhores soluções para alcançar seus objetivos!",
        2: "Desenhamos um plano estratégico com etapas claras, prazos bem definidos e total alinhamento com as suas expectativas!",
        3: "Colocamos a mão na massa com eficiência e qualidade, utilizando as tecnologias mais modernas para criar soluções personalizadas!",
        4: "Após a entrega, seguimos ao seu lado, garantindo manutenção, melhorias e suporte sempre que necessário!",
    };


    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: Array.from({ length: 101 }, (_, i) => i / 100), // More frequent checks
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            let closestIndex = activeCircleM ?? 0;
            let minDistance = Infinity;

            entries.forEach((entry) => {
                const index = parseInt(entry.target.getAttribute("data-index")!);
                const rect = entry.target.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distanceToCenter = Math.abs(viewportCenter - elementCenter);

                if (distanceToCenter < minDistance) {
                    minDistance = distanceToCenter;
                    closestIndex = index;
                }
            });

            if (closestIndex !== activeCircleM) {
                setPrevActiveCircleM(activeCircleM);
                setActiveCircleM(closestIndex);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elements = [
            div1Mobile.current,
            div2Mobile.current,
            div3Mobile.current,
            div4Mobile.current,
        ];

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            elements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, [activeCircleM]);
    
    return (
        <div
            className="relative flex w-full max-w-[500px] flex-col items-center justify-center overflow-visible rounded-lg bg-background"
            ref={containerRef}
        >
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
                        <stop offset="100%" style={{ stopColor: "#C0C0C0" }} />
                    </linearGradient>
                </defs>
            </svg>
            <div className="hidden md:flex size-full flex-col items-stretch justify-between gap-10">

                <div className="flex items-center justify-between w-full">
                    <button
                        className="pt-4 rounded-full bg-transparent  md:block"
                        onClick={() => handleCircleClick((activeCircle! - 1 + 4) % 4 || 4)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <div className="flex md:flex-row flex-col justify-between gap-6 align-middle">
                        <Circle
                            ref={div1Ref}
                            title="Diagnóstico"
                            isActive={activeCircle === 1}
                            onClick={() => handleCircleClick(1)}
                        >
                            <Icons.user />
                        </Circle>
                        <Circle
                            ref={div2Ref}
                            title="Planejamento"
                            isActive={activeCircle === 2}
                            onClick={() => handleCircleClick(2)}
                        >
                            <Icons.openai />
                        </Circle>
                        <Circle
                            ref={div3Ref}
                            title="Desenvolvimento"
                            isActive={activeCircle === 3}
                            onClick={() => handleCircleClick(3)}
                        >
                            <Icons.Teste />
                        </Circle>
                        <Circle
                            ref={div4Ref}
                            title="Suporte"
                            isActive={activeCircle === 4}
                            onClick={() => handleCircleClick(4)}
                        >
                            <Icons.Teste />
                        </Circle>
                    </div>
                    <button
                        className="pt-4 rounded-full bg-transparent  md:block"
                        onClick={() => handleCircleClick((activeCircle! % 4) + 1)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
                {/* text of the icons */}
                <div className="relative flex flex-row items-center justify-center gap-4">
                    {Object.keys(textPerIndex).map((key) => {
                        const index = parseInt(key);
                        return (
                            <p
                                key={key}
                                className={cn(
                                    "absolute text-lg transform transition-all duration-500 text-center text-opacity-70 bg-clip-text text-transparent",
                                    index === activeCircle
                                        ? "opacity-100 translate-x-0"
                                        : index > activeCircle!
                                            ? "opacity-0 translate-x-[100%]"
                                            : "opacity-0 translate-x-[-100%]"
                                )}
                                style={{
                                    backgroundImage: "linear-gradient(to right, #FFFFFFAA, #F1f1f1)",
                                }}
                            >
                                {textPerIndex[index]}
                            </p>
                        );
                    })}
                </div>

            </div>



            {/* Mobile vertical stepper */}
            <div className="md:hidden flex flex-col items-center gap-20">
                {Object.keys(textPerIndex).map((key) => {
                    const index = parseInt(key);
                    return (
                        <div key={key} className="flex items-center gap-4"
                            data-index={index}
                            ref={
                                index === 1
                                    ? div1Mobile
                                    : index === 2
                                        ? div2Mobile
                                        : index === 3
                                            ? div3Mobile
                                            : div4Mobile
                            }
                        >
                            <Circle
                                ref={index === 1 ? div1RefMobile : index === 2 ? div2RefMobile : index === 3 ? div3RefMobile : div4RefMobile}
                                isActive={activeCircleM === index}
                                onClick={() => handleCircleClickM(index)}
                            >
                                {index === 1 ? <Icons.user /> : index === 2 ? <Icons.openai /> : <Icons.Teste />}
                            </Circle>
                            <p
                                onClick={() => handleCircleClick(index)}
                                className={cn(
                                    "text-lg transform transition-all duration-500 text-start text-opacity-70 bg-clip-text text-transparent",
                                    index === activeCircleM
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-50 translate-x-0"
                                )}
                                style={{
                                    backgroundImage: "linear-gradient(to right, #FFFFFFAA, #F1f1f1)",
                                }}
                            >
                                <strong>
                                    {index === 1 ? "Diagnóstico" : index === 2 ? "Planejamento" : index === 3 ? "Desenvolvimento" : "Suporte"}
                                </strong> <br />
                                {textPerIndex[index]}
                            </p>
                        </div>
                    );
                })}
            </div>


            <AnimatedBeam
                duration={9}
                delay={1}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                gradientStartColor="#0FBAEF"
                gradientStopColor="#0FBAEF"
                pathOpacity={1}
                pathColor="#28327C"
            />

            <AnimatedBeam
                duration={9}
                delay={1}
                containerRef={containerRef}
                fromRef={div1RefMobile}
                toRef={div4RefMobile}
                gradientStartColor="#0FBAEF"
                gradientStopColor="#0FBAEF"
                pathOpacity={1}
                pathColor="#28327C"
            />
        </div>
    );
}

const Icons = {
    openai: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
                fill="url(#icon-gradient)"
            />
        </svg>
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24  24"
            fill="none"
            stroke="url(#icon-gradient)"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    Teste: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#icon-gradient)"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
};