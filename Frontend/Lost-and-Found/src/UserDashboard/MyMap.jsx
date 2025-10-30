import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import icons properly
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Custom icons
const lostIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const foundIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MyMap = ({position, zoom, style, maxBounds,  maxBoundsViscosity, 
                scrollWheelZoom, minZoom, whenCreated, items}) => {
  // Example: specific location — say, Dhaka University
//   const position = [23.729, 90.393]; // Latitude, Longitude

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      minZoom={minZoom}     // prevent zooming out too far
      style={style}
      maxBounds={maxBounds}
      maxBoundsViscosity={ maxBoundsViscosity}
      scrollWheelZoom={scrollWheelZoom}  
      whenCreated={whenCreated}
   
    >
      {/* Tile layer (base map) */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker on your specific location */}
      {
        items.map((item)=> {
          const position = [item.Latitude, item.Longitude];
          const icon = (item.Status === 'Lost'? lostIcon : foundIcon)

          return(
            <Marker key={item.ItemId} position={position} icon={icon}>
            <Popup>
              <strong>{item.ItemName}</strong><br/>
              <br/>
              {item.Description}
            </Popup>
          </Marker>
          )

        })
      }

    </MapContainer>
  );
};

export default MyMap;
