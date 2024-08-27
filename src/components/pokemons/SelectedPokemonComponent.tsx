import React, {FC} from 'react';
import AbilitiesComponent from "../pokemon/AbilitiesComponent";
import StatsComponent from "../pokemon/StatsComponent";
import TypesComponent from "../pokemon/TypesComponent";
import AddPokemonToFavouritesButton from "../buttons/AddPokemonToFavouritesButton";
import {IPokemonDetails} from "../../interfaces/IPokemonDetails";
import FormsComponent from "../forms/FormsComponent";

interface IProps {
    selectedPokemon: IPokemonDetails;
    id: number;
}

const SelectedPokemonComponent: FC<IProps> = ({id, selectedPokemon}) => {
    return (
        <div className="container d-flex w-50 justify-content-evenly border border-danger-subtle border-2 p-4">
            <div>
                <div className="d-flex flex-column align-items-center">
                    <AddPokemonToFavouritesButton name={selectedPokemon.name} id={id}/>
                    <img className="w-75" src={selectedPokemon.sprites.front_shiny} alt={selectedPokemon.name}/>
                </div>
                <TypesComponent types={selectedPokemon.types}/>
                <FormsComponent id={id} forms={selectedPokemon.forms}/>
            </div>
            <div className="d-flex flex-column align-items-center">
                <StatsComponent stats={selectedPokemon.stats}/>
                <AbilitiesComponent abilities={selectedPokemon.abilities}/>
            </div>
        </div>
    );
};

export default SelectedPokemonComponent;