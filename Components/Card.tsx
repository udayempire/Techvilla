interface cardProps {
    title: string,
    desc: string
}
export const Card = ({ title, desc }: cardProps) => {
    return <div className="w-96 h-72 border rounded-lg p-4 backdrop-blur-2xl drop-shadow-lg shadow-white">
        <div className="flex flex-col gap-4">
            <p className="font-semibold text-center">{title}</p>
            <p className="text-left">{desc}</p>
        </div>
    </div>

}