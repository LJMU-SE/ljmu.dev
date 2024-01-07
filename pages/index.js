import Layout from "@/components/Layout/PageLayout";
import PageHeader from "@/components/Layout/PageHeader";

export default function Home() {
    return (
        <Layout fixedNav={true}>
            <PageHeader title="Home" />
            <div className="h-32"></div>
        </Layout>
    );
}
