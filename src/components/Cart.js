import { useEffect } from 'react';
import '../styles/Cart.css';

function Cart(props){
    const { cart, updateCart } = props;
    const cartTotal = cart.reduce((accumulator, product) => accumulator + product.price * product.number, 0)
    useEffect(() => {
        alert("Bienvenue sur votre boutique en ligne 👋");
    }, []);

    useEffect(() => {
        alert(`Le montant actuel de votre panier 🛒 est : ${cartTotal} F CFA`);
    }, [cartTotal]);


    return <div className="ols-cart">
        <h2>Panier 🛒</h2>
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Prix</th>
                    <th>Nombre</th>
                    <th>Total (F FCA)</th>
                </tr>
            </thead>
            <tbody>
               {
                   cart.map(product => <tr key={product.id}>
                       <td>{product.name}</td>
                       <td className='ols-number'>{product.price}</td>
                       <td className='ols-number'>{product.number}</td>
                       <td className='ols-number'>{product.price * product.number}</td>
                   </tr>)
               }
               <tr>
                   <td colSpan={3}>Total (F CFA)</td>
                   <td>{cartTotal}</td>
               </tr>
            </tbody>
        </table>
        <br />
        <button type="button" onClick={() => updateCart([])}>Vider le panier</button>

    </div>;

}

export default Cart;