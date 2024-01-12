import Container from "./Container";

function FooterCol({ children, title }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 mb-5 last:mb-0 md:mb-5 md:first:mb-5 lg:mb-0  flex flex-col">
            <h2 className="text-semibold mb-2 text-xl">{title}</h2>
            {children}
        </div>
    );
}

export default function Footer() {
    return (
        <footer
            id="footer"
            className="border-t border-[#dedede] py-10 bg-[#202020] text-white"
        >
            <Container>
                <div className="flex justify-center flex-wrap">
                    <FooterCol title={"Header 1"}>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </FooterCol>
                    <FooterCol title={"Header 2"}>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </FooterCol>
                    <FooterCol title={"Header 3"}>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </FooterCol>
                    <FooterCol title={"Header 4"}>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </FooterCol>
                </div>
                <div className="w-full text-center">
                    <p className="italic mt-10 opacity-50">
                        Disclaimer: The contents of all pages in this website
                        are solely the responsibility of the page authors.
                        Statements made and opinions expressed are strictly
                        those of the authors and not Livepool John Moores
                        University.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
