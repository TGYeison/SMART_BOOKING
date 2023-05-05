import Image from "next/image";

const LytAuth = ({ children, title }: { children: JSX.Element, title:string }) => (
    <div className="lyt__default">
        <div className="lyt__auth">
            <div className="lyt__auth-panel">
                <div className="lyt__auth-container_bg">
                    <Image
                        width={450}
                        height={600}
                        alt="Login"
                        src="/assets/img/bg_auth.jpg"
                        className="lyt__auth-image"
                    />
                </div>
                <div className="lyt__auth-container_content">
                    <header className="lyt__auth-header">
                        <div className="lyt__auth-logo">
                            <Image
                                width={250}
                                height={80}
                                alt="Login"
                                src="/assets/img/logo.png"
                                className="lyt__auth-image"
                            />
                        </div>
                        <div className="lyt__auth-text">
                            <h2 className="lyt__auth-text_title">{title}</h2>
                            <p className="lyt__auth-text_description">
                                Encuentra tu hotel ideal
                            </p>
                        </div>
                        <div className="lyt__auth-separator"></div>
                    </header>
                    <main className="lyt__auth-main">
                        <div className="lyt__auth-form">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
);

export default LytAuth;