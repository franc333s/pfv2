import { useState, useEffect } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ContactBlock from "../components/contactBlock/ContactBlock";
import SelectedProjects from "../components/selectedProjects/SelectedProjects";
import Topbar from "../components/topbar/Topbar";


function Home() {

    const [ scrollStage, setScrollStage ] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;

            if (scrollY < 450) {
                setScrollStage(1);
            } else if (scrollY < 1400) {
                setScrollStage(2);
            } else if (scrollY < 2200) {
                setScrollStage(3);
            } else {
                setScrollStage(4);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header>
                <Topbar scrollStage={scrollStage}/>
            </header>

            <main className={`vertical-padding stage${scrollStage}`}>

                <section className="home-hero">
                    <h1 className="home-hero__title">Frontend developer with a background in digital design</h1>
                    <div className="home-hero__links">
                        <ButtonPrimary className="home-hero__links__item" to="/projects" text="Work"/>
                        <ButtonPrimary className="home-hero__links__item" to="/info" text="About"/>
                        <ButtonPrimary className="home-hero__links__item" to="/projects" text="Contact"/>
                    </div>
                </section>

                <SelectedProjects/>

                <section className="home-about">
                    <h3 className="home-about__title">About</h3>
                    <p className="h1">I am Marina, a junior frontend developer passionate about desinging and coding clean and straightforward digital solutions with an edge.</p>
                    <ButtonPrimary className="home-about__btn" to="/info" text="Check + info" />
                </section>

                <section>
                    <div className="home-contact">
                        <h3>Contact</h3>
                        <ContactBlock/>
                    </div>
                    <div className="home-copyright">
                        <p className="copyright-text">&#169;Marina Francés 2023</p>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Home;