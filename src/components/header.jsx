import React from "react";



function Header() {
    window.addEventListener('scroll', () => {
        document.querySelector(".menu").classList.toggle('active-scroll', window.scrollY > 100)
    })
    return (
        <>
            <header className="menu container-fluid position-fixed" id="menu">
                <nav className="navbar navbar-expand-lg  ">
                    <div className="container">
                        <a className="navbar-brand logo-menu" id="title-menu" href="#main">
                            Portifólio Cassio
                        </a>
                        <button className="navbar-toggler" id="btn-navbar btn-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon icon-branco"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link " href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contato</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header