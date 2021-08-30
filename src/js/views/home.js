import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Home() {
	const { actions } = useContext(Context);
	const [contacts, setContacts] = useState(actions.getContact());
	useEffect(() => {
		actions.createContact();
		actions.getContact();
		actions.updateContact();
		actions.deleteContact();
		actions.contactsList();
	}, []);

	return (
		<div className=" mt-5">
			<h1>Hello Rigo!</h1>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
}
