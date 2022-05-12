import '../styles/Product.css';

function Product(props){
    const {id, name, price, cart, updateCart} = props;

    function addToCart({id, name, price}) {
        const currentProductAded = cart.find(product => product.id === id);
        if(currentProductAded){
            const cartWithoutSelectProduct = cart.filter(product => product.id !== id);
            updateCart([...cartWithoutSelectProduct, 
                {
                    id:id,
                    name:name,
                    price:price,
                    number: currentProductAded.number + 1
                }]);
        } else {
            updateCart([...cart, 
                {
                    id:id,
                    name:name,
                    price:price,
                    number: 1
                }]);
        }
    }

    return <div className='ols-product'>
        <h5 className='ols-product-title'>{name}</h5>
        <p>Prix : {price} F CFA</p>
        <button type='button' onClick={() => addToCart({ 
            id: id,
            name: name,
            price: price,
        })}>Ajouter</button>
    </div>

}

export default Product;