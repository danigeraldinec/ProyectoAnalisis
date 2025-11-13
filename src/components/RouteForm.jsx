import React, { useState } from 'react';
import './RouteForm.css';

const RouteForm = ({ onSelectRoute }) => {
  const [origenLat, setOrigenLat] = useState('');
  const [destLat, setDestLat] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectRoute(
      [parseFloat(origenLat),parseFloat(destLat)]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="route-form">
      <div className="form-group">
        <label>Origen</label>
        <input value={origenLat} onChange={e => setOrigenLat(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Destino</label>
        <input value={destLat} onChange={e => setDestLat(e.target.value)} />
      </div>
      <button type="submit">Mostrar Ruta</button>
    </form>
  );
};

export default RouteForm;
