import projects from "@/projects";
import BodyButton from "@/components/Buttons/Body";
import Container from "@/components/Layout/Container";

function ProjectCard({ title, description, href, counts }) {
    return (
        <div className="rounded-md bg-white w-full max-w-[300px] overflow-hidden mr-5 first:ml-1 last:mr-1 shrink-0 shadow-md">
            <div className="w-full h-40 relative">
                <p className="absolute top-0 left-0 text-white shadow-lg p-3">
                    {counts.index}/{counts.total}
                </p>
                <img
                    className="w-full h-full object-cover object-center"
                    src="/img/page-header-1.webp"
                />
            </div>
            <div className="p-4 h-60 flex flex-col">
                <h2 className="h-6">{title}</h2>
                <p className="my-2 h-max line-clamp-5">{description}</p>
                <div className="flex-grow" />
                <BodyButton
                    width="w-full"
                    onClick={() => {
                        window.open(href, "_blank");
                    }}
                >
                    Learn More
                </BodyButton>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <div className="bg-gray-100 py-8">
            <Container>
                <h1 className="text-2xl">Some of Our Work</h1>
                <div className="max-w-full overflow-auto mt-3 pb-5 flex flex-nowrap custom-scroll">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            counts={{
                                total: featuredProjects.length,
                                index: index + 1,
                            }}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
