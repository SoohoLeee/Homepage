import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { techStacks } from "@/data/techStacks";

const EMAIL = "soohobiz96@gmail.com";

// 단어 단위로 순차 등장하는 제목 (키네틱 타이포그래피)
function KineticLine({ words, startDelay, className = "" }: { words: string[]; startDelay: number; className?: string }) {
    return (
        <span className="block">
            {words.map((word, i) => (
                <span
                    key={word}
                    className={`kinetic-word mr-[0.25em] ${className}`}
                    style={{ animationDelay: `${startDelay + i * 90}ms` }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}

function CardLabel({ children }: { children: React.ReactNode }) {
    return <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{children}</p>;
}

function Arrow() {
    return (
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
        </span>
    );
}

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Hero 섹션 */}
            <section className="flex min-h-svh flex-col justify-center gap-10 py-24 md:flex-row md:items-center md:justify-start md:gap-14">
                <div className="fade-up relative shrink-0" style={{ animationDelay: "100ms" }}>
                    <div className="absolute -inset-3 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
                    <Image
                        src="/selfie.png"
                        alt="이수호 프로필 사진"
                        className="relative h-36 w-36 rounded-full border border-line-strong object-cover md:h-60 md:w-60"
                        width={240}
                        height={240}
                        sizes="(max-width: 768px) 144px, 240px"
                        priority
                    />
                </div>

                <div>
                    <p
                        className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted"
                        style={{ animationDelay: "200ms" }}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
                        Frontend Engineer
                    </p>
                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                        <KineticLine words={["Hi,", "I", "am"]} startDelay={300} />
                        <KineticLine words={["Sooho", "Lee."]} startDelay={570} className="shimmer" />
                    </h1>
                    <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "900ms" }}>
                        <a
                            href="#about"
                            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-accent"
                        >
                            포트폴리오 둘러보기
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
                        >
                            메일 보내기
                        </a>
                    </div>
                </div>
            </section>

            {/* About - 벤토 그리드 */}
            <section id="about" className="scroll-mt-8 pb-24">
                <Reveal>
                    <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.25em] text-muted">About</h2>
                </Reveal>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                    {/* 소개 */}
                    <Reveal className="md:col-span-4">
                        <div className="surface flex h-full flex-col justify-between gap-10 p-8">
                            <CardLabel>Intro</CardLabel>
                            <p className="text-2xl font-medium leading-snug md:text-3xl">
                                Backend, Frontend, Designer를 잇는
                                <span className="text-accent"> 소통의 다리</span>,
                                <br className="hidden md:block" />
                                협업을 완성하는 프론트엔드 개발자입니다.
                            </p>
                        </div>
                    </Reveal>

                    {/* 연락처 */}
                    <Reveal className="md:col-span-2" delay={80}>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="surface group flex h-full flex-col justify-between gap-10 p-8 transition hover:border-line-strong hover:bg-surface-hover"
                        >
                            <CardLabel>Contact</CardLabel>
                            <div>
                                <p className="break-all text-lg">{EMAIL}</p>
                                <p className="mt-3 text-sm text-accent">
                                    메일 보내기 <Arrow />
                                </p>
                            </div>
                        </a>
                    </Reveal>

                    {/* 프로젝트 카드 */}
                    {projects.map((project, i) => (
                        <Reveal key={project.slug} className="md:col-span-3" delay={i * 80}>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="surface group flex h-full flex-col overflow-hidden transition hover:border-line-strong hover:bg-surface-hover"
                            >
                                <div className="relative h-64 overflow-hidden border-b border-line md:h-80">
                                    <Image
                                        src={project.thumbnail}
                                        alt={`${project.title} 서비스 화면`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-4 p-8">
                                    <div className="flex items-center justify-between gap-4">
                                        <CardLabel>Project 0{i + 1}</CardLabel>
                                        <span className="text-xs text-muted">{project.period}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                                        <p className="mt-1 text-muted">{project.summary}</p>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                                        <ul className="flex gap-2">
                                            {project.stack.map((tech) => (
                                                <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="text-sm text-accent">
                                            자세히 보기 <Arrow />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}

                    {/* 학력 */}
                    <Reveal className="md:col-span-2">
                        <div className="surface flex h-full flex-col gap-8 p-8">
                            <CardLabel>Education</CardLabel>
                            <ul className="space-y-6">
                                <li>
                                    <p className="text-lg font-medium">SSAFY 12th</p>
                                    <p className="text-sm text-muted">Certificate</p>
                                </li>
                                <li>
                                    <p className="text-lg font-medium">Chung-Ang University</p>
                                    <p className="text-sm text-muted">Business Administration</p>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* 기술 스택 */}
                    <Reveal className="md:col-span-4" delay={80}>
                        <Link
                            href="/techstack"
                            className="surface group flex h-full flex-col justify-between gap-8 p-8 transition hover:border-line-strong hover:bg-surface-hover"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <CardLabel>Tech Stack</CardLabel>
                                <span className="text-sm text-accent">
                                    전체 보기 <Arrow />
                                </span>
                            </div>
                            <ul className="grid grid-cols-3 gap-6 sm:grid-cols-6">
                                {techStacks.map((tech) => (
                                    <li key={tech.name} className="flex flex-col items-center gap-3">
                                        <Image
                                            src={tech.icon}
                                            alt=""
                                            width={48}
                                            height={48}
                                            className="h-12 w-12 object-contain opacity-80 transition group-hover:opacity-100"
                                        />
                                        <span className="text-xs text-muted">{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </Link>
                    </Reveal>
                </div>
            </section>

            <footer className="border-t border-line py-10 text-sm text-muted">© Sooho Lee</footer>
        </main>
    );
}
