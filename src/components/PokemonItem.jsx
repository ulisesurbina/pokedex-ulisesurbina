import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const PokemonItem = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then((res) => setPokemon(res.data))
    }, [])

    // console.log(pokemon)

    const colors = [
        { id: "bug",
            color: "linear-gradient(135deg, green, rgb(8, 230, 8))"
        }, {
          id: "dark",
             color: "linear-gradient(135deg, black, rgb(1, 1, 39))"
        }, {
          id: "dragon",
             color: "linear-gradient(135deg,gold , rgb(218, 185, 0))"
        }, {
          id: "electric",
            color: "linear-gradient(135deg, yellow, orange)"
        }, {
          id: "fairy",
            color: "linear-gradient(135deg, pink, rgb(255, 78, 107))"
        }, {
          id: "fighting",
             color: "linear-gradient(135deg, rosybrown, rgb(100, 64, 64))"
        }, {
          id: "fire",
            color: "linear-gradient(135deg, red, yellow)"
        }, {
          id: "flying",
             color: "linear-gradient(135deg, silver, rgb(218, 218, 218)"
        }, {
          id: "ghost",
             color: "linear-gradient(135deg, midnightblue, rgb(28, 28, 80))"
        }, {
          id: "grass",
             color: "linear-gradient(135deg, rgb(107, 233, 107), rgb(8, 230, 8))"
        }, {
          id: "ground",
             color: "linear-gradient(135deg, brown, rgb(82, 17, 17))"
        }, {
          id: "ice",
             color: "linear-gradient(135deg, rgb(73, 73, 199), rgb(62, 62, 255))"
        }, {
          id: "normal",
             color: "linear-gradient(135deg, grey, rgb(247, 241, 241))"
        }, {
          id: "poison",
             color: "linear-gradient(135deg, rgb(0, 0, 92), rgb(16, 95, 0))"
        }, {
          id: "psychic",
             color: "linear-gradient(135deg, yellow, gold)"
        }, {
          id: "rock",
             color: "linear-gradient(135deg, brown, rgb(112, 99, 99))"
        }, {
          id: "steel",
             color: "linear-gradient(135deg, rgb(112, 112, 112), rgb(88, 87, 87))"
        }, {
          id: "water",
             color: "linear-gradient(135deg, blue, rgb(42, 42, 214)"
        }
]

const setColor = () => {
    for(let i in colors) {
        if(colors[i].id === pokemon.types?.[0].type.name) {
            return colors[i].color
        }
    }
}

    return (
        <div className="Container" onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className="PokemonCard" >
                <div className='ImgContainer' style={{background: setColor()}}>
                    <img src={pokemon.sprites?.other.home.front_default} alt=""/>
                </div>
                <div className="Content">
                    <h2><b>{pokemon.name}</b></h2>
                    <h6><b>Types:</b> {pokemon.types?.[0].type.name},</h6>
                    <h6>{pokemon.types?.[1]?.type.name}</h6>
                    <h6><b>HP:</b> {pokemon.stats?.[0].base_stat}</h6>
                    <h6><b>Atack:</b> {pokemon.stats?.[1].base_stat}</h6>
                    <h6><b>Defense:</b> {pokemon.stats?.[2].base_stat}</h6>
                    <h6><b>Speed:</b> {pokemon.stats?.[5].base_stat}</h6>
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;