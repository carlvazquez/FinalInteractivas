import React from "react";
import {Navigate} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:"",
            password:"",
            usuarios:[],
            entro:false,
            usuario:[]
        }
    }

    cargarUsuarios = () =>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(usuarios=>usuarios.json())
        .then((UsuariosRecibidos)=>{
        console.log("Usuarios Recibidos :", UsuariosRecibidos)
            this.setState({...this.state,usuarios:UsuariosRecibidos})
            
        })
    }

    componentDidMount()
    {
        this.cargarUsuarios();
    }

    
    enviarDatos = (e) =>{

        e.preventDefault();
        const{nombre,password} = this.state;
        console.log("Nombre:",nombre,"Password:",password)
        const user = this.state.usuarios.find((u)=>u.username.toLowerCase() === nombre.toLowerCase() && u.address.zipcode === password.toLowerCase())

        if(!!user){
            this.setState({
                ...this.state,
                entro:true
            })
        }
    
    }

    onChange = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value
        this.setState({state})
    }

    render() {
            const{entro} = this.state;

            if(entro)
            {
                return <Navigate to="Listar"/>
            }
        return (

            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                            <div className="form-group">
                                <label htmlFor="">Ingrese su nombre</label>
                                <input type="text" name="nombre" id="nombre" className="form-control" onChange={this.onChange} placeholder="Nombre" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">Nombre de usuario</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Ingrese su password </label>
                                <input type="text" name="password" id="password" className="form-control" onChange={this.onChange} placeholder="password" aria-describedby="helpId"/>
                                <small id="helpId" className="text-muted">password de la cuenta</small>
                            </div>

                            <div className="btn-group" role="group" aria-label="">
                                <button disabled={!this.state.usuarios.length} type="submit" className="btn btn-primary">Ingresar</button>
                            </div> 
                    </form>
                </div>
               
            </div>
            
        );
    }
}
 
export default Login;