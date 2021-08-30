import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CreateContact = () => {
	const { actions, store } = useContext(Context);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const handleChangeName = event => setName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);

	const handleSaveContact = event => {
		const newContact = {
			full_name: name,
			phone: phone,
			address: address,
			email: email,
			agenda_slug: store.agenda_slug
		};

		actions.createContact(newContact);
		alert("Tu contacto " + newContact.full_name + " ha sido creado");
	};

	return (
		<div className="casita container  pl-5 pr-5 pb-4">
			<div className="m-3">
				<h1 className="text-center mt-5">New contact</h1>
				<form>
					<div className="form-group ">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={handleChangeName}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChangePhone}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChangeEmail}
							value={email}
						/>
					</div>

					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChangeAddress}
							value={address}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control mt-2 p-2 "
							onClick={handleSaveContact}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
