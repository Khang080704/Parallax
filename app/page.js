//import system
import styles from './page.module.css';
import clsx from 'clsx';

//import component
import Header from '@/app/component/header';
import Content from '@/app/component/content';
import Background from './component/background';
import Work from './component/Work';
import Layer from './component/layer';
import Contact from './component/contact';
import Footer from './component/footer';

//import data
import { achivements } from './data/achivements';

export default function Home() {
    return (
        <Layer>
            <main style={{ position: 'relative', zIndex: 0 }}>
                <Header />
                <Background url={'https://www.w3schools.com/w3images/parallax1.jpg'}>
                    <span className={clsx(styles.title)}></span>
                </Background>
                <Content />
                <div className={clsx(styles.achivement)}>
                    {achivements.map((item, index) => {
                        return (
                            <div key={index} className={clsx(styles.acItem)}>
                                <span className={clsx(styles.acName)}>{item.quantity}+</span>
                                <br />
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                <Background url={'https://www.w3schools.com/w3images/parallax2.jpg'}>
                    <span className={clsx(styles.portfolio)}>PORTFOLIO</span>
                </Background>
                <Work />

                <Background url={'https://www.w3schools.com/w3images/parallax3.jpg'}>
                    <span className={clsx(styles.contact)}>CONTACT</span>
                </Background>

                <Contact/>
                <Footer/>
            </main>
        </Layer>
    );
}
