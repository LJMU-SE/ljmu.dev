import { useState } from "react";
import Container from "./Container";
import { IoClose, IoMenu } from "react-icons/io5";

const NavLink = ({ href, target, children }) => {
    return (
        <a href={href} target={target} className="text-sm mr-6">
            {children}
        </a>
    );
};

export default function NavBar({ fixed = false }) {
    const [open, setOpen] = useState(false);

    return (
        <nav
            id="navbar"
            className={`text-white border-b border-b-black w-full ${
                fixed ? "fixed top-0 left-0 z-10" : "block"
            }`}
        >
            <div className="flex justify-center items-center h-14 bg-black">
                <Container>
                    <div className="h-full flex items-center justify-center md:justify-start overflow-hidden">
                        <img
                            src="/img/logos/white.webp"
                            alt="SE Team Logo"
                            className="h-7 mr-1"
                        />
                        <h1 className="font-black text-xl text-nowrap italic hidden md:block">
                            SOFTWARE ENGINEERING
                        </h1>
                        <div className="absolute h-14 w-14 right-0 md:hidden flex items-center justify-center">
                            <IoMenu
                                onClick={() => {
                                    setOpen(true);
                                }}
                                size={20}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="hidden md:block h-10 bg-[#0D0D0D] shadow-header">
                <Container>
                    <div className="flex items-center h-full">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/">About Us</NavLink>
                        <NavLink
                            href="https://www.ljmu.ac.uk"
                            target={"_blank"}
                        >
                            Our University
                        </NavLink>
                    </div>
                </Container>
            </div>
            <div
                className={`top-0 h-[100dvh] ${
                    open ? "w-full" : "w-0"
                } bg-black fixed z-20 transition-all overflow-hidden md:hidden`}
            >
                <div className="absolute h-14 w-14 right-0 md:hidden flex items-center justify-center">
                    <IoClose
                        onClick={() => {
                            setOpen(false);
                            console.log("Closed");
                        }}
                        size={20}
                        className="cursor-pointer"
                    />
                </div>
                <div className="mt-14 h-max flex flex-col px-10 gap-5">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/">About Us</NavLink>
                    <NavLink href="https://www.ljmu.ac.uk" target={"_blank"}>
                        Our University
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
