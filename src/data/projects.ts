export type Project = {
    slug: string;
    title: string;
    summary: string;
    period: string;
    stack: string[];
    thumbnail: string;
};

// 메인 페이지 카드와 프로젝트 상세 페이지 헤더에서 함께 사용하는 프로젝트 정보
export const projects = [
    {
        slug: "muinus",
        title: "Muinus",
        summary: "무인 편의점 플랫폼",
        period: "25.01.06 ~ 25.02.21",
        stack: ["React"],
        thumbnail: "/muinus/thumbnail.jpg",
    },
    {
        slug: "soonamu",
        title: "수나무",
        summary: "난산증 어린이를 위한 교육 앱",
        period: "25.02.24 ~ 25.05.22",
        stack: ["Flutter"],
        thumbnail: "/soonamu/1.png",
    },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProject(slug: ProjectSlug): Project {
    return projects.find((project) => project.slug === slug)!;
}
