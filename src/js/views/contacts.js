import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/contactCard.js";
import { Modal } from "../component/modal";
import "../../styles/contacts.scss";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.contactsList(store.agenda_slug);
	}, []);

	return (
		<div className="casita container  pl-5 pr-5 pb-4">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/create">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down " id="contact-list">
						{store.contacts.map((element, index) => (
							<ContactCard
								onClickDelete={() => setState({ showModal: true, data: element })}
								key={index}
								data={element}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} data={state.data} />
		</div>
	);
};
