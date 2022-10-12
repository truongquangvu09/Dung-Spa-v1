import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsList.module.scss';
import { newsList } from '../../../data/data';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function NewsList() {
    return (
        <div>
            {newsList.map((news, index) => {
                return (
                    <ul className={cx('news-item')}>
                        <li className={cx('post')} key={index}>
                            <div className={cx('post-image')}>
                                <img src={news.img} alt="" />
                            </div>
                            <Link to="/Shop/New_Detail">
                                <a className={cx('word-wrap')} href="#">
                                    {news.content}
                                </a>
                            </Link>
                        </li>
                    </ul>
                );
            })}
        </div>
    );
}

export default NewsList;
