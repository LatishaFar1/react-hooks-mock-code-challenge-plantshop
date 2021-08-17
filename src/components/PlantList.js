import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  return (
    <ul className="cards">{
      plants.map(plant => {
      return <PlantCard key={plant.id} image={plant.image} name={plant.name}
      plants={plants} price={plant.price} setPlants={setPlants} />
      })
    }</ul>
  );
}

export default PlantList;
