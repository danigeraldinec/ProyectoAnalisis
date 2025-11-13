import React, { useState } from "react";
import MapaView from "./MapaView";
import RouteForm from "./RouteForm";
import "./MapaView.css";
import "./RouteForm.css";
import "../index.css"; // o App.css si lo tienes ahí

export default function HomeMapa() {
  const [route, setRoute] = useState(null);

  return (
    <div className="app-container">
      <h1></h1>
      <RouteForm onSelectRoute={(origen, destino) => setRoute({ origen, destino })} />
      <MapaView route={route} />
    </div>
  );
}
