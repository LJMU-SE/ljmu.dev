export default function BodyButton({ children, onClick, ...args }) {
    const type = args.type || "button";
    const width = args.width || "w-max";
    const bg = args.bg || "bg-black";
    const text = args.text || "text-white";
    const rounded = args.rounded || "rounded-md";
    const ref = args.btnRef || null;

    return (
        <button
            ref={ref}
            onClick={onClick}
            type={type}
            className={`flex items-center justify-center ${width} px-5 py-2 text-base text-center ${bg} ${text} ${rounded} hover:opacity-70 transition-all`}
        >
            {children}
        </button>
    );
}
