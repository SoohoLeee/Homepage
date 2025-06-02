import Image from "next/image";

export default function Screen2() {
    return (
        <div
        className="bg-black p-4 rounded-lg">
            <Image
                src="/screen2/1_slogan.webp"
                alt="Monitor"
                fill
                className="object-contain"
            />
        </div>
    )
}