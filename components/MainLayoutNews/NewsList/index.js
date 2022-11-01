import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsList.module.scss';
import { Link } from 'react-router-dom';

import { newListContent } from '../../../data/data';
const cx = classNames.bind(styles);

function NewsListContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('products', 'row')}>
                <Link style={{ textDecoration: 'none' }} to="/News/New_DetailContent">
                    <div className={cx('product-small')}>
                        {newListContent.map((item, index) => {
                            let CircleDiscount = () => {
                                return (
                                    <div className={cx('badge-news')}>
                                        <div className={cx('badge-circle')}>
                                            <div class={cx('badge-inner')}>
                                                <span class="post-date-day">{item.date}</span> <br />
                                                <span class="post-date-month is-xsmall">Th{item.month}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
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
                                                <a href="#">{item.title}</a>
                                            </div>
                                            <div className={cx('divider')}></div>
                                            <div className={cx('blog')}>{item.blog}</div>
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

export default NewsListContent;
