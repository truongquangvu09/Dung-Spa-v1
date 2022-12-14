import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classNames from 'classnames/bind';
import styles from './Tab.module.scss';
import { productDetail } from '../../../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { db } from '../../../../FireBase/FireBase';
import { doc, getDoc } from 'firebase/firestore';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function TabContent(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabContent.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    function GetCurrentProducts() {
        useEffect(() => {
            const getProducts = async () => {
                const docRef = doc(db, `products`, id);
                const docSnap = await getDoc(docRef);
                setProduct(docSnap.data());
            };
            getProducts();
        }, []);
        return product;
    }

    GetCurrentProducts();
    const Description = () => {
        return <p>{product.productDescriptionDetail}</p>;
    };
    const Review = () => {
        return (
            <div className={cx('review-wrapper')}>
                <div className={cx('comment')}>
                    <h3 className={cx('review-title')}>????nh gi??</h3>
                    <p className={cx('no-review')}>Ch??a c?? ????nh gi?? n??o</p>
                </div>
                <div className={cx('review-form-wrapper')}>
                    <div className={cx('review-form')}>
                        <div className={cx('review-form-inner')}>
                            <h3 className={cx('reply-title')}>
                                H??y l?? ng?????i ?????u ti??n ????nh gi?? " {product.productName} "
                            </h3>
                            <form action="" className={cx('comment-form')}>
                                <div className={cx('comment-rating')}>
                                    <label htmlFor="">????nh gi?? c???a b???n</label>

                                    <p>
                                        <span className={cx('stars')}>
                                            <a href="#" className={cx('star-1')}>
                                                <FontAwesomeIcon icon={faStar} />
                                            </a>
                                            <a href="#" className={cx('star-1')}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </a>
                                            <a href="#" className={cx('star-1')}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </a>
                                            <a href="#" className={cx('star-1')}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </a>
                                            <a href="#" className={cx('star-1')}>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <p className={cx('comment-form-comment')}>
                                    <label htmlFor="" className={cx('comment')}>
                                        Nh???n x??t c???a b???n *
                                    </label>
                                    <textarea name="comment" id="comment" cols="45" rows="8"></textarea>
                                </p>
                                <div className={cx('info')}>
                                    <p className={cx('comment-form-author', 'author')}>
                                        <label htmlFor="" className={cx('comment')}>
                                            T??n *
                                        </label>
                                        <input type="text" />
                                    </p>
                                    <p className={cx('comment-form-author')}>
                                        <label htmlFor="" className={cx('comment')}>
                                            Email *
                                        </label>
                                        <input type="email" />
                                    </p>
                                </div>
                                <p className={cx('comment-form-cookies')}>
                                    <input id="consent" type="checkbox" value="yes" />
                                    <label htmlFor="consent">
                                        L??u t??n c???a t??i, email, v?? trang web trong tr??nh duy???t n??y cho l???n b??nh lu???n k???
                                        ti???p c???a t??i.
                                    </label>
                                </p>
                                <p className={cx('form-submit')}>
                                    <input
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        class="submit"
                                        value="G???i ??i"
                                    ></input>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={cx('shared')} label="M?? t???" {...a11yProps(0)} />
                        <Tab className={cx('shared')} label="????nh gi??" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabContent value={value} index={0}>
                    <div className={cx('description')}>{Description()}</div>
                </TabContent>
                <TabContent className={cx('review')} value={value} index={1}>
                    {Review()}
                </TabContent>
            </Box>
        </div>
    );
}
export default BasicTabs;
