import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart  }>({});

    const onProductCountChange = ({ counter, product }: { counter:number, product: Product }) => {
        
        

        setShoppingCart( oldShoppingCart => {

            if( counter === 0 ) {
                const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, counter }
            }
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }

}