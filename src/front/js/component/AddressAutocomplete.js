import React, { useState } from "react";
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";


const libraries = ["places"];
const apiKey = "AIzaSyC1ZzQ1Lmrl2paWI4oO9KYhfzLyPDaGhBA"; 

export const AddressAutocomplete = ({ onChange }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const [searchBox, setSearchBox] = useState(null);
  const [address, setAddress] = useState("");

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    const place = places[0];
    if (place) {
      setAddress(place.formatted_address);
      onChange(place.formatted_address);
    }
  };

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Cargando...</div>;

  return (
    
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
               
    <input 
     className="form-control"
     type="address"
     placeholder="Enter your address"
     size="30"
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     required
      />
 
    </StandaloneSearchBox>
    

  );
};


