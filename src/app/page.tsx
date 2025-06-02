"use client";
import { useRouter } from "next/navigation";


export default function Portfolio() {
    const router = useRouter();

    const handleCardClick = () => {
        router.push('/techstack');
    };


    return (
        // <div className="flex items-center justify-start gap-6 h-screen px-16 select-none">
        //     <img
        //         src="/selfie.png"
        //         alt="selfie image"
        //         className="object-boxfit rounded-lg"
        //         style={{ width: '25vw', height: '25vw' }}
        //     />
        //     <div>
        //         <h1 className="text-8xl font-bold">Hi, I'm<br/> Sooho Lee.</h1>
        //         <h2 className="text-4xl font-bold">Frontend Engineer</h2>
        //     </div>
        // </div>
        <div className="min-h-screen p-6 select-none">
            {/* About 제목과 구분선 */}
            <div className="mb-4">
                <h1 className="text-6xl font-bold mb-4">About</h1>
                <hr className="border-white border-2" />
            </div>

            {/* 소개 텍스트 */}
            <div className="mb-16">
                <p className="text-4xl font-bold leading-relaxed">
                    Backend, Frontend, Designer 를 잇는 소통의 다리,<br />
                    협업을 완성하는 프론트엔드 개발자입니다.
                </p>
            </div>

            {/* 카드 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contacts 카드 */}
                <div className="bg-black rounded-lg p-8 border border-gray-600">
                    <h2 className="text-4xl font-bold mb-8">Contacts.</h2>

                    <div className="space-y-6">
                        <div>
                            <p className="text-xl mb-2">e-mail :</p>
                            <p className="text-xl select-text">soohobiz96@<br />gmail.com</p>
                        </div>

                        <div>
                            <p className="text-xl mb-2">Phone:</p>
                            <p className="text-xl select-text">+82 010-4915-9751</p>
                        </div>
                    </div>
                </div>

                {/* Edu 카드 */}
                <div className="bg-black rounded-lg p-8 border border-gray-600">
                    <h2 className="text-4xl font-bold mb-8">Edu.</h2>

                    <div className="space-y-8">
                        <div>
                            <p className="text-xl">SSAFY 12th<br />Certificate.</p>
                        </div>

                        <div>
                            <p className="text-xl">Chung-Ang<br />University<br />Buisness<br />Administration.</p>
                        </div>
                    </div>
                </div>

                {/* Projects 카드 */}
                <div className="bg-black rounded-lg p-8 border border-gray-600 relative" style={{position: 'relative'}}>
                    <h2 className="text-4xl font-bold mb-8">Projects.</h2>

                    <div className="space-y-8">
                        <div>
                            <p className="text-xl">무인 편의점 플랫폼<br />Muinus.</p>
                        </div>

                        <div>
                            <p className="text-xl">난산증 어린이를 위한<br />교육 앱, 수나무.</p>
                        </div>
                    </div>

                    {/* 카드 내부 오른쪽 하단에 위치 */}
                    <div className="absolute bottom-4 right-4">
                        <p className="text-sm text-gray-400 transition-colors cursor-pointer">
                            click each project for more info
                        </p>
                    </div>
                </div>


                {/* tech 카드 */}
                <div className="bg-black rounded-lg p-8 border border-gray-600 relative transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 cursor-pointer"
                     style={{position: 'relative'}}
                     onClick={handleCardClick}>
                    <h2 className="text-4xl font-bold mb-8">Tech Stack.</h2>

                    {/* 카드 내부 오른쪽 하단에 위치 */}
                    <div className="absolute bottom-4 right-4">
                        <p className="text-sm text-gray-400">
                            click here for more info
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
