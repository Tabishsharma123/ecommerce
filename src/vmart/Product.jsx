import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Skeleton from 'react-loading-skeleton';


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);


    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{lineHeight: 2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={120} />
                    <Skeleton height={40} />
                    <Skeleton height={120} width={100} />
                    <Skeleton height={50} width={100} 
                    style={{marginLeft: 6}}
                    />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img className="border border-secondary shadow-lg p-3 mb-1 bg-white rounded"
                        src={product.image}
                        alt={product.title}
                        height="400px" width="400px"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-7 0">
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>

                    <button className="btn btn-outline-dark mr-3 ms-2"
                    onClick={()=>addProduct(product)}>
                        <i className="fa fa-shopping-cart me-2"></i>
                        Add to Cart
                    </button>

                    <Link to="/cart">
                        <Button variant="dark">
                            <i className="fa fa-shopping-cart me-2"></i>
                            Go to Cart
                        </Button>
                    </Link>
                </div>
            </>
        )
    }


    return (
        <div className='h-100'>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Product