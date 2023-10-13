
import { useEffect } from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ContactInfo from "../components/contactInfo/ContactInfo";
import Topbar from "../components/topbar/Topbar";




function Info() {

    useEffect(() => {
        const img = document.querySelector(".info__bio__img");
    
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowWidth = window.innerWidth;

            let translateX;
                if (windowWidth > 1200) {
                    translateX = `${100 - scrollY * 0.07}%`;
                } else if (windowWidth > 960) {
                    translateX = `${100 - scrollY * 0.08}%`;
                } else if (windowWidth > 427) {
                    translateX = `${450 - scrollY * 0.2}%`;
                } else {
                    translateX = `${680 - scrollY * 0.3}%`;
                }

            img.style.transform = `translateX(${translateX})`;
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


    return (
        <>
            <header>
                <Topbar className="bg-color-green text-color-white"/>
            </header>

            <main className="topbar-offset-padding vertical-padding bg-color-green">

                <section className="info__contact">
                    <div>
                        <h1 className="p--xlarge">Hey! I’m Marina, a frontend developer.</h1>
                    </div>

                    <ContactInfo className="contact-block--info-page" />
                </section>

                <section className="info__bio">
                    <div className="info__bio__textblock" >
                        <h2 className="h3 text-color-white">About</h2>
                        <p className="p--medium text-color-white">I’m a very curious and active person which has led me to do many things over the years. I was trained as a furniture designer and during university I was part of a furniter design studio that won several awards for our first collection of products. I was eager to live abroad so I moved to Belgium first and not long after to the UK and lived and loved living there for many years. Once back in Spain I worked as an event supervisor and marketer for a small Spanish beauty company which made me travel quite a bit around Europe.</p>
                        <p className="p--medium text-color-white">My first contact with the digital world happened 5 years ago when I started as a designer and project manager at an agency. There, I had the opportunitu to work along with other designers, web developers and marketing specialists, taking care of the design of online advertisement campaigns and managing digital projects.</p>
                        <p className="p--medium text-color-white">Currently I develope websites in React and Wordpress. Do you have a project in mind? Let’s talk!</p>
                    </div>
                    <div className="info__bio__imgblock">
                        <img className="info__bio__img" src="/images/about/yellow-stairs-marina.webp" alt="" />
                        <ButtonPrimary className="text-color-yellow svg-color-yellow" to="/projects" text="Check my projects"/>
                        <ButtonPrimary className="text-color-yellow svg-color-yellow" to="/projects" text="Contact me"/>
                    </div>
                </section>

            </main>
            

        </>
    )
}

export default Info;