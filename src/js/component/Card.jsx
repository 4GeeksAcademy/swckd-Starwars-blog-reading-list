import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({ character, planet, vehicle, favs, index }) => {
    const { store, actions } = useContext(Context);
    const [isClicked, setIsClicked] = useState(false);

    const handleToggleFavs = (name) => {
        setIsClicked(!isClicked);

        actions.toggleFavs(name, store);
    }
    return (
        <div className="card px-0 mx-1 mt-2" style={{ flex: '0 0 250px', width: '18rem' }}>
            <img src="https://via.assets.so/img.jpg?w=400&h=150&tc=&bg=#cecece&t=placeholder" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {character && <div>{character.name} </div>}
                    {planet && <div> {planet.name} </div>}
                    {vehicle && <div>{vehicle.name} </div>}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {character && <div><b>Gender:</b> {character.gender} </div>}
                        {planet && <div><b>Rotation period:</b> {planet.rotation_period} </div>}
                        {vehicle && <div><b>Model:</b> {vehicle.model} </div>}
                    </li>
                    <li className="list-group-item">
                        {character && <div><b>Hair Color:</b> {character.hair_color} </div>}
                        {planet && <div><b>Orbital Period:</b> {planet.orbital_period} </div>}
                        {vehicle && <div><b>Cost:</b> {vehicle.cost_in_credits} </div>}
                    </li>
                    <li className="list-group-item">
                        {character && <div><b>Eye Color:</b> {character.eye_color} </div>}
                        {planet && <div><b>Diameter:</b> {planet.diameter} </div>}
                        {vehicle && <div><b>Manufacturer:</b> {vehicle.manufacturer} </div>}
                    </li>
                </ul>
                {character && <Link to={`/people/${index + 1}`} className="btn btn-primary">Learn more</Link>}
                {planet && <Link to={`/planets/${index + 1}`} className="btn btn-primary">Learn more</Link>}
                {vehicle && <Link to={`/vehicles/${index + 4}`} className="btn btn-primary">Learn more</Link>}

                {character && <button className="btn ms-auto" onClick={() => handleToggleFavs(character.name)} >{isClicked ? '❤️' : '🤍'}</button>}
                {planet && <button className="btn ms-auto" onClick={() => handleToggleFavs(planet.name)}>{isClicked ? '❤️' : '🤍'}</button>}
                {vehicle && <button className="btn ms-auto" onClick={() => handleToggleFavs(vehicle.name)}>{isClicked ? '❤️' : '🤍'}</button>}



            </div>
        </div>
    );
}

export default Card;
