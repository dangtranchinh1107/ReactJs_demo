import React from 'react'
import DogCart from './DogCart';
import "./dogs.css";

const Dogs = (props) => {
    const { dogs } = props;
    return (
        <>
            <section className='dogs-container'>
                {dogs.map((dog) => {
                    // map dùng để loop
                    return (
                        <div key={dog.id}>
                            <DogCart
                                id={dog.id}
                                name={dog.name}
                                breed={dog.breed}
                                description={dog.description}
                                price={dog.price}
                                imageUrl={dog.imageUrl}
                            />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Dogs