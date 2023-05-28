import React      from "react";
import MarkerIcon from "../../assets/Marker.png";

interface MarkerProps {
    className: string;
    markerId:  string;
    lat:       number;
    lng:       number;
    onClick:   (e: any, marker: any) => void;
}

const Marker: React.FC<MarkerProps> = ({className, lat, lng, markerId, onClick}) => {
	return (
		<img className = {className}
			 src       = {MarkerIcon}
			 //  lat       = {lat}
			 //  lng       = {lng}
			 onClick   = {(e) => (onClick ? onClick(e, { markerId, lat, lng }) : null)}
			 style     = {{ cursor: 'pointer', fontSize: 40 }}
			 alt       = {markerId}/>
	)
};

export default Marker;