import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/DishList.css'
const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/dishes');
                console.log('Fetched dishes:', res.data);
                setDishes(res.data);
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };

        fetchDishes();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/dishes/${id}`);
            setDishes(dishes.filter(dish => dish._id !== id));
        } catch (error) {
            console.error('Error deleting dish:', error);
        }
    };

    return (
        <div>
            <h1>Dishes</h1>
            <Link to="/create">Create New Dish</Link>
            <ul>
                {dishes.map(dish => (
                    <li key={dish._id}>
                        {dish.name} - ${dish.price}
                        <Link to={`/edit/${dish._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(dish._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishList;
