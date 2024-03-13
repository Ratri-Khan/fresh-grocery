import { useEffect, useState } from 'react';

const UseCategory = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoading(data)
        })
    },[])
    return [products,loading];
};

export default UseCategory;