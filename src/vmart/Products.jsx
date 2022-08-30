import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../components/App.css';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    // Calling API Data...
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
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

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = (id) => {
        return (
            <>
                <div>
                    <div className='product-button'>
                        <div className="buttons d-flex justify-content-center mb-5 pb-5">
                            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                        </div>
                    </div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div key={product.id} className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4">
                                    <img className="card-img-top"
                                        src={product.image}
                                        alt={product.title}
                                        height="250px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 15)}...</h5>
                                        <p className="card-text lead fw-bold">
                                            $ {product.price}
                                        </p>
                                        <Link to={`/products/${product.id}`}>
                                            <Button variant="outline-dark">Buy Now</Button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="bg-dark card text-white text-center mb-3"><strong>Latest Products</strong></h1>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products