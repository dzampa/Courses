import React, {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{

    state = {
        products:[],
        productInfo:{},
        page: 1
    }

    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;
        
        this.setState({products: docs, productInfo, page});
    };

    prevPage = () => {
        const{page} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const{page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render(){

        const {products, page, productInfo} = this.state;

        return(
            <div className="product-list">
                {products.map(products =>(
                    <article key={products._id}>
                        <strong>{products.title}</strong>
                        <p>{products.description}</p>
                        <Link to={`/product/${products._id}`} Ks>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
        
    };
};