import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DishForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchDish = async () => {
                try {
                    const res = await axios.get(`http://localhost:5001/api/dishes/${id}`);
                    setName(res.data.name);
                    setDescription(res.data.description);
                    setPrice(res.data.price);
                    setCategory(res.data.category);
                } catch (error) {
                    console.error('Error fetching dish:', error);
                }
            };

            fetchDish();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dish = { name, description, price, category };
        try {
            if (id) {
                await axios.put(`http://localhost:5001/api/dishes/${id}`, dish);
            } else {
                await axios.post('http://localhost:5001/api/dishes', dish);
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving dish:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dish Name"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <button type="submit">Save Dish</button>
        </form>
    );
};

export default DishForm;
