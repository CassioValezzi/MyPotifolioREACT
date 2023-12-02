import React from "react";
import '../assets/css/style.css'
// components
import Header from '../components/header'
import Footer from '../components/footer'
// img
import SoftSkills from '../assets/img/svg/Soft skills-bro.svg'
import Dev from '../assets/img/svg/Developer activity-amico.svg'
import EletroBuilding from '../assets/img/jpeg/eletrobuilding.com.br.jpeg'
import GeneratorPass from '../assets/img/jpeg/password_gen.jpg'

function Main() {


    return (


        <>
            <Header />
            <main className="container-fluid main-h d-flex align-items-center" id="main">
                <section className="row">
                    <div className="col-12">
                        <h1 className="">
                            <a id="main-title" href="#home">
                                cd Cassio/Portifólio<span className="underscore span-red">▍</span>
                            </a>
                        </h1>
                    </div>
                </section>
            </main>

            <section className="container mt-5 py-5" id="home">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h2 className="text-center text-md-end" id="main_title">
                            OLÁ, SOU
                            <br />
                            <span className="span-red">CASSIO VALEZZI</span> <br />
                            DESENVOLVEDOR <br /> FRONT-END
                        </h2>
                        <div className="d-flex justify-content-center justify-content-md-end mt-4">
                            <button className="col-4 btn"><a href="#about"><i className="bi bi-file-person"></i> Saber Mais</a></button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img className="img-fluid my-4" src={Dev} alt="deselvolvedor sentado" />
                    </div>
                </div>
            </section>

            <section className="container mt-5 py-5" id="about">
                <div className="row d-flex align-items-center">
                    <div className=" col-12 col-md-6 mt-4 d-flex ">
                        <img className="img-fluid mt-4" src={SoftSkills} alt="" />
                    </div>
                    <div className="col-12 col-md-6 mt-4 d-flex flex-column justify-content-center ">

                        <h2 className="mb-4 text-center text-md-start span-red">MAIS SOBRE MIM</h2>
                        <p className="text-center text-md-start">
                            Sou freelancer desde 2022 e <span className="span-red">tenho experiência prática em desenvolvimento web,
                                bem como conhecimento em Design de Interface de Usuário e Experiência do Usuário (UI/UX).</span>
                            Capaz de criar interfaces limpas e eficientes para atrair o público-alvo.
                        </p>
                        <p className="text-center text-md-start">
                            <span className="span-red">Experiência com integrações de API's em sistemas Web,</span> como criação de
                            formulários que enviam informações do público para o cliente, e sistemas de verificação de nûmeros
                            celular, ou verificação de e-mail. Atualmente, estou cursando Engenharia de Software (FIAP), para
                            aprimorar minhas habilidades.
                        </p>
                        <div className="row d-flex gap-2 justify-content-center justify-content-md-start  mt-4">
                            <button className="col-10 col-md-5 btn "><a href="#projects"><i className="bi bi-terminal"></i> Projetos</a></button>
                            <button className="col-10 col-md-5 btn "><a href="#contact"><i className="bi bi-chat-left-dots"></i> Contato</a></button>
                            <button className="col-10 col-md-5 btn "><a href="https://www.linkedin.com/in/cassio-valezzi-09a837207/"
                                target="_blank"><i className="bi bi-linkedin"></i> Linkedin</a></button>
                            <button className="col-10 col-md-5 btn "><a href="https://github.com/CassioValezzi" target="_blank"><i
                                className="bi bi-github"></i> GitHub</a></button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6"></div>
            </section>

            <section className="container mt-5 py-5" id="projects">
                <div className="row d-flex justify-content-center">
                    <h2 className="pt-3 mb-3 text-center text-md-start span-red">MEUS PROJETOS</h2>
                    <div className="row row-cols-1 row-cols-sm-2 p-4">
                        <div className="col mb-4">
                            <div className="card">
                                <img src={EletroBuilding} className="card-img-top" alt="Site Eletro Building" />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h3> Eletro Building</h3>
                                    <p>
                                        Criei um site corporativo com uma interface simples e limpa, incluindo um formulário que
                                        utiliza a API EmailJS para envio de e-mails diretos.
                                    </p>
                                    <div className="d-flex justify-content-evenly mt-4">
                                        <button className="col-5 btn"><a href="https://eletrobuilding.com.br/" target="_blank"><i
                                            className="bi bi-globe2"></i> Site</a></button>
                                        <button className="col-5 btn"><a href="https://github.com/CassioValezzi/eletrobuilding" target="_blank"><i
                                            className="bi bi-github"></i> Code</a></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card">
                                <img src="./assets/img/jpeg/password_gen.jpg" className="card-img-top" alt="aplicação de geração de senha" />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h3>Gerador de Senha</h3>
                                    <p className="card-text">Esse aplicativo foi criado para sugerir senhas fortes ao usuário.</p>
                                    <div className="d-flex justify-content-evenly mt-4">
                                        <button className="col-5  btn"><a
                                            href={GeneratorPass}
                                            target="_blank"><i className="bi bi-download"></i> Baixar </a></button>
                                        <button className="col-5 btn"><a href="https://github.com/CassioValezzi/Password-Generator"
                                            target="_blank"><i className="bi bi-github"></i> Code</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="container mt-5 pt-5" id="contact">
                <div className="row d-flex justify-content-center">
                    <h2 className="pt-3 mb-4 text-center text-md-start span-red">CONTATO</h2>
                    <div className="row p-4">
                        <div className="col-12 col-md-3 mb-4">
                            <h3>Redes Socias</h3>
                            <div className="d-flex flex-column justify-content-center mt-4">
                                <button className="col btn"><a href="https://www.linkedin.com/in/cassio-valezzi-09a837207/" target="_blank"><i
                                    className="bi bi-linkedin"></i> Linkedin</a></button>
                                <button className="col btn my-4"><a href="https://github.com/CassioValezzi" target="_blank"><i
                                    className="bi bi-github"></i> GitHub</a></button>
                                <button className="col btn "><a href=""><i className="bi bi-whatsapp"></i> Whatsapp</a></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column justify-content-center mb-4">
                            <h3 className="text-center">OU</h3>
                        </div>
                        <div className="col-12 col-md-7 mb-4">
                            <h3 className="mb-4 text-center text-md-start span-red">Mande uma mensagem</h3>
                            <form id="contact-form">
                                <div className="mb-3">
                                    <label for="from_name" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="from_name" name="from_name"
                                        placeholder="Exemplo: Fulano de Tal" />
                                </div>
                                <div className="mb-3">
                                    <label for="cel" className="form-label">Celular</label>
                                    <input type="text" className="form-control" id="cel" name="cel" placeholder="Exemplo: +551199822-2238" />
                                </div>
                                <div className="mb-3">
                                    <label for="reply_to" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="reply_to" name="reply_to"
                                        placeholder="Exemplo: nome@exemplo.com" />
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="message" rows="3" name="message"
                                        placeholder="Escreva sua mensagem aqui!"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" id="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Main