import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { productListSmall } from '../../../data/data';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductList() {
    return (
        <div className={cx('product-list')}>
            {productListSmall.map((product, index) => {
                let Discount = () => {
                    if (product.price_discount !== '') {
                        return (
                            <div className={cx('price-box')}>
                                <del className={cx('price-discount')}>
                                    <span className={cx('price')}>₫</span>
                                    {product.price.toLocaleString()}
                                </del>
                                <span className={cx('price-amount')}>
                                    <span className={cx('price')}>₫</span>
                                    {(product.price * (1 - product.price_discount / 100)).toLocaleString()}
                                </span>
                            </div>
                        );
                    } else {
                        return (
                            <div className={cx('price-box')}>
                                <span className={cx('price-amount')}>
                                    <span className={cx('price')}>₫</span>
                                    {product.price.toLocaleString()}
                                </span>
                            </div>
                        );
                    }
                };
                return (
                    <div className="product-item" key={index}>
                        <ul>
                            <li>
                                <Link to="/Shop/Product_Detail">
                                    <a href="#">
                                        <img src={product.img} alt="truyenthong" />
                                        <span className={cx('product-title')}>{product.name}</span>
                                    </a>

                                    {Discount()}
                                </Link>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;
