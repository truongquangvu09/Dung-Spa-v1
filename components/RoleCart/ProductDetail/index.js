import React from 'react';
import HeadProductDetail from './Head';
import TabContent from './Tab';
import BasicTabs from './Tab';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('wrappers')}>
            <HeadProductDetail />
            <BasicTabs />
        </div>
    );
}

export default ProductDetail;
