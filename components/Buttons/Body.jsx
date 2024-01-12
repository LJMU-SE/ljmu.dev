export default function BodyButton({ children, onClick, ...args }) {
    const type = args.type || "button";
    const width = args.width || "w-max";
    const bg = args.bg || "bg-black";
    const text = args.text || "text-white";

    return (
        <button
            onClick={onClick}
            type={type}
            className={`flex items-center justify-center ${width} px-5 py-2 text-base text-center ${bg} ${text} rounded-md hover:opacity-70 transition-all`}
        >
            {children}
        </button>
    );
}
