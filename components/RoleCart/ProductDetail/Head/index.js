import React from 'react';
import classNames from 'classnames/bind';
import styles from './Head.module.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { productDetail } from '../../../../data/data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faPinterest,
    faSquareTumblr,
    faSquareTwitter,
    faTumblr,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function HeadProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {});

    return (
        <div className={cx('wrapper')}>
            {productDetail.map((item, index) => {
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
                                            ₫{(item.price * (1 - item.price_discount / 100)).toLocaleString()}
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
                    <div className={cx('inner')}>
                        <div className={cx('is-left', 'col')}>
                            <div className={cx('product-image')}>
                                {CircleDiscount()}

                                <figure>
                                    <img id="myImg" src={item.img} alt={item.name} />
                                </figure>
                            </div>
                        </div>
                        <div className={cx('is-right', 'col')}>
                            <nav className={cx('breadcrumb')}>
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    {' '}
                                    <a href="#">Trang chủ</a>
                                </Link>
                                <span className={cx('divider')}>/</span>
                                <Link style={{ textDecoration: 'none' }} to="/Shop">
                                    {' '}
                                    <a href="#">Đặc trưng</a>
                                </Link>
                            </nav>
                            <h1 className={cx('product-title')}>{item.name}</h1>
                            <div className={cx('is-divider')}></div>
                            {/* <div className={cx('price-wrapper')}>{}</div> */}
                            {Discount()}
                            <div className={cx('description')}>
                                <p>{item.desc}</p>
                            </div>
                            <form className={cx('cart')} action="">
                                <div>
                                    <input type="button" value="-" className={cx('minus', 'button', 'is-form')} />
                                    <input type="number" className={cx('input-text')} inputMode="numeric" value="1" />
                                    <input type="button" value="+" className={cx('plus', 'button', 'is-form')} />
                                </div>
                                <button type="submit" className={cx('add-to-cart', 'button')}>
                                    Mua hàng
                                </button>
                            </form>
                            <div className={cx('product-meta')}>
                                <span class="sku_wrapper">
                                    Mã: <span class="sku">MA-LD-01</span>
                                </span>
                                <span class="posted_in">
                                    Danh mục:{' '}
                                    <Link to="/Shop">
                                        <a href="#">ĐẶC TRƯNG</a>
                                    </Link>
                                    ,{' '}
                                    <Link to="/Services">
                                        <a href="#">DỊCH VỤ SPA</a>
                                    </Link>
                                </span>
                            </div>
                            <div className={cx('social')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faSquareTwitter} />
                                <FontAwesomeIcon className={cx('icon')} icon={faPinterest} />
                                <FontAwesomeIcon className={cx('icon')} icon={faLinkedin} />
                                <FontAwesomeIcon className={cx('icon')} icon={faSquareTumblr} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default HeadProductDetail;
