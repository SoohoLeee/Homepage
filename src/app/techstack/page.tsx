export default function techstackPage() {
    return(
        <div className="min-h-screen p-6 select-none flex flex-col">
            {/* About 제목과 구분선 */}
            <div className="mb-4">
                <h1 className="text-6xl font-bold mb-4">Tech Stack</h1>
                <hr className="border-white border-2" />
            </div>

            {/* 기술 스택 그리드 - 중앙 정렬 */}
            <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {/* JavaScript */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 border-4 border-white rounded-lg flex items-center justify-center">
                            <img src={"/icon/NoBg_JS2.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">JavaScript</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>

                    {/* TypeScript */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 border-4 border-white rounded-lg flex items-center justify-center">
                            <img src={"/icon/NoBg_TS2.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">TypeScript</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>

                    {/* React */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src={"/icon/NoBg_React.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">React</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>

                    {/* Dart */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src={"/icon/NoBg_Dart.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">Dart</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>

                    {/* Flutter */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src={"/icon/NoBg_Flutter2.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">Flutter</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>

                    {/* Figma */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src={"/icon/NoBg_Figma2.png"}/>
                        </div>
                        <h3 className="text-xl font-semibold">Figma</h3>
                        <div className="flex space-x-1">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
