'use client'
import React, { useEffect, useState } from 'react'
import Mybutton from "./mybutton"
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
const page = () => {
    const [product, setProduct] = useState([]);

    useEffect( () => {
      
        

        const product = fetch("https://fakestoreapi.com/products")
            .then((products) => products.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            })


    }, [product])
    return (

        <Suspense fallback={<Loading/>}>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-3' >

            {
                product.map((data) => (
                    <div className='col'>
                        <div className="card m-3" >
                            <Image src={data.image} width={500} height={250} style={{objectFit:"contain"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text justify">
                                   {data.description.split(/\s+/).slice(0,15).join(' ')}...<span style={{color:"blue"}}>show More</span>
                                </p>
                                <Mybutton price={data.price}/>
                                
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>
        </Suspense>
    )
}






export default page
