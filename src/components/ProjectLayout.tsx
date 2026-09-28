import Link from "next/link";
import type { ReactNode } from "react";

type ProjectLayoutProps = {
    subtitle: string;
    aside: ReactNode;
    children: ReactNode;
};

/**
 * 프로젝트 상세 페이지 공통 레이아웃
 * 상단 헤더 + (스크롤 가능한 본문 | 오른쪽 미디어 영역)
 */
export default function ProjectLayout({ subtitle, aside, children }: ProjectLayoutProps) {
    return (
        <div className="flex flex-col h-screen bg-black select-none">
            {/* 상단 헤더 */}
            <header className="shrink-0 bg-black/90 px-6 pt-6 pb-2">
                <Link href="/" className="inline-block mb-2 text-lg text-gray-400 hover:text-white hover:underline">
                    ← Home
                </Link>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Project</h1>
                    <p className="text-lg md:text-3xl mb-4">{subtitle}</p>
                </div>
                <hr className="border-white border-2" />
            </header>

            {/* 본문 + 미디어 */}
            <div className="flex flex-1 min-h-0 w-full">
                <main className="flex-1 overflow-y-auto p-6 md:p-8 text-lg md:text-2xl">{children}</main>
                <aside className="relative w-1/3 hidden lg:flex justify-center items-center p-8 min-w-0">
                    {aside}
                </aside>
            </div>
        </div>
    );
}
