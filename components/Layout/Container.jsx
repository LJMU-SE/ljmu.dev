export default function Container({ children }) {
    return (
        <div className="w-full h-full flex justify-center px-8">
            <div className="w-screen max-w-6xl">{children}</div>
        </div>
    );
}
