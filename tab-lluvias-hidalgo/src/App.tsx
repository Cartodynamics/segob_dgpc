import React, { useState } from 'react';
import InfoBox, { InfoBoxSection } from './components/InfoBox/InfoBox';
import Map from './components/Map/Map';
import './App.css';

const App: React.FC = () => {
  // ⬇️ Capas nuevas
  const [layersVisibility, setLayersVisibility] = useState<Record<string, boolean>>({
    region1: true,
    region2: true,
    region3: true,
    region4: true,
    inundaciones_conagua: true,
  });

  const handleToggle = (id: string) => {
    setLayersVisibility(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Paleta (tomada de tu imagen): #70613F, #9D792A, #DEB52D, #BDAA76, #9B1B3E
  const sections: InfoBoxSection[] = [
    {
      title: 'Capas del Proyecto',
      items: [
        { id: 'region1', label: 'Región 1', color: '#70613F', shape: 'square', switch: true, checked: layersVisibility['region1'] },
        { id: 'region2', label: 'Región 2', color: '#9D792A', shape: 'square', switch: true, checked: layersVisibility['region2'] },
        { id: 'region3', label: 'Región 3', color: '#DEB52D', shape: 'square', switch: true, checked: layersVisibility['region3'] },
        { id: 'region4', label: 'Región 4', color: '#BDAA76', shape: 'square', switch: true, checked: layersVisibility['region4'] },
        { id: 'inundaciones_conagua', label: 'Inundaciones CONAGUA', color: '#9B1B3E', shape: 'circle', switch: true, checked: layersVisibility['inundaciones_conagua'] },
      ],
    },
  ];

  return (
    <div className="App">
      <InfoBox
        title="Atención por lluvias en el estado de Hidalgo"
        sections={sections}
        onToggle={handleToggle}
      />
      <Map layersVisibility={layersVisibility} />
    </div>
  );
};

export default App;

