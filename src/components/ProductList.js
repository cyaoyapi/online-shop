import "../styles/ProductList.css";
import Product  from "./Product";
import { productList } from "../data/productList";

function ProductList(props){
    const { cart, updateCart } = props;
    return <section>
        <h2>Liste des produits disponibles</h2>
        <div className="ols-product-list">
            {
                productList.map(product =>
                    <Product 
                        key={product.id} 
                        id={product.id}
                        name={product.name} 
                        price={product.price} 
                        cart={cart}
                        updateCart={updateCart} />)
            }
        </div>
    </section>;
}

export default ProductList;