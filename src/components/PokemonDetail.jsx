import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PokemonDetail = () => {

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
                <div className="ReturnButton">
                    <button onClick={() => navigate(-1)}><i className="fa-solid fa-circle-left"></i></button>
                </div>
                <div className="GeneralColumns">
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
                                <h3>Abilities: <span>{character.abilities?.[0].ability.name}/</span></h3>
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
                    </div>
                    <div className="TitleMovements">
                        <h2>Movements</h2>
                        <div className='Movements'>
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
            </div>
        </div>
    );
};

export default PokemonDetail;

// {
//     type == "bug"
//       ? "bug"
//       : type == "dark"
//       ? "dark"
//       : type == "dragon"
//       ? "dragon"
//       : type == "electric"
//       ? "electric"
//       : type == "fairy"
//       ? "fairy"
//       : type == "fighting"
//       ? "fighting"
//       : type == "fire"
//       ? "fire"
//       : type == "flying"
//       ? "flying"
//       : type == "ghost"
//       ? "ghost"
//       : type == "grass"
//       ? "grass"
//       : type == "ground"
//       ? "ground"
//       : type == "ice"
//       ? "ice"
//       : type == "normal"
//       ? "normal"
//       : type == "poison"
//       ? "poison"
//       : type == "psychic"
//       ? "psychic"
//       : type == "rock"
//       ? "rock"
//       : type == "steel"
//       ? "steel"
//       : "water";
//   }
  
  
  
  
  
//   16:35
//   .bug {
//     background: linear-gradient(135deg, green, rgb(8, 230, 8));
//   }
//   .dark {
//      background: linear-gradient(135deg, black, rgb(1, 1, 39));
//   }
//   .dragon {
//      background: linear-gradient(135deg,gold , rgb(218, 185, 0));
//   }
//   .electric {
//      background: linear-gradient(135deg, yellow, orange);
//   }
//   .fairy {
//      background: linear-gradient(135deg, pink, rgb(255, 78, 107));
//   }
//   .fighting {
//      background: linear-gradient(135deg, rosybrown, rgb(100, 64, 64));
//   }
//   .fire {
//     background: linear-gradient(135deg, red, yellow);
//   }
//   .flying {
//      background: linear-gradient(135deg, silver, rgb(218, 218, 218));
//   }
//   .ghost {
//      background: linear-gradient(135deg, midnightblue, rgb(28, 28, 80));
//   }
//   .grass {
//      background: linear-gradient(135deg, rgb(107, 233, 107), rgb(8, 230, 8));
//   }
//   .ground {
//      background: linear-gradient(135deg, brown, rgb(82, 17, 17));
//   }
//   .ice {
//      background: linear-gradient(135deg, rgb(73, 73, 199), rgb(62, 62, 255));
//   }
//   .normal {
//      background: linear-gradient(135deg, grey, rgb(247, 241, 241));
//   }
//   .poison {
//      background: linear-gradient(135deg, rgb(0, 0, 92), rgb(16, 95, 0));
//   }
//   .psychic {
//      background: linear-gradient(135deg, yellow, gold);
//   }
//   .rock {
//      background: linear-gradient(135deg, brown, rgb(112, 99, 99));
//   }
//   .steel {
//      background: linear-gradient(135deg, rgb(112, 112, 112), rgb(88, 87, 87));
//   }
//   .water {
//      background: linear-gradient(135deg, blue, rgb(42, 42, 214));
//   }