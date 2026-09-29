import Link from "next/link";

// 서브 페이지 상단 내비게이션 (홈으로 돌아가기)
export default function SiteNav() {
    return (
        <nav className="sticky top-0 z-40 border-b border-line bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                <Link href="/" className="group text-sm text-muted transition hover:text-foreground">
                    <span aria-hidden="true" className="mr-1 inline-block transition-transform group-hover:-translate-x-1">
                        ←
                    </span>
                    홈으로
                </Link>
                <span className="text-sm font-medium">Sooho Lee</span>
            </div>
        </nav>
    );
}
