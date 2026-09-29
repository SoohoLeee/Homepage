export type TechStack = {
    name: string;
    icon: string;
    /** 숙련도 (별 개수) */
    level: number;
};

// 메인 페이지 Tech Stack 카드와 /techstack 페이지에서 함께 사용
export const techStacks = [
    { name: "JavaScript", icon: "/icon/NoBg_JS2.png", level: 3 },
    { name: "TypeScript", icon: "/icon/NoBg_TS2.png", level: 3 },
    { name: "React", icon: "/icon/NoBg_React.png", level: 3 },
    { name: "Dart", icon: "/icon/NoBg_Dart.png", level: 3 },
    { name: "Flutter", icon: "/icon/NoBg_Flutter2.png", level: 4 },
    { name: "Figma", icon: "/icon/NoBg_Figma2.png", level: 4 },
] as const satisfies readonly TechStack[];
