const baseUrl = "https://www.swapi.tech/api/";

const getPeople = async () => {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/1");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default swapi;