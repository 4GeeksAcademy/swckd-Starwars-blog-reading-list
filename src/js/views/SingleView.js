
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const SingleView = () => {
    const { id } = useParams();
    const { type } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://swapi.py4e.com/api/${type}/${id}`);
                const data = await response.json();
                console.log(response);
                setData(data);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, []);

    console.log(data)
    return (
        <div className="container">
            <div className="row">
                <div className="col-11"><h1>{data.name}</h1></div>
                <div className="col-1"><Link to="/" type="button" class="btn btn-primary">Atrás</Link></div>
            </div>
            <div className="row">

                <ul className="list-group list-group-flush">
                    {Object.keys(data).map(key => (
                        <li className='list-group-item' key={key}>
                            <b>{key}: </b>{data[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>



    );
}

export default SingleView;