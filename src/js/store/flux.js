const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favs: []
		},
		actions: {
			getPeople: () => {
				const fetchData = async () => {
					try {
						const response = await fetch("https://swapi.py4e.com/api/people/");
						const data = await response.json();
						const results = data.results;
						setStore({ characters: results });
					} catch (error) {
						console.log(error);
					}
				};
				fetchData();
			},
			getPlanets: () => {
				const fetchData = async () => {
					try {
						const response = await fetch("https://swapi.py4e.com/api/planets/");
						const data = await response.json();
						const results = data.results;
						setStore({ planets: results });
					} catch (error) {
						console.log(error);
					}
				};
				fetchData();
			},
			getVehicles: () => {
				const fetchData = async () => {
					try {
						const response = await fetch("https://swapi.py4e.com/api/vehicles/");
						const data = await response.json();
						const results = data.results;
						setStore({ vehicles: results });
					} catch (error) {
						console.log(error);
					}
				};
				fetchData();
			},
			toggleFavs: (item, store) => {

				const isInFavs = store.favs.includes(item);
				if (!isInFavs) {
					const updatedFavs = [...store.favs, item];
					setStore({ ...store, favs: updatedFavs });
				} else {
					const updatedFavs = store.favs.filter(fav => fav !== item);
					setStore({ ...store, favs: updatedFavs });
				}

				console.log(store.favs);

			}
		}
	};
};

export default getState;
