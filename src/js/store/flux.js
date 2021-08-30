const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactEntry: {
				name: "",
				phone: "",
				email: "",
				address: ""
			},
			contacts: [],
			agenda_slug: "nbv"
		},
		actions: {
			getContact(id) {
				const store = getStore();

				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "GET"
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							contactEntry: json
						});
						console.log("store.contactEntry desde getContactEntry del flux: ", store.contactEntry);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			createContact(data) {
				const store = getStore();
				//no hace falta getStore() porque no necesita cambiar nada del store

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().conatctsList(store.agenda_slug);
					})
					.catch(error => {});
			},
			updateContact(id, data) {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().contactsList(store.agenda_slug);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			deleteContact(id) {
				const store = getStore();

				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("json desde deleteContact", json);
						getActions().contactsList(store.agenda_slug);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			contactsList(slug) {
				const store = getStore();

				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + slug, {
					method: "GET"
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log(json, store.contacts);
						setStore({
							contacts: json
						});
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
