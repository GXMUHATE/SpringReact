import logo from "../../assets/img/Tsutsuma.png"
import "./styles.css"

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="" width="200" />
                <h1>Tsutsuma Service</h1>
                <p>Desenvolvido por <a href="https://twitter.com/gracanemuhate">Graçane Muhate</a>!</p>
            </div>
        </header>
    )
}

export default Header