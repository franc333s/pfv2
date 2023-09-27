import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SelectedProjects from "../components/selectedProjects/SelectedProjects";
import Topbar from "../components/topbar/Topbar";

function Home() {

    return (
        <>
            <header>
                <Topbar/>
            </header>

            <main className="vertical-padding">
                <section>
                    <h1>Frontend developer with a background in digital design</h1>
                    <div>
                        <ButtonPrimary to="/projects" text="Work"/>
                        <ButtonPrimary to="/info" text="About"/>
                        <ButtonPrimary to="/projects" text="Contact"/>
                    </div>
                </section>

                <section>
                    <SelectedProjects/>
                </section>
            </main>
        </>
    )
}

export default Home;