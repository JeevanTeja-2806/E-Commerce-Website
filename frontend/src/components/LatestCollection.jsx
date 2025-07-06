
 
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const LatestCollection = () => {

    const  [LatestProducts , setLatestProducts]= useState([])

    const { products } = useContext(ShopContext);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    }, [products])
    

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias, fugit id suscipit molestias blanditiis corrupti tempore veniam voluptatibus quasi, reprehenderit dignissimos est?
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {LatestProducts.map((item,index)=>(
                    <Productitem key={index} id={item._id} image={item.images} name={item.name} price={item.price}/>
                ))}
            </div>

        </div>
    )
}

export default LatestCollection
