import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductListDetail.module.scss';
import { Link } from 'react-router-dom';
import { productList } from '../../../data/data';
const cx = classNames.bind(styles);
function ProductListDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('products', 'row')}>
                <Link style={{ textDecoration: 'none' }} to="/Shop/Product_Detail">
                    <div className={cx('product-small')}>
                        {productList.map((item, index) => {
                            let CircleDiscount = () => {
                                if (item.price_discount !== '') {
                                    return (
                                        <div className={cx('badge')}>
                                            <div className={cx('badge-circle')}>
                                                <div className={cx('badge-inner')}>
                                                    <span class={cx('onsale')}>-{item.price_discount}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return '';
                                }
                            };
                            let Discount = () => {
                                if (item.price_discount !== '') {
                                    return (
                                        <div className={cx('price-wrapper')}>
                                            <span className={cx('price')}>
                                                <del>
                                                    <span className={cx('amount')}>₫{item.price.toLocaleString()}</span>
                                                </del>
                                                <ins>
                                                    <span className={cx('amount')}>
                                                        ₫
                                                        {(
                                                            item.price *
                                                            (1 - item.price_discount / 100)
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
                                                    <span className={cx('amount')}>₫{item.price.toLocaleString()}</span>
                                                </ins>
                                            </span>
                                        </div>
                                    );
                                }
                            };
                            return (
                                <div className={cx('inner')} key={index}>
                                    {CircleDiscount()}

                                    <div className={cx('product-smalls', 'box')}>
                                        <div className={cx('box-image')}>
                                            <a href="#">
                                                <img src={item.img} alt="" />
                                            </a>
                                        </div>
                                        <div className={cx('box-text-product')}>
                                            <div className={cx('title-wrapper')}>
                                                <a href="#">{item.name}</a>
                                            </div>
                                            {Discount()}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProductListDetail;
