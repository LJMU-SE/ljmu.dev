import Container from "./Container";

const NavLink = ({ href, target, children }) => {
    return (
        <a href={href} target={target} className="text-sm mr-6">
            {children}
        </a>
    );
};

export default function NavBar({ fixed = false }) {
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
                        <h1 className="font-black text-xl text-nowrap italic">
                            SOFTWARE ENGINEERING
                        </h1>
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
        </nav>
    );
}
