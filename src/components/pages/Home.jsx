import styles from './Home.module.css'
import img_home from '../../img/img1.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span>Controla Custos</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={img_home} alt="img home" />
        </section>
    )
}

export default Home;