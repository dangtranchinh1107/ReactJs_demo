import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { CartContext } from '../../Contexts/CartContext'
import "./cart.css"
const Cart = () => {
    const { myCart, total } = useContext(CartContext);
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/")
    }
    return (
        <>
            <section className='cart-container'>
                <div className="cart-header">Check Out: </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-items">
                                <img src={item.imageUrl} alt="" className='cart-item-img' />
                                {item.name}: ${item.price}
                            </div>
                        )
                    })}
                    <div className="cart-total">Total: {total}</div>
                </div>
                <button className='cart-gohome' onClick={handleHome}>Return Home</button>

            </section>
        </>
    )
}

export default Cart