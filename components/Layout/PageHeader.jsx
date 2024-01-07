import Container from "@/components/Layout/Container";
export default function PageHeader({
    title = "Header Title",
    bg = "/img/page-header-1.webp",
}) {
    return (
        <div
            className={`w-full bg-left bg-cover bg-no-repeat relative h-96`}
            style={{ backgroundImage: `url("${bg}")` }}
        >
            <div className="h-full w-full bg-black/50 text-white">
                <Container>
                    <div className="h-full flex items-center">
                        <h1 className="text-4xl">{title}</h1>
                    </div>
                </Container>
            </div>
        </div>
    );
}
