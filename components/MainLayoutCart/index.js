import React from 'react';
import styles from './MainLayoutCart.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductList from './ProductList';
import NewsList from './NewsList';
import { Link, Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

function MainLayoutCart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('shop-title')}>
                    <div className={cx('is-left')}>
                        <Link to="/">
                            <a href="#">Trang Chủ</a>
                        </Link>
                        <span className={cx('divider')}>/</span>
                        Cửa Hàng
                    </div>
                    <div className={cx('is-right')}>
                        <span>Hiển thị 6 kết quả</span>
                        <select name="oderby" className={cx('order-option')} id="">
                            <option value="menu_order" selected="selected">
                                Thứ tự mặc định
                            </option>
                            <option value="date">Mới nhất</option>
                            <option value="price">Thứ tự theo giá: thấp đến cao</option>
                            <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
                        </select>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('sidebar', 'rol')}>
                        <aside className={cx('search', 'widget')}>
                            <input type="search" placeholder="Tìm kiếm..." />
                            <button type="submit">
                                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                            </button>
                        </aside>
                        <aside className={cx('product-portfolio', 'widget', 'widget-bd')}>
                            <div className={cx('widget-title')}>Danh mục sản phẩm</div>
                            <div className={cx('is-divider')}></div>
                            <ul>
                                <li>Chưa phân loại</li>
                                <li>Demo</li>
                            </ul>
                        </aside>
                        <aside className={cx('product-list', 'widget', 'widget-bd')}>
                            <div className={cx('widget-title')}>Sản phẩm</div>
                            <div className={cx('is-divider')}></div>
                            <ProductList />
                        </aside>
                        <aside className={cx('news-list', 'widget', 'widget-bd')}>
                            <div className={cx('widget-title')}>Bài viết mới</div>
                            <div className={cx('is-divider')}></div>
                            <NewsList />
                        </aside>
                    </div>

                    <div className={cx('content', 'rol')}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLayoutCart;
