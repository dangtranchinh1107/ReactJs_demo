import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
const DogCart = (props) => {
    const { name, breed, description, price, imageUrl } = props

    const [added, setAdded] = useState(false);
    const { addToCart, setTotal } = useContext(CartContext)

    const handleclick = () => {
        setAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
        };
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)))
    }
    return (
        <>
            <section className='dogs'>
                <div className='dogs-info'>
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className='dogs-img-container'>
                    <img className='dog-img' src={imageUrl} alt={`picture of: ${name}`} />
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">${price}</div>
                {added ? (
                    <button disabled className='dogs-btn-disabled'>ADDED</button>
                )
                    : (
                        <button className='dogs-btn' onClick={handleclick}>ADD TO CART</button>
                    )}

            </section >
        </>
    )
}

export default DogCart