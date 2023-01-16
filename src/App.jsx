import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import LocationInfo from "./components/LocationInfo";
import Logo from "./assets/logo.png";
import CardResident from "./components/CardResident";
import Footer from "./components/Footer";

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
        <img className="imgDiv" src={Logo} alt="Logo de Rick & Morty" />
      </div>
      <LocationInfo location={location} />
      <div className="divCardContainer">
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
