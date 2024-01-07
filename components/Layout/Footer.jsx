export default function Footer() {
    return (
        <footer id="footer" className="border-t border-[#dedede]">
            <div className="flex flex-col items-center justify-center py-10">
                <div className="flex flex-col items-center justify-center w-full max-w-2xl">
                    <div className="flex flex-col items-center justify-center w-full max-w-2xl">
                        <h1 className="text-2xl font-semibold text-center text-gray-900">
                            Get in touch
                        </h1>
                        <p className="text-base font-medium text-center text-gray-600">
                            We'd love to hear from you!
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-2xl mt-5">
                        <a className="flex items-center justify-center w-full max-w-xs px-4 py-2 text-base font-medium text-center text-white bg-[#2e2e2e] rounded-md hover:bg-[#3e3e3e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
