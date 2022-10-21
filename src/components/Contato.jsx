import React from "react"

function Contato(){
    return(
        <section className="container-md pt mb-5" id="contato">
            <div className="row">
                <h1 className="col-12 text-light text-center">Entre em <span className="text-primary">contato</span>:</h1>
            </div>
            <div className="row mt-5">
                <p className="col-12 text-light text-center">se quiser me contatar, estou quase sempre online ;)</p>
            </div>
            <div className="row mt-1">
                <h3 className="col-12 text-light text-center">Envie uma mensagem</h3>
                <h5 className="col-12 text-light text-center">WhatsApp: 35 999081983</h5>
                <h5 className="col-12 text-light text-center">Instagram: @HMRHenrique</h5>
                <p className="col-12 text-light text-center mt-5">© Copyright 2022.</p>
            </div>
        </section>
    )
}

export default Contato