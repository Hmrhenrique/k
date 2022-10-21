import React from "react"

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-navbar fs-5 fixed-top">
                <div className="container-fluid">
                    <span className="navbar-brand text-primary fw-bold fs-4 me-5">HMRdev. |</span>
                    <button className="navbar-toggler btn btn-dark active" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold" href="#sobre">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold" href="#porqueterumwebsite">Pensa em ter um Site?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold" href="#servicos">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold" href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
