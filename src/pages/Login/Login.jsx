import "./Login.css";

import Logo from "../../components/Logo/Logo";
import AuthCard from "../../components/AuthCard/AuthCard";


function Login() {
    return (
        <main className="login-page">

            <header className="login-header">
                <Logo />
            </header>


            <section className="login-content">

                <AuthCard />

            </section>

        </main>
    );
}

export default Login;