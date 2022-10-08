import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Navbar() {
    return (
        <header className={cx('wrapper')}>
            <nav className={cx('inner')}>
                <div className={cx('wrapper_logo')}>
                    <img
                        className={cx('logo')}
                        src="https://mauweb.monamedia.net/luxuryspa/wp-content/uploads/2020/05/logopsa121212-1.png"
                        alt="#"
                    />
                </div>
                <div className={cx('wrapper_menu')}>
                    <ol className={cx('menu')}>
                        <li className={cx('item_menu')}>
                            <NavLink
                                // style={({ isActive }) => {
                                //     return {
                                //         display: 'block',
                                //         margin: '1rem 0',
                                //         color: isActive ? 'red' : '',
                                //     };
                                // }}
                                className={cx('link_item_menu')}
                                to="/"
                            >
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Introduce">
                                GIỚI THIỆU
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Shop">
                                CỬA HÀNG
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Services">
                                DỊCH VỤ
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Contact">
                                LIÊN HỆ
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Booking">
                                ONLINE BOOKING
                            </NavLink>
                        </li>
                        <li className={cx('item_menu')}>
                            <NavLink className={cx('link_item_menu')} to="/Cart">
                                <span className={cx('price')}>$0.00</span>

                                <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                            </NavLink>
                        </li>
                    </ol>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>
            <Footer />
        </header>
    );
}

export default Navbar;
