export default function Container({ children }) {
    return (
        <div className="w-full h-full flex justify-center px-8 border-solid">
            <div className="w-full max-w-6xl">{children}</div>
        </div>
    );
}
