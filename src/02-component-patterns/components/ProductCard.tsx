import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductCard = ({children, product}:ProductCardProps) => {
  
   const {counter,increasedBy} = useProduct()
    
    return (
    <Provider value={{
        counter,
        increasedBy,
        product}}>

    <div className={styles.productCard}>

        {children}

    </div>
    </Provider>
  )
}

