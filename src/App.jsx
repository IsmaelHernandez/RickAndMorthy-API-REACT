import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import Logo from "./assets/logo.png";
import CardResident from "./components/CardResident";

function App() {
  //? Obtenemos una locacion random
  const randomLocation = Math.floor(Math.random() * (126 - 1) + 1);
  const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
  const location = useFetch(URL);

  // console.log(location)

  return (
    <div className="App">
      <Header />
      <div className="divImg">
        <img src={Logo} alt="Logo de Rick & Morty" />
      </div>
      <LocationInfo location={location} />
      <div>
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
