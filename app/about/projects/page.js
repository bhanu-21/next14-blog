import { Suspense } from "react";
import ProjectsList from "./components/project-list";
import ProjectsListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";
import H1 from "@/components/h1";

export const metadata = { title: "My Projects" };

export default async function ProjectsPage() {
    return (
        <div>
            <H1>Projects</H1>
            <div className="mb-8">Hello, this is my list of repositories.</div>

            <ErrorBoundary fallback={<div>Cannot fetch projects!</div>}>
                <Suspense fallback={<ProjectsListLoading />}>
                    <ProjectsList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}