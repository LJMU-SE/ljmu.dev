export default function BodyButton({
    children,
    onClick,
    type = "button",
    className,
}) {
    if (!className)
        className =
            "flex items-center justify-center w-max max-w-xs px-5 py-2 text-base text-center bg-black text-white rounded-md hover:opacity-70 transition-all";
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    );
}
