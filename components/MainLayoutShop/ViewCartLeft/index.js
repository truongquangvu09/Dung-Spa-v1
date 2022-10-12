import React from 'react';
import style from './ViewCartLeft.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { productList } from '../../../data/data';
import ViewCartRight from '../ViewCartRight';
const cx = classNames.bind(style);

function ViewCartLeft() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('message')}></div>
                <div className={cx('content')}>
                    <div className={cx('is-left', 'rol')}>
                        <form action="" className={cx('cart-form')}>
                            <table className={cx('table-left')}>
                                <thead>
                                    <tr>
                                        <th class="product-name" colspan="3">
                                            Sản phẩm
                                        </th>
                                        <th class="product-price">Giá</th>
                                        <th class="product-quantity">Số lượng</th>
                                        <th class="product-subtotal">Tạm tính</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.map((item, index) => {
                                        return (
                                            <tr className={cx('cart-item')} key={index}>
                                                <td className={cx('product-remove')}>
                                                    <a href="#" className={cx('remove')}>
                                                        <FontAwesomeIcon className={cx('remove-icon')} icon={faXmark} />
                                                    </a>
                                                </td>
                                                <td className={cx('product-thumbnail')}>
                                                    <img src={item.img} alt="anh" />
                                                </td>
                                                <td className={cx('product-name')}>{item.name}</td>
                                                <td className={cx('product-price')}>₫{item.price.toLocaleString()}</td>
                                                <td className={cx('product-quantity')}>
                                                    <div className={cx('quantity')}>
                                                        <button
                                                            type="button"
                                                            class={cx('minus', ' button', ' is-form')}
                                                        >
                                                            -
                                                        </button>
                                                        <button>{item.quantity}</button>
                                                        <button
                                                            type="button"
                                                            class={cx('minus', ' button', ' is-form')}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className={cx('product-subtotal')}>
                                                    {(item.price * item.quantity).toLocaleString()}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colspan="6" className={cx('action', 'clear')}>
                                            <div className={cx('continue-shopping')}>
                                                <a href="#" className={cx('return', 'button')}>
                                                    ← Tiếp tục xem sản phẩm{' '}
                                                </a>
                                                <button type="submit" className={cx('update', 'button')}>
                                                    Cập nhật giỏ hàng
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className={cx('is-right', 'rol')}>
                        <ViewCartRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewCartLeft;
