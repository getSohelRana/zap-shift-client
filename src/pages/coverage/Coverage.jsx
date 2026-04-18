import React, { useRef } from "react";
import Heading from "../../shared/heading/Heading";
import Text from "../../shared/text/Text";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const services = useLoaderData();
  const mapRef = useRef(null)
  // console.log(services);
  const position = [23.8041, 90.4152];

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value.trim().toLowerCase();

    const district = services.find((servicePoint) =>
      servicePoint.district.toLowerCase().includes(location),
    );

    if (district) {
      const coordinate = [district.latitude, district.longitude];
      console.log(coordinate);
      mapRef.current.flyTo(coordinate, 10)
    } else {
      // console.log("No district found");
    }
    e.target.reset()
  };

  return (
    <div className="my-20">
      <div className="my-20 text-center">
        <Heading>We are available in 64 districts</Heading>

        <div className="flex justify-center mt-8">
          <form onSubmit={handleSearch}>
            <div className="relative w-full max-w-md">
              {/* Input */}
              <input
                type="search"
                name="location"
                placeholder="Search district..."
                className="w-full pl-10 pr-28 py-3 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Search Icon */}
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="m21 21-4.3-4.3" strokeWidth="2" />
              </svg>

              {/* Floating Button */}
              <button className="absolute right-1 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition cursor-pointer">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* react leftlet map */}
      <div className="w-full h-150 mt-15">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-150"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {services.map((service, idx) => (
            <Marker key={idx} position={[service.latitude, service.longitude]}>
              <Popup>
                <b>{service.district}</b>
                <br />
                We are available in {service.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
