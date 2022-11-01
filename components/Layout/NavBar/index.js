import React from 'react';
import { useState, useEffect } from 'react';

import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Footer from '../Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { auth, db } from '../../../FireBase/FireBase';
import { collection, query, where, getDocs } from 'firebase/firestore';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const cx = classNames.bind(styles);
function Navbar() {
    function GetCurrentUser() {
        const [user, setUser] = useState('');
        const usersCollectionRef = collection(db, 'users');

        useEffect(() => {
            auth.onAuthStateChanged((userLogged) => {
                if (userLogged) {
                    const getUSers = async () => {
                        const q = query(collection(db, 'users'), where('uid', '==', userLogged.uid));
                        const data = await getDocs(q);
                        setUser(
                            data.docs.map((doc) => ({
                                ...doc.data(),
                                id: doc.id,
                            })),
                        );
                    };
                    getUSers();
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user;
    }
    const loggedUser = GetCurrentUser();
    const navigate = useNavigate;
    const handleLogout = () => {
        auth.signOut().then(() => {
            setTimeout(() => {
                navigate('/Cart');
            }, 2000);
        });
    };

    console.log(loggedUser);

    return (
        <header className={cx('wrapper')}>
            <nav className={cx('inner')}>
                <div className={cx('wrapper_logo')}>
                    <img className={cx('logo')} src={require('../../../assets/img/LogoDungSpa (1) (4).png')} alt="#" />
                </div>
                {!loggedUser && (
                    <div className={cx('wrapper_menu')}>
                        <ol className={cx('menu')}>
                            <li className={cx('item_menu')}>
                                <NavLink className={cx('link_item_menu')} to="/">
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
                                <NavLink className={cx('link_item_menu')} to="/News">
                                    TIN TỨC
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
                                    <span>(0)</span>
                                </NavLink>
                            </li>
                            <li className={cx('login-register')}>
                                <FontAwesomeIcon className={cx('icon-user')} icon={faCircleUser} />
                                <NavLink className={cx('link_item_menu')} to="/Login">
                                    Đăng Nhập
                                </NavLink>
                                <span className={cx('divider')}>|</span>

                                <NavLink className={cx('link_item_menu')} to="/Register">
                                    Đăng Kí
                                </NavLink>
                            </li>
                        </ol>
                    </div>
                )}
                {loggedUser && (
                    <div className={cx('wrapper_menu', 'wrapper_menu_user')}>
                        <ol className={cx('menu')}>
                            <li className={cx('item_menu')}>
                                <NavLink className={cx('link_item_menu')} to="/">
                                    TRANG CHỦ
                                </NavLink>
                            </li>
                            <li className={cx('item_menu')}>
                                <NavLink className={cx('link_item_menu')} to="/Introduce">
                                    GIỚI THIỆU
                                </NavLink>
                            </li>
                            {loggedUser[0].email === 'truongquangvuu09@gmail.com' ? (
                                <li className={cx('item_menu')}>
                                    <NavLink className={cx('link_item_menu')} to="/Admin">
                                        CỬA HÀNG
                                    </NavLink>
                                </li>
                            ) : (
                                <li className={cx('item_menu')}>
                                    <NavLink className={cx('link_item_menu')} to="/Shop">
                                        CỬA HÀNG
                                    </NavLink>
                                </li>
                            )}
                            {/* <li className={cx('item_menu')}>
                                <NavLink className={cx('link_item_menu')} to="/Shop">
                                    CỬA HÀNG
                                </NavLink>
                            </li> */}
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
                                <NavLink className={cx('link_item_menu')} to="/News">
                                    TIN TỨC
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
                                    <span>({loggedUser[0].cart})</span>
                                </NavLink>
                            </li>

                            <Tippy content="Hồ sơ" theme="light">
                                <NavLink to="/UserProfile">
                                    <li className={cx('login-register')}>
                                        <FontAwesomeIcon className={cx('icon-user')} icon={faCircleUser} />
                                    </li>
                                </NavLink>
                            </Tippy>

                            <Tippy content="Đăng xuất" theme="light">
                                <li className={cx('login-register')}>
                                    <FontAwesomeIcon
                                        onClick={handleLogout}
                                        className={cx('icon-logout')}
                                        icon={faRightFromBracket}
                                    />
                                </li>
                            </Tippy>
                        </ol>
                    </div>
                )}
            </nav>
            <div>
                <Outlet />
            </div>
            <Footer />
        </header>
    );
}

export default Navbar;
