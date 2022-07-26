import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PokemonDetail = ({ }) => {

    const [character, setCharacter] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    }, [id]);

    console.log(character)

    return (
        <div>
            <div>
                <div className="TitleContainerDetails">
                    <div className="TitleImg">
                    </div>
                    <div className="InfoDetails">
                        <img src={character.sprites?.other.home.front_default} alt="" />
                        <h4># {character.id}</h4>
                    </div>
                </div>
                <div className="BodyContainer">
                    <div>
                        <h3>Name: <span>{character.name}</span></h3>
                        <h3>HP: <span>{character.base_experience}</span></h3>
                        <h3>Abilities: <span>{character.abilities?.[0].ability.name}</span></h3>
                    </div>
                    <div className="BodyContainerInfo">
                        <h4>Weight: <span>{character.weight}</span></h4>
                        <h4>Height: <span>{character.height}</span></h4>
                        <h4><span>{character.abilities?.[1]?.ability.name}</span></h4>
                    </div>
                </div>
                <div className="TypesContainer">
                    <h2>Types:</h2>
                    <h3><span>{character.types?.[0]?.type.name}</span></h3>
                    <h3><span>{character.types?.[1]?.type.name}</span></h3>
                </div>
                <div className='StatsBase'>
                    <h2>Stats Base:</h2>
                    <h3>HP: <span>{character.stats?.[0].base_stat}</span></h3>
                    <h3>Attack: <span>{character.stats?.[1].base_stat}</span></h3>
                    <h3>Defense: <span>{character.stats?.[2].base_stat}</span></h3>
                    <h3>Special-attack: <span>{character.stats?.[3].base_stat}</span></h3>
                    <h3>Special Defense: <span>{character.stats?.[4].base_stat}</span></h3>
                    <h3>Speed: <span>{character.stats?.[5].base_stat}</span></h3>
                </div>
                <div className='Movements'>
                    <h2>Movements</h2>
                    <div className="ListMovements">
                        {
                            character.moves?.map((char) => (
                                <div key={char.move.name}>
                                    {char.move?.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;