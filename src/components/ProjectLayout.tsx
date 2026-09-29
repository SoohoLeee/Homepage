import Image from "next/image";
import type { ReactNode } from "react";
import type { Project } from "@/data/projects";
import SiteNav from "@/components/SiteNav";

type ProjectLayoutProps = {
    project: Project;
    index: number;
    media: ReactNode;
    children: ReactNode;
};

/**
 * 프로젝트 상세 페이지 공통 레이아웃
 * 상단 내비게이션 + 프로젝트 헤더 + (본문 | 고정된 미디어 영역)
 */
export default function ProjectLayout({ project, index, media, children }: ProjectLayoutProps) {
    return (
        <div className="min-h-svh">
            <SiteNav />

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <header className="fade-up py-16 md:py-20">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Project 0{index + 1}</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
                    <p className="mt-4 text-lg text-muted md:text-xl">{project.summary}</p>
                    <dl className="mt-8 flex flex-wrap gap-3 text-sm">
                        <div className="rounded-full border border-line px-4 py-1.5">
                            <dt className="sr-only">기간</dt>
                            <dd>{project.period}</dd>
                        </div>
                        <div className="rounded-full border border-line px-4 py-1.5">
                            <dt className="sr-only">주요 기술</dt>
                            <dd>{project.stack.join(", ")}</dd>
                        </div>
                    </dl>
                </header>

                {/* 모바일: 미디어 영역 대신 대표 이미지 표시 */}
                <div className="relative mb-8 h-72 overflow-hidden rounded-[1.5rem] border border-line lg:hidden">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.title} 서비스 화면`}
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                        priority
                    />
                </div>

                <div className="grid gap-12 pb-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
                    <main className="project-prose surface p-6 sm:p-10">{children}</main>
                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <div className="relative">
                                <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/10 blur-3xl" aria-hidden="true" />
                                <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-surface p-2">
                                    {media}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
