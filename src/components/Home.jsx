import React from "react";

function Home() {
    return (
        <section className='img-1' id="home">
            <div className="overlay"></div>
            <div className='row margin-inicial mb-2'>
                <h1 className=" col-md-4 col-10 text-primary offset-1">
                    HMRdev.
                </h1>
            </div>
            <div className="row">
                <h3 className="text-light fw-bold col-lg-5 col-10 offset-1 text-decoration-underline">
                    Programador <br />
                    Desenvolvedor Web <br />
                    Experiente no Marketing Digital
                </h3>
            </div>
        </section>
    )
}

export default Home