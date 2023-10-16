import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ContactInfo from "../components/contactInfo/contactInfo";
import SelecProjFeed from "../components/projectsHomePage/SelecProjFeed";
import Topbar from "../components/topbar/Topbar";


function Home() {

    const [ scrollStage, setScrollStage ] = useState(1);

    const [refHero, inViewHero] = useInView()
    const [refProjFeed, inViewProjFeed] = useInView({ threshold: 0.2, })
    const [refAbout, inViewAbout] = useInView({ threshold: 0.2, })
    const [refContact, inViewContact] = useInView({ threshold: 0.2, })
    //check threshold, it does not work properly

    const updateScrollStage = () => {
        if (inViewHero) {
            setScrollStage(1);
        } else if (inViewProjFeed) {
            setScrollStage(2);
        } else if (inViewAbout) {
            setScrollStage(3);
        } else {
            setScrollStage(4);
        }
    }

    useEffect(() => {
        updateScrollStage();
    }, [inViewHero, inViewProjFeed, inViewAbout, inViewContact]);

    return (
        <>
            <header>
                <Topbar scrollStage={scrollStage}/>
            </header>

            <main className={`vertical-padding topbar-offset-padding stage${scrollStage}`}>

                <section className="home-hero" ref={refHero}>
                    <h1 className="home-hero__title">Frontend developer with a background in digital design</h1>
                    <div className="home-hero__links">
                        <ButtonPrimary className="home-hero__links__item" to="/projects" text="Work"/>
                        <ButtonPrimary className="home-hero__links__item" to="/info" text="About"/>
                        <ButtonPrimary className="home-hero__links__item" to="/projects" text="Contact"/>
                    </div>
                </section>

                
                <section className="home-selec-proj" ref={refProjFeed}>
                    <SelecProjFeed />
                </section>

                <section className="home-about" ref={refAbout}>
                    <h3 className="home-about__title">About</h3>
                    <p className="h1">I am Marina, a junior frontend developer passionate about desinging and coding clean and straightforward digital solutions with an edge.</p>
                    <ButtonPrimary className="home-about__btn text-color-yellow svg-color-yellow" to="/info" text="Check + info" />
                </section>

                <section ref={refContact}>
                    <div className="home-contact">
                        <h3>Contact</h3>
                        <ContactInfo/>
                    </div>
                    <div className="home-copyright">
                        <p className="p--small-fixed">&#169;Marina Francés 2023</p>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Home;