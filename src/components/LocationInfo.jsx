import React from "react";

function LocationInfo({ location }) {
  console.log(location);

  return (
    <article className="">
      <h2>Location Info</h2>
      <h3>Name: {location?.name}</h3>
      <p>Type: {location?.type}</p>
      <p>Dimension: {location?.dimension}</p>
      <p>Population: {location?.residents.length}</p>
    </article>
  );
}

export default LocationInfo;
