
import {Props as ButtonsProps} from '../components/ProductButtons';
import {Props as ProductCardProps } from '../components/ProductCard';
import { ImageProps } from '../components/ProductImage';
import { PropTitle } from '../components/ProductTitle';


export interface Product {
    id:string,
    title: string,
    img?:string
}
export interface ProductContextProps {
    counter: number;
    maxCount?:number;
    product: Product;
    increaseBy: ( value: number ) => void;
}

export interface ProductCarHOCProps {
    ({children, product}: ProductCardProps):JSX.Element,
    Buttons:(Props: ImageProps)   => JSX.Element,
    Image:  (Props: ButtonsProps) => JSX.Element,
    Title:  (Props: PropTitle)    => JSX.Element,
}

export interface onChangeArgs {
    product: Product,
    counter: number,
}


export interface ProductInCart extends Product{
    counter:number,
  }

export interface InitialValues {
    count?:number,
    maxCount?:number
}
export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number) => void;
    reset: () => void;
}