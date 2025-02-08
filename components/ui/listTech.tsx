import { cn } from "@/lib/utils";
import Marquee from "./marquee";

const technologies = [
    {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Vue.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
        name: "Angular",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    },
    {
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        name: "Next.js",
        logo: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    },
    {
        name: "Tailwind CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
        name: "MongoDB",
        logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
        name: "Svelte",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    },
    {
        name: "Flutter",
        logo: "https://www.svgrepo.com/show/353751/flutter.svg",
    },
    {
        name: "Laravel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    }
];

const firstRow = technologies.slice(0, technologies.length );
const TechCard = ({
    logo,
    name,
}: {
    logo: string;
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-auto cursor-pointer p-4 bg-transparent",
                // light styles
                // dark styles
            )}
        >
            <div className="flex flex-row items-center gap-2 bg-transparent">
                <img className="" width="32" height="32" alt={name} src={logo} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-visible rounded-lg bg-transparent ">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Marquee>
           
        </div>
    );
}