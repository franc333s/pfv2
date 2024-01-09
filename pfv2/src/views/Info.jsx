import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ContactInfo from "../components/contactInfo/ContactInfo";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";



function Info() {

    return (
        <>
            <header>
                <Topbar className="bg-color-black text-color-white"/>
            </header>

            <main className="topbar-offset-padding vertical-padding bg-color-black">

                <section className="info__contact">
                    <div>
                        <h1 className="p--xlarge text-color-white">Hey! I’m Marina, a frontend developer and UX/UI designer based in València (SP)</h1>
                    </div>

                    <ContactInfo className="contact-block--info-page" />
                </section>



                <section className="info__bio">
                    <h2 className="h3 text-color-white">About</h2>

                    <div className="info__bio__content">
                        <div>
                            <p className="p--medium text-color-white info__bio__content__text">I’m a very curious and active person, which has led me to do many things over the years. I was trained as a furniture designer, and during university I was part of a furniture design studio that won several awards for our first collection of products. Not only that but, I was eager to live abroad, so I moved to Belgium first and not long after to the UK, where lived and loved living there for many years. Once back in Spain, I worked as an event supervisor and marketer for a small Spanish beauty company, which made me travel quite a bit around Europe.</p>
                            <p className="p--medium text-color-white info__bio__content__text">My first contact with the digital world happened 5 years ago when I started as a designer and project manager at an agency. There, I had the opportunity to work along with other designers, web developers and marketing specialists, taking care of the design of online advertisement campaigns and managing digital projects.</p>
                            <p className="p--medium text-color-white info__bio__content__text">Currently, I develop websites in React and WordPress. Do you have a project in mind? Let’s talk!</p>
                            <div className="info__bio__content__btns">
                                <ButtonPrimary className="text-color-yellow svg-color-yellow" to="/projects" text="Check my projects"/>
                                <ButtonPrimary className="text-color-yellow svg-color-yellow" to="mailto:marinafase@gmail.com" text="Contact me"/>
                            </div>
                        </div>

                        <div className="info__bio__content__imgblock">
                            <img className="info__bio__content__img" src="/images/about/yellow-stairs-marina.webp" alt="" />
                        </div>
                    </div>
                    
                </section>
                




            </main>
            
            <Footer />

        </>
    )
}

export default Info;