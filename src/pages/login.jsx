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
        "email": "",
        "password": ""
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)

    function sendLogin(e) {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}
        if (formData.email === "" || formData.email === null) {
            isvalid = false
            validationErrors.username = "Secção username em branco"
            console.log(validationErrors.username)
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false
            validationErrors.email = "Secção senha em branco"
            console.log(validationErrors.email)

        }
        
        setErrors(validationErrors)
        setValid(isvalid)

        axios.get('https://db-meuportifolio.vercel.app/users')
        .then(result => {
                result.data.map(user => {
                    console.log("teste")
                    if (user.email === formData.email && user.password === formData.password) {
                        sessionStorage.setItem('logado', true);
                        navigate('/Portifolio-Cassio-Valezzi')
                        return(useState)
                    }
                    else if (user.email !== formData.email && user.password !== formData.password) {
                        alert("senha e email errados")
                        return(useState)
                        
                    }
                    else if (user.email !== formData.email) {
                        alert("email errado")
                        return(useState)
                    }
                    else if (user.password !== formData.password) {
                        alert("senha errada")
                        return(useState)
                    }
                })
            })
            .catch(err => console.log(err))

    }


    return (
        <>
            <Logindiv className="d-flex flex-column justify-content-center align-items-center p-4">
                <Loginform className="align-self-center" onSubmit={sendLogin}>
                    <Logintitle className="mb-5">Faça seu login</Logintitle>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email</label>
                        <input
                            autoComplete="current-email"
                            type="email"
                            className="form-control"
                            // id="email"
                            name="email"
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label
                            forhtml="senha"
                            className="form-label">Senha</label>
                        <input
                            autoComplete="current-password"
                            type="password"
                            className="form-control"
                            // id="password"
                            name="password"
                            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                        />
                    </div>
                    {
                        valid ? <></> :
                        <span className="text-danger">
                            
                            {errors.email} <br />
                            {errors.password} <br />
                            
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
                        Login
                    </Loginbtn>
                    <div className="mt-3 d-flex justify-content-center">
                        <span className="text-center">Não tem uma conta?</span>
                    </div>
                    <Link to="/register">
                        <Loginbtn className="btn btn-primary mt-3">
                            Registre-se
                        </Loginbtn>
                    </Link>

                </Loginform>

            </Logindiv>
        </>
    )
}

export default Login