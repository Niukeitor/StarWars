import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function InfoVehiculos(props) {
	const [info, setInfo] = useState({});
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		for (let i = 0; i < store.vehicles.length; i++) {
			let datos = store.vehicles[i];
			if (datos.uid == id) {
				fetch(datos.url)
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
						setInfo(data.result.properties);
					})
					.catch(error => console.log(error));
			}
		}
	}, []);
	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="https://elcomercio.pe/resizer/m65N7fg8VlH8H8DwQNC0HDphoa4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AEZOY5MJKFAQDGKXTVLPHZKDZE.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">{info.name}</h5>
					<ul>
						<li>Nombre: {info.name}</li>
						<li>Modelo: {info.model}</li>
						<li>Fabricante: {info.manufacturer}</li>
						<li>Costo en creditos: {info.cost_in_credits}</li>
						<li>Largo: {info.length}</li>
						<li>Maxima Velocidad: {info.max_atmosphering_speed}</li>
						<li>Tripulacion: {info.crew}</li>
						<li>Pasajeros: {info.passengers}</li>
						<li>Capacidad de carga: {info.cargo_capacity}</li>
						<li>Consumibles: {info.consumables}</li>
						<li>Calificación de Hiperimpulsor: {info.hyperdrive_rating}</li>
						<li>MGLT: {info.MGLT}</li>
						<li>Clase de nave: {info.starship_class}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
