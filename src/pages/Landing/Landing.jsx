import "./Landing.css";

import Header from "../../components/Header/Header";

import Workflow from "../../components/Workflow/Workflow";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Pricing from "../../components/Pricing/Pricing";


function Landing() {
    return (
        <div className="landing-page">

            <Header />

            <main>

                <Hero />

                <Workflow />

                <Features />

                <About />

                <Pricing />

            </main>

            <Footer />

        </div>
    );
}


export default Landing;