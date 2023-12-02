import React, { useState } from "react";
import '../assets/css/style.css'
import Styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Logindiv = Styled.div`
    height: 100vh;
    width: 100vw;
`
const Loginform = Styled.form`
    width: 20%;
    @media(max-width: 425px){
        width: 100%;
    }
`
const Logintitle = Styled.h1`
    font-size: 2.9rem;
    font-weight: 800;
    @media(max-width: 425px){
        font-size: 2.5rem;
    }
`
const Loginbtn = Styled.button`
    width: 100%;
`

function Login() {

    const [formData, setFormData] = useState({
        "username": "",
        "email": "",
        "password": "",
        "cpassword": ""
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)

    function sendRegister(e) {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}
        if (formData.username === "" || formData.username === null) {
            isvalid = false
            validationErrors.username = "Secção username em branco"
        }
        if (formData.email === "" || formData.email === null) {
            isvalid = false
            validationErrors.email = "Secção email em branco"

        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false
            validationErrors.password = "Secção senha em branco"

        } else if (formData.password.length < 8) {
            isvalid = false
            validationErrors.password = "Senha menor que 8 caractéres"
            
        }
        if (formData.cpassword !== formData.password) {
            isvalid = false
            validationErrors.cpassword = "senhas não correspondem"
        }
        setErrors(validationErrors)
        setValid(isvalid)
        console.log(formData)

        if (Object.keys(validationErrors).length === 0) {
            axios.post('https://db-meuportifolio.vercel.app/users', formData)
                .then(result => {
                    alert("Registro feito com sucesso")
                    navigate("/")
                })
                .catch(err =>{
                    console.log(err)
                    navigate("/")
                } )
        }

    }

    return (
        <>
            <Logindiv className="d-flex flex-column justify-content-center align-items-center p-4">
                <Loginform className="align-self-center" onSubmit={sendRegister}>
                    <Logintitle className="mb-5">Registre-se</Logintitle>
                    <div className="mb-3">
                        <label forhtml="username" className="form-label">Nome de Usuário</label>
                        <input
                            autoComplete="give-name"
                            type="username"
                            className="form-control"
                            // id="username"
                            name="username"
                            onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                        />

                    </div>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email</label>
                        <input
                            autoComplete="email"
                            type="email"
                            className="form-control"
                            // id="email"
                            name="email"
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        />

                    </div>
                    <div className="mb-3">
                        <label
                            forhtml="senha"
                            className="form-label">Senha</label>
                        <input
                            autoComplete="new-password"
                            type="password"
                            className="form-control"
                            // id="password"
                            name="password"
                            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            forhtml="senha"
                            className="form-label">Confirme Senha</label>
                        <input
                            autoComplete="new-password"
                            type="password"
                            className="form-control"
                            // id="cpassword"
                            name="cpassword"
                            onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })}
                        />
                    </div>
                    {
                        valid ? <></> :
                            <span className="text-danger">
                                {errors.username} <br />
                                {errors.email} <br />
                                {errors.password} <br />
                                {errors.cpassword}
                            </span>
                    }
                    {/* <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                    <Loginbtn
                        type="submit"
                        className="btn btn-primary mt-5">
                        Registrar
                    </Loginbtn>
                    <div className="mt-3 d-flex justify-content-center">
                        <span className="text-center">Já tem uma conta?</span>
                    </div>
                    <Link to="/">
                        <Loginbtn className="btn btn-primary mt-3">
                            Faça seu login
                        </Loginbtn>
                    </Link>
                </Loginform>

            </Logindiv>
        </>
    )

}








export default Login