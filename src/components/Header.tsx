import Image from "next/image";
export default function Header() {
  return (
    <h1 className="bg-[#FF6B35] whole-screen text-white p-4">
        <div className="flex items-center justify-center">
            <Image src="/pawsome-advice-logo.png" alt="Logo" className="inline-block h-8 w-8 mr-2" width={32} height={32}/>
        </div>
    </h1>
    );
}