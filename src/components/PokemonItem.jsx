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

    return (
        <div className="Container" onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <div className="PokemonCard">
                <div className='ImgContainer'>
                    <img src={pokemon.sprites?.other.home.front_default} alt="" />
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