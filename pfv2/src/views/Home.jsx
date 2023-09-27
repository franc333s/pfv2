import { useState, useEffect } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SelectedProjects from "../components/selectedProjects/SelectedProjects";
import Topbar from "../components/topbar/Topbar";

function Home() {

    const [ scrollStage, setScrollStage ] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;

            if (scrollY < 400) {
                setScrollStage(1);
            } else if (scrollY < 1200) {
                setScrollStage(2);
            } else if (scrollY < 1800) {
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

                <section>
                    <h3>About</h3>
                    <p className="h1">I am Marina, a junior frontend developer passionate about desinging and coding clean and straightforward digital solutions with an edge.</p>
                    <ButtonPrimary to="/info" text="Check + info" />
                </section>

                <section className="selected-projects">
                    <p>Contact card</p>
                    <p>Contact me at</p>
                </section>
            </main>
        </>
    )
}

export default Home;