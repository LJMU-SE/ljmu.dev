import Layout from "@/components/Layout/PageLayout";
import LandingHeader from "@/components/Landing/LandingHeader";
import AboutSection from "@/components/Landing/About";
import ProjectsSection from "@/components/Landing/Projects";

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
            <ProjectsSection />
        </Layout>
    );
}
