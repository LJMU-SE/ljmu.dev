import Layout from "@/components/Layout/PageLayout";
import LandingHeader from "@/components/Landing/LandingHeader";
import Container from "@/components/Layout/Container";
import AboutSection from "@/components/Landing/About";
import BodyButton from "@/components/Buttons/Body";

function ProjectCard({ title, description }) {
    return (
        <div className="rounded-md bg-white w-full max-w-80 overflow-hidden mr-5 last:mr-0 shrink-0">
            <div className="w-full h-40">
                <img
                    className="w-full h-full object-cover object-center"
                    src="/img/page-header-1.webp"
                />
            </div>
            <div className="p-4 h-60 flex flex-col">
                <h2 className="h-6">{title}</h2>
                <p className="my-2 h-max line-clamp-5">{description}</p>
                <div className="flex-grow" />
                <BodyButton width="w-full">Learn More</BodyButton>
            </div>
        </div>
    );
}

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
            <AboutSection />
            <div className="bg-gray-100 py-8">
                <Container>
                    <h1 className="text-2xl">Some of Our Work</h1>
                    <div className="max-w-full overflow-auto mt-3 pb-5 flex flex-nowrap custom-scroll">
                        <ProjectCard
                            title="Project 1"
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mauris a risus dignissim posuere. Donec massa orci, auctor non venenatis et, convallis ut ante. Morbi ut dapibus quam. Duis efficitur ante libero, et suscipit massa sagittis eget. Nunc egestas sem pharetra sapien semper, ac vulputate velit sollicitudin. Nam vel enim at quam dictum vestibulum ut laoreet arcu. Fusce dignissim porta risus. Fusce eu ante ut nisi tempor pulvinar sit amet vitae mauris."
                            }
                        />
                        <ProjectCard
                            title="Project 2"
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mauris a risus dignissim posuere. Donec massa orci, auctor non venenatis et, convallis ut ante. Morbi ut dapibus quam. Duis efficitur ante libero, et suscipit massa sagittis eget. Nunc egestas sem pharetra sapien semper, ac vulputate velit sollicitudin. Nam vel enim at quam dictum vestibulum ut laoreet arcu. Fusce dignissim porta risus. Fusce eu ante ut nisi tempor pulvinar sit amet vitae mauris."
                            }
                        />
                        <ProjectCard
                            title="Project 3"
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mauris a risus dignissim posuere. Donec massa orci, auctor non venenatis et, convallis ut ante. Morbi ut dapibus quam. Duis efficitur ante libero, et suscipit massa sagittis eget. Nunc egestas sem pharetra sapien semper, ac vulputate velit sollicitudin. Nam vel enim at quam dictum vestibulum ut laoreet arcu. Fusce dignissim porta risus. Fusce eu ante ut nisi tempor pulvinar sit amet vitae mauris."
                            }
                        />
                        <ProjectCard
                            title="Project 4"
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mauris a risus dignissim posuere. Donec massa orci, auctor non venenatis et, convallis ut ante. Morbi ut dapibus quam. Duis efficitur ante libero, et suscipit massa sagittis eget. Nunc egestas sem pharetra sapien semper, ac vulputate velit sollicitudin. Nam vel enim at quam dictum vestibulum ut laoreet arcu. Fusce dignissim porta risus. Fusce eu ante ut nisi tempor pulvinar sit amet vitae mauris."
                            }
                        />
                        <ProjectCard
                            title="Project 5"
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare mauris a risus dignissim posuere. Donec massa orci, auctor non venenatis et, convallis ut ante. Morbi ut dapibus quam. Duis efficitur ante libero, et suscipit massa sagittis eget. Nunc egestas sem pharetra sapien semper, ac vulputate velit sollicitudin. Nam vel enim at quam dictum vestibulum ut laoreet arcu. Fusce dignissim porta risus. Fusce eu ante ut nisi tempor pulvinar sit amet vitae mauris."
                            }
                        />
                    </div>
                </Container>
            </div>
        </Layout>
    );
}
