export default function SectionHead({children}) {
    return (
        <div className="py-4 border-b border-yellow-400 flex justify-between">
            <h2 className="relative py-1 px-2 text-3xl font-medium text-white after:w-[3px] after:h-full after:content-[''] after:bg-primary after:absolute after:top-0 after:left-0">{children}</h2>
        </div>
    )
}