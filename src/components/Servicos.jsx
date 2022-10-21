import React from "react"

function Servicos() {
    return (
        <section className="container-md pt" id="servicos">
            <div className="row justify-content-center">
                <h1 className="col-12 text-light text-center">Todos meus <span className="text-primary">seviços</span></h1>
            </div>
            <div className="row mt-md-3 m-auto" >
                <div className="col-12 col-md-4 text-light mt-md-0 mt-3" >
                    <div class="card bg-dark h-100" >
                        <div class="card-body border-bottom border-start border-primary rounded text-center">
                            <h5 class="card-title">Desenvolvimento de sites</h5>
                            <p class="card-text">Você precisa de um Site pessoal, landing page ou algo do tipo? É so me mandar algumas inpiraçoes ou ideia de desing que eu crio um Site para você.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-light mt-md-0 mt-3">
                    <div class="card bg-dark h-100" >
                        <div class="card-body border-bottom border-start border-primary rounded text-center">
                            <h5 class="card-title">Professor de programaçao</h5>
                            <p class="card-text">Quer aprender a programar, mas não sabe nada sobre programação? Posso te ensinar linguagens como Python e JavaScript.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-light mt-md-0 mt-3">
                    <div class="card bg-dark h-100" >
                        <div class="card-body border-bottom border-start border-primary rounded text-center">
                            <h5 class="card-title">Professor de desenvolvimento web</h5>
                            <p class="card-text">Tem vontade de aprender a desenvolver Web Sites? Eu te ajudo desde seu ponto de partida até um nível avançado.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 m-auto">
                <div className="col-12 col-md-6 text-light mt-md-0 mt-3">
                    <div class="card bg-dark h-100" >
                        <div class="card-body border-bottom border-start border-primary rounded text-center">
                            <h5 class="card-title ">Desenvolvedor frontend</h5>
                            <p class="card-text px-5">Já tem um design? E só mandar para mim que eu crio todo o código por Traz.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-light mt-md-0 mt-3">
                    <div class="card bg-dark h-100" >
                        <div class="card-body border-bottom border-start border-primary rounded text-center">
                            <h5 class="card-title">Revisão e melhoria de Sites</h5>
                            <p class="card-text px-5">Já tem um Site, mas precisa de um repaginada? Só me mandar os arquivos que eu refaço oque tiver que ser refeito. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicos