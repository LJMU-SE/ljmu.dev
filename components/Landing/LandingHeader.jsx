import Container from "@/components/Layout/Container";
import BaseButton from "@/components/Buttons/Base";

export default function LandingHeader() {
    return (
        <div
            className={`w-full bg-left bg-cover bg-no-repeat relative h-[calc(100vh*0.6)]`}
            style={{ backgroundImage: `url("/img/page-header-1.webp")` }}
        >
            <div
                className="h-full w-full text-white"
                style={{
                    background:
                        "linear-gradient(to right, black 30%, transparent 100%)",
                }}
            >
                <Container>
                    <div className="h-full flex flex-col justify-center">
                        <h1 className="text-4xl">
                            LJMU Software Engineering Team
                        </h1>
                        <p className="max-w-lg my-5">
                            We are a small team of software engineering students
                            from{" "}
                            <a href="https://ljmu.ac.uk" target="_blank">
                                Liverpool John Moore's University
                            </a>
                        </p>
                        <BaseButton
                            onClick={() => {
                                window.open(
                                    "https://www.github.com/LJMU-SE",
                                    "_blank"
                                );
                            }}
                        >
                            Learn More
                        </BaseButton>
                    </div>
                </Container>
            </div>
        </div>
    );
}
