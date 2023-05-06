import Image from "next/image";


const LytDefault = ({ children }: { children: JSX.Element[] }) => (
    <div className="lyt__default">
        <header className="lyt__default-header">
            <div className="lyt__default-header_container">
                <div className="lyt__default-header_logo">
                    <Image 
                        alt="logo"
                        width={120}
                        height={42}
                        src="/assets/img/logo-light.png"
                    />
                </div>
                <div className="lyt__default-header_content">
                    {children[0]}
                </div>
            </div>
        </header>
        <main className="lyt__default-main">
            {children[1]}
        </main>
    </div>
);

export default LytDefault;