import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";

import Card from "../component/Card";
import { Context } from "../store/appContext";

// import swapi from "../services/swapi";

export const Home = () => {

  const { store, setStore, actions } = useContext(Context);



  useEffect(() => {

    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();


  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Characters</h2>
          <div className="d-flex flex-nowrap overflow-auto">
            {store.characters && store.characters.map((character, index) => {
              return <Card key={character.uid} character={character} index={index} />
            }
            )}
          </div>
        </div>
        <div className="row mt-4">
          <h2>Planets</h2>
          <div className="d-flex flex-nowrap overflow-auto">
            {store.planets && store.planets.map((planet, index) => {
              return <Card key={planet.uid} planet={planet} index={index} />
            }
            )}
          </div>
        </div>
        <div className="row mt-4">
          <h2>Vehicles</h2>
          <div className="d-flex flex-nowrap overflow-auto">
            {store.vehicles && store.vehicles.map((vehicle, index) => {
              return <Card key={vehicle.uid} vehicle={vehicle} index={index} />
            }
            )}
          </div>
        </div>
      </div>
    </>

  )
};
