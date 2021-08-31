import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({});
	const { actions, store } = useContext(Context);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure you want to delete this contact?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>

					<div className="modal-footer">
						{props.onClose ? (
							<button onClick={() => props.onClose()} type="button" className="btn btn-primary">
								<span aria-hidden="true">Back to contacts </span>
							</button>
						) : (
							""
						)}
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => {
								actions.deleteContact(props.data.id);
								props.onClose();
							}}>
							Delete Contact
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	data: PropTypes.object
};

Modal.defaultProps = {
	show: false,
	onClose: null
};
