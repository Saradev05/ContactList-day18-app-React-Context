import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Chica from "../../img/chica.jpg";
import { Context } from "../store/appContext.js";

export const ContactCard = props => {
	const { actions, store } = useContext(Context);
	useEffect(() => {
		console.log(props.data.id);
	}, []);

	return (
		<li className="list-group-item mb-3">
			<div className="contactBox row  ">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={Chica} alt="..." className="chica rounded-circle mx-auto d-block img-fluid  " />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={"/edit/" + props.data.id}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button className="btn" onClick={() => props.onClickDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead ">{props.data.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.data.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title={props.data.phone}
					/>
					<span className="text-muted small">{props.data.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.data.email}</span>
				</div>
			</div>
		</li>
	);
};

ContactCard.propTypes = {
	history: PropTypes.object,
	onClickDelete: PropTypes.func,
	data: PropTypes.object
};

ContactCard.defaultProps = {
	onClickDelete: null
};
