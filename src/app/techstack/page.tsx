import Image from "next/image";
import Link from "next/link";

// 기술 스택 목록 (bordered: 아이콘 테두리 표시 여부, level: 숙련도 별 개수)
const techStacks = [
    { name: "JavaScript", icon: "/icon/NoBg_JS2.png", bordered: true, level: 3 },
    { name: "TypeScript", icon: "/icon/NoBg_TS2.png", bordered: true, level: 3 },
    { name: "React", icon: "/icon/NoBg_React.png", bordered: false, level: 3 },
    { name: "Dart", icon: "/icon/NoBg_Dart.png", bordered: false, level: 3 },
    { name: "Flutter", icon: "/icon/NoBg_Flutter2.png", bordered: false, level: 4 },
    { name: "Figma", icon: "/icon/NoBg_Figma2.png", bordered: false, level: 4 },
];

export default function TechStackPage() {
    return (
        <div className="min-h-screen p-6 select-none flex flex-col">
            {/* 제목과 구분선 */}
            <div className="mb-4">
                <Link href="/" className="inline-block mb-2 text-lg text-gray-400 hover:text-white hover:underline">
                    ← Home
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Tech Stack</h1>
                <hr className="border-white border-2" />
            </div>

            {/* 기술 스택 그리드 - 중앙 정렬 */}
            <div className="flex-1 flex items-center justify-center">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {techStacks.map(({ name, icon, bordered, level }) => (
                        <li key={name} className="flex flex-col items-center space-y-4">
                            <div
                                className={`w-24 h-24 flex items-center justify-center ${
                                    bordered ? "border-4 border-white rounded-lg" : ""
                                }`}
                            >
                                <Image
                                    src={icon}
                                    alt={`${name} 아이콘`}
                                    width={96}
                                    height={96}
                                    className="max-w-full h-auto"
                                />
                            </div>
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <div className="flex space-x-1" role="img" aria-label={`숙련도 ${level}점`}>
                                {Array.from({ length: level }, (_, i) => (
                                    <span key={i} className="text-2xl" aria-hidden="true">★</span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
