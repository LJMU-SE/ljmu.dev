import Layout from "@/components/Layout/PageLayout";
import LandingHeader from "@/components/Landing/LandingHeader";
import Container from "@/components/Layout/Container";

export default function Home() {
    return (
        <Layout
            name={"Home"}
            fixedNav={false}
            description={
                "We are a small team of software engineering students from Liverpool John Moore's University"
            }
        >
            <LandingHeader />
            <Container>
                <div className="py-8 flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full px-0 md:pr-4">
                        <h1 className="text-2xl">About Us</h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ornare mauris a risus dignissim posuere.
                            Donec massa orci, auctor non venenatis et, convallis
                            ut ante. Morbi ut dapibus quam. Duis efficitur ante
                            libero, et suscipit massa sagittis eget. Nunc
                            egestas sem pharetra sapien semper, ac vulputate
                            velit sollicitudin. Nam vel enim at quam dictum
                            vestibulum ut laoreet arcu. Fusce dignissim porta
                            risus. Fusce eu ante ut nisi tempor pulvinar sit
                            amet vitae mauris.
                        </p>
                    </div>
                    <div className="w-full px-0 md:pl-4">
                        <h1 className="text-2xl">About Us</h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ornare mauris a risus dignissim posuere.
                            Donec massa orci, auctor non venenatis et, convallis
                            ut ante. Morbi ut dapibus quam. Duis efficitur ante
                            libero, et suscipit massa sagittis eget. Nunc
                            egestas sem pharetra sapien semper, ac vulputate
                            velit sollicitudin. Nam vel enim at quam dictum
                            vestibulum ut laoreet arcu. Fusce dignissim porta
                            risus. Fusce eu ante ut nisi tempor pulvinar sit
                            amet vitae mauris.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
