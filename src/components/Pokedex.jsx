import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import ReactPaginate from 'react-paginate';

const Pokedex = ({ pokemonsPerPage }) => {

    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const user = useSelector(state => state.user)

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState("")
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154/")
            .then(res => {
                const { data: { results: pokemonsResponse } } = res
                setPokemons(pokemonsResponse)
                setPageCount(Math.ceil(pokemonsResponse.length / pokemonsPerPage))
                const endOffset = itemOffset + pokemonsPerPage;
                setCurrentItems(pokemonsResponse.slice(itemOffset, endOffset))
                console.log("pageCount", pageCount)
                console.log("pokemonsPerPage", pokemonsPerPage)
                console.log("pokemons", pokemonsResponse)
                console.log("endOffSet", endOffset)
                console.log("itemOffset", itemOffset)
            });

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setTypes(res.data.results))
        console.log(pageCount)
    }, [])


    useEffect(() => {
        // Paginado
        const endOffset = itemOffset + pokemonsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(pokemons.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pokemons.length / pokemonsPerPage));
    }, [itemOffset, pokemonsPerPage, pokemons]);

    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154/
    //https://pokeapi.co/api/v2/pokemon/

    // console.log(pokemons)

    const Items = ({ currentItems }) => {
        return (
            <ul className="GeneralContainer">
                {currentItems &&
                    currentItems.map((pokemon) => (
                        <div key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                            <PokemonItem
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                        </div>
                    ))}
            </ul>
        );
    }
    const handlePageClick = (event) => {
        const newOffset = (event.selected * pokemonsPerPage) % pokemons.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    // console.log(types)

    const search = (e) => {
        e.preventDefault()
        // alert(pokemonSearch)
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterType = (e) => {
        // alert("Select a type" + " " + e.target.value)
        e.preventDefault()
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }


    return (
        <div>
            <div className="TextPokedex">
                <h1>Pokedex</h1>
                <p>Welcome <b>{user}</b> this is your Pokedex</p>
            </div>
            <form onSubmit={search} className="SearchPokemon">
                <input
                    placeholder='Type a Pokemon name'
                    type="text"
                    value={pokemonSearch}
                    onChange={e => setPokemonSearch(e.target.value)} />
                <button>Search</button>
            </form>

            <select onChange={filterType} className="SearchType">
                <option value="">Select a type</option>
                {
                    types.map((type) => (
                        <option value={type.url} key={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>

            <Items currentItems={currentItems} />
            {/* <ul className="GeneralContainer">
                {
                    pokemons.map((pokemon) => (
                        <div key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                            <PokemonItem
                                pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                        </div>
                    ))
                }
            </ul> */}
            <div className="Paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default Pokedex;

