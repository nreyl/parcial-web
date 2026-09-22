export default function BreedList() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                    </div>
                    <span className="text-lg font-semibold">Raza {index + 1}</span>
                </div>
            ))}
        </div>
    );
}