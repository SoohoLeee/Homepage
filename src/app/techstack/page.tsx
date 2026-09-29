import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import { techStacks } from "@/data/techStacks";

export const metadata: Metadata = {
    title: "Tech Stack",
    description: "이수호가 사용하는 기술과 숙련도",
};

export default function TechStackPage() {
    return (
        <div className="min-h-svh">
            <SiteNav />

            <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
                <header className="fade-up py-16 md:py-20">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Skills</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">Tech Stack</h1>
                    <p className="mt-4 text-lg text-muted">별 개수는 스스로 평가한 숙련도입니다.</p>
                </header>

                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {techStacks.map(({ name, icon, level }, i) => (
                        <li key={name}>
                            <Reveal delay={i * 60} className="h-full">
                                <div className="surface flex h-full flex-col items-start gap-6 p-6 transition hover:border-line-strong hover:bg-surface-hover sm:p-8">
                                    <Image src={icon} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                                    <div className="w-full">
                                        <h2 className="text-xl font-semibold">{name}</h2>
                                        <p className="mt-2 text-accent" role="img" aria-label={`숙련도 별 ${level}개`}>
                                            {"★".repeat(level)}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
