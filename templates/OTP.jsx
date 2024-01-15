import {
    Body,
    Container,
    Html,
    Section,
    Tailwind,
} from "@react-email/components";

export default function OTPTemplate({ otp, email, secret }) {
    return (
        <Html>
            <Body>
                <Tailwind>
                    <Container
                        key={"container"}
                        style={{ backgroundColor: "#ffffff" }}
                        className="px-3"
                    >
                        <Section
                            className="w-full p-5 flex justify-center"
                            style={{ backgroundColor: "#000000" }}
                        >
                            <a
                                href="https://www.ljmu.dev"
                                className="w-full block"
                            >
                                <img
                                    src="https://www.ljmu.dev/img/logos/white.webp"
                                    alt="SE Logo"
                                    className="max-h-10"
                                />
                            </a>
                        </Section>
                        <Section className="w-full flex justify-center py-10">
                            <h1 className="w-full">Your One-Time Password</h1>
                            <p className="w-full">
                                Hi there,
                                <br />
                                <br />
                                You recently tried to log in to{" "}
                                <a href="https://www.ljmu.dev">ljmu.dev</a>.
                                Please use the following one-time password to
                                continue to the login page.
                            </p>
                            <p className="wmy-2 text-5xl font-black w-full text-center">
                                {otp}
                            </p>
                            <p className="w-full">
                                Alternatively, click the link below, and you
                                will be automatically logged in.
                            </p>
                            <a
                                href={`https://www.ljmu.dev/auth/flow?s=${secret}&email=${email}&otp=${otp}`}
                                className="w-full"
                            >
                                https://www.ljmu.dev/auth/login?flow=s={secret}
                                &email={email}&otp={otp}
                            </a>
                            <p className="mt-3 italic opacity-75">
                                DO NOT share either of the above with anyone,
                                doing so will give them access to your account.
                            </p>
                        </Section>
                    </Container>
                </Tailwind>
            </Body>
        </Html>
    );
}
