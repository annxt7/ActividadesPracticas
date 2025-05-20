import { useState } from 'react';
import jsonData from "./data.json";
import './App.css';
export default function ProductsPage() {
    const [products] = useState(jsonData);
    const [searchText, setSearchText] = useState("");
    const [onlyInStock, setOnlyInStock] = useState(false);
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesStock = onlyInStock ? product.inStock : true;
        return matchesSearch && matchesStock;
    });
    return (
        <div className='Container'>
            <h1 className='Titulo'>IronStore</h1>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onlyInStock={onlyInStock}
                setOnlyInStock={setOnlyInStock}
            />
            <ProductTable products={filteredProducts} />
        </div>
    )
}
function SearchBar({ onlyInStock, searchText, setOnlyInStock, setSearchText }) {
    return (
        <>
            <p>Search</p>
            <div id='Buscador' className='Buscador'>
                <label >
                    <input className='FiltroBusqueda'
                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} >
                    </input>
                </label>
                <br />
                <label className='FiltroStock'>
                    Only show products in stock <input type='checkbox' checked={onlyInStock}
                        onChange={(e) => setOnlyInStock(e.target.checked)}></input>
                </label>
            </div>
        </>
    )
}

function ProductTable({ products }) {
    return (
        <>
            <table>
                <tr className='Encabezado'>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                
                <ProductRow products={products} />
                
            </table>
        </>
    )
}

function ProductRow({ products }) {
    const listProducts = products.map(product =>

        <tr key={product.id}>
            <td style={{ color: product.inStock ? 'black' : 'red' }}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
    return (
        <>
                <>{listProducts}</>
                
        </>
    );
}