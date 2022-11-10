import { lazy, LazyExoticComponent } from 'react';
import LazyPage1 from '../01-lazyload/pages/LazyPage1';
// import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent>| JSXComponent,
    name:string

}

const Lazy1 = lazy(() => import(/* webpackChunckName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunckName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunckName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        to:'/lazi1',
        path:'lazi1',
        Component:LazyPage1,
        name:'Lazy-1'
    },
    {
        to:'/lazi2',
        path:'lazi2',
        Component:Lazy2,
        name:'Lazy-2'
    },
    {
        to:'/lazi3',
        path:'lazi3',
        Component:Lazy3,
        name:'Lazy-3'
    },
];
