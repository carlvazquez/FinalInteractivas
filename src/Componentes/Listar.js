import React from 'react';

class Listar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            datosCargados:false,
            pokemones:[],
        }
    }

    cargarPokemones()
    {
        fetch("https://pokeapi.co/api/v2/pokemon-species")
        .then(pokemones=>pokemones.json())
        .then((datosRecibidos)=>{

            console.log(datosRecibidos)
            this.setState({datosCargados:true,pokemones:datosRecibidos.results})
        })
        .catch(console.log)
    }

    componentDidMount()
    {
        this.cargarPokemones();
    }

    render() { 
            const{pokemones} = this.state;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre pokemon</th>
                        <th>Imagen</th>
                    </tr>

                </thead>

                <tbody>
                       {pokemones.map(p=> <tr>

                                 <td>{p.name}</td>
                                 <td>{p.url}</td>
                                 </tr>
                                 )
                      }
                        
                   
                </tbody>
            </table>
        );
    }
}
 
export default Listar;


