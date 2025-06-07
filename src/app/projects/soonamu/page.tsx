import Image from "next/image";


export default function soonamuPage() {
    return(
        <div className="min-h-screen p-6 select-none flex flex-col">
            {/* About 제목과 구분선 */}
            <div className="mb-4">
                <div className= "flex items-center gap-6">
                    <h1 className="text-6xl font-bold mb-4">Project</h1>
                    <p className= "text-3xl"> 난산증 어린이들을 위한 App, 수나무. (25.02.24 ~ 25.05.22)</p>
                </div>
                <hr className="border-white border-2" />
            </div>

            {/* 본문 내용 */}
            <div className={"flex-row flex items-center gap-6"}>
                {/* text부분 */}
                <div className="flex-1 text-2xl">
                    <p className="font-bold text-3xl"> 프로젝트 개요</p>
                    <li className="pl-8">목표 : 난산증 학생을 위한 맞춤형 수학 교육 플랫폼</li>
                    <li className="pl-8">
                        배경 : BASA 프로그램의 디지털 전환을 통한 검사자<br/>
                        <span className="inline-block ml-[3.8em]"></span>
                        업무 부담 완화 및 학습 효율성 증대
                    </li>
                    <li className="pl-8">핵심 기능</li>
                    <span className= "inline-block ml-[2.8em] pt-2">
                        <table className="min-w-max table-auto border border-gray-300">
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center">숫자 인식 기능</td>
                                <td className="border px-4 py-2 text-center">통계 페이지 제공</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-center">자동 채점 및 오류 분석</td>
                                <td className="border px-4 py-2 text-center">개인별 맞춤 학습 제공</td>
                            </tr>
                            </tbody>
                        </table>
                    </span>
                    <br/><br />
                    <p className="font-bold text-3xl">담당 역할 및 기여</p>
                    <li className="pl-8">역할 : 프론트엔드 개발 리드, 발표 기획</li>
                    <li className="pl-8">기여
                        <ul>
                            <li className="pl-8">- 숫자 인식 기능 및 핵심 컴포넌트 제작</li>
                            <li className="pl-8">- 앱 디자인 총괄</li>
                        </ul>
                    </li>
                    <br/>
                    <p className="font-bold text-3xl">사용 기술/이유</p>
                    <li className="pl-8">주요 사용 기술 : Flutter</li>
                    <li className="pl-8">선택 배경</li>
                    <li className="pl-8">높은 접근성과 사용자 편의성 우선 고려</li>
                    <li className="pl-8">개발 기간을 고려한 크로스 플랫폼 선택</li>
                    <li className="pl-8">Flutter의 풍부한 커뮤니티</li>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <Image src="/soonamu/soonamu_1.png"
                           alt="수나무_1"
                           className="object-cover rounded-lg"
                    width={300}
                    height={300}/>
                </div>
            </div>

        </div>
    )
}
