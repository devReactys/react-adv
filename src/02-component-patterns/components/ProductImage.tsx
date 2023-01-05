import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface ImageProps{
    className?:string,
    img?:string
    style?:React.CSSProperties
}

export const ProductImage = ({ img, className, style }:ImageProps) => {
    
    const {product} = useContext(ProductContext)
    const imga = img ? img : product.img ?? noImage
    
    return(
        <img className={`${styles.productImg} ${className}`} src={ imga  } alt='Coffe Mung'
        style={style}
        />

    );
}