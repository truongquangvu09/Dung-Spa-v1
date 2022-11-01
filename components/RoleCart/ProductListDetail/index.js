import React from 'react';
import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductListDetail.module.scss';
import { Link } from 'react-router-dom';
import { productList } from '../../../data/data';

import { auth, db, storage } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs, addDoc, QuerySnapshot, doc } from 'firebase/firestore';

const cx = classNames.bind(styles);

function ProductListDetail(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = () => {
            const productList = [];
            const path = 'products';
            getDocs(collection(db, path))
                .then((QuerySnapshot) => {
                    QuerySnapshot.forEach((doc) => {
                        productList.push({ ...doc.data(), id: doc.id });
                        console.log(doc.id, '=>', doc.data());
                    });
                    setProducts(productList);
                })
                .catch((error) => {});
        };
        getProduct();
    }, []);
    return (
        // <div className={cx('wrapper')}>
        //     <div className={cx('products', 'row')}>
        //         <Link style={{ textDecoration: 'none' }} to="/Shop/Product_Detail">
        //             <div className={cx('product-small')}>
        //                 {productList.map((item, index) => {
        //                     let CircleDiscount = () => {
        //                         if (item.price_discount !== '') {
        //                             return (
        //                                 <div className={cx('badge')}>
        //                                     <div className={cx('badge-circle')}>
        //                                         <div className={cx('badge-inner')}>
        //                                             <span class={cx('onsale')}>-{item.price_discount}%</span>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             );
        //                         } else {
        //                             return '';
        //                         }
        //                     };
        //                     let Discount = () => {
        //                         if (item.price_discount !== '') {
        //                             return (
        //                                 <div className={cx('price-wrapper')}>
        //                                     <span className={cx('price')}>
        //                                         <del>
        //                                             <span className={cx('amount')}>₫{item.price.toLocaleString()}</span>
        //                                         </del>
        //                                         <ins>
        //                                             <span className={cx('amount')}>
        //                                                 ₫
        //                                                 {(
        //                                                     item.price *
        //                                                     (1 - item.price_discount / 100)
        //                                                 ).toLocaleString()}
        //                                             </span>
        //                                         </ins>
        //                                     </span>
        //                                 </div>
        //                             );
        //                         } else {
        //                             return (
        //                                 <div className={cx('price-wrapper')}>
        //                                     <span className={cx('price')}>
        //                                         <ins>
        //                                             <span className={cx('amount')}>₫{item.price.toLocaleString()}</span>
        //                                         </ins>
        //                                     </span>
        //                                 </div>
        //                             );
        //                         }
        //                     };
        //                     return (
        //                         <div className={cx('inner')} key={index}>
        //                             {CircleDiscount()}

        //                             <div className={cx('product-smalls', 'box')}>
        //                                 <div className={cx('box-image')}>
        //                                     <a href="#">
        //                                         <img src={item.img} alt="" />
        //                                     </a>
        //                                 </div>
        //                                 <div className={cx('box-text-product')}>
        //                                     <div className={cx('title-wrapper')}>
        //                                         <a href="#">{item.name}</a>
        //                                     </div>
        //                                     {Discount()}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     );
        //                 })}
        //             </div>
        //         </Link>
        //     </div>
        // </div>
        <div className={cx('wrapper')}>
            <div className={cx('products', 'row')}>
                <div className={cx('product-small')}>
                    {products.map((item) => {
                        let CircleDiscount = () => {
                            if (item.productDiscount !== '') {
                                return (
                                    <div className={cx('badge')}>
                                        <div className={cx('badge-circle')}>
                                            <div className={cx('badge-inner')}>
                                                <span class={cx('onsale')}>-{item.productDiscount}%</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return '';
                            }
                        };
                        let Discount = () => {
                            if (item.productDiscount !== '') {
                                return (
                                    <div className={cx('price-wrapper')}>
                                        <span className={cx('price')}>
                                            <del>
                                                <span className={cx('amount')}>
                                                    ₫{Number(item.productPrice).toLocaleString()}
                                                </span>
                                            </del>
                                            <ins>
                                                <span className={cx('amount')}>
                                                    ₫
                                                    {(
                                                        item.productPrice *
                                                        (1 - item.productDiscount / 100)
                                                    ).toLocaleString()}
                                                </span>
                                            </ins>
                                        </span>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className={cx('price-wrapper')}>
                                        <span className={cx('price')}>
                                            <ins>
                                                <span className={cx('amount')}>
                                                    ₫{Number(item.productPrice).toLocaleString()}
                                                </span>
                                            </ins>
                                        </span>
                                    </div>
                                );
                            }
                        };
                        return (
                            <Link style={{ textDecoration: 'none' }} to="/Shop/Product_Detail">
                                <div className={cx('inner')} key={item.id} item={item}>
                                    {CircleDiscount()}

                                    <div className={cx('product-smalls', 'box')}>
                                        <div className={cx('box-image')}>
                                            <a href="#">
                                                <img src={item.productImg} alt="" />
                                            </a>
                                        </div>
                                        <div className={cx('box-text-product')}>
                                            <div className={cx('title-wrapper')}>
                                                <a href="#">{item.productName}</a>
                                            </div>
                                            {Discount()}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductListDetail;
