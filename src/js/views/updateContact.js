import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/updateContact.scss";

export const UpdateContact = () => {
	const { actions, store } = useContext(Context);
	const params = useParams();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		if (params.id) {
			actions.getContact(params.id);
		}
	}, []);

	useEffect(
		() => {
			if (params.id == store.contactEntry.id) {
				setName(store.contactEntry.full_name);
				setPhone(store.contactEntry.phone);
				setEmail(store.contactEntry.email);
				setAddress(store.contactEntry.address);
			}
		},
		[store.contactEntry]
	);

	const handleChangeName = event => setName(event.target.value);
	const handleChangePhone = event => setPhone(event.target.value);
	const handleChangeEmail = event => setEmail(event.target.value);
	const handleChangeAddress = event => setAddress(event.target.value);

	const handleSaveContact = event => {
		const newContact = {
			full_name: name,
			address: address,
			phone: phone,
			email: email,
			agenda_slug: store.agenda_slug
		};

		actions.updateContact(params.id, newContact);

		alert("El contacto " + name + " ha sido actualizado");
		setName("");
		setPhone("");
		setEmail("");
		setAddress("");
	};

	return (
		<div className="casita container  p-5">
			<div className="cuadro m-3 ">
				<h1 className="text-center mt-3">Edit contact</h1>
				<form>
					<div className="form-group">
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
							className="btn btn-primary form-control mt-2 p-2"
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
