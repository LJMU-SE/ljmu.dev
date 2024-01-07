import Container from "./Container";

const NavLink = ({ href, target, children }) => {
    return (
        <a href={href} className="text-sm mr-6">
            {children}
        </a>
    );
};

export default function NavBar({ fixed = false }) {
    return (
        <nav
            className={`text-white border-b border-b-black w-full ${
                fixed ? "fixed top-0 left-0 z-10" : "block"
            }`}
        >
            <div className="flex justify-center items-center h-14 bg-black">
                <Container>
                    <div className="h-full flex items-center overflow-hidden">
                        <h1 className="font-black text-xl text-nowrap">
                            LJMU Bullet Time
                        </h1>
                    </div>
                </Container>
            </div>
            <div className="hidden md:block h-10 bg-[#0D0D0D] shadow-header">
                <Container>
                    <div className="flex items-center h-full">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/">About Us</NavLink>
                    </div>
                </Container>
            </div>
        </nav>
    );
}
