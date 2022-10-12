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
    const Description = () => {
        return productDetail.map((item, index) => {
            return <p>{item.desc_detail}</p>;
        });
    };
    const Review = () => {
        return productDetail.map((item, index) => {
            return (
                <div className={cx('review-wrapper')}>
                    <div className={cx('comment')}>
                        <h3 className={cx('review-title')}>Đánh giá</h3>
                        <p className={cx('no-review')}>Chưa có đánh giá nào</p>
                    </div>
                    <div className={cx('review-form-wrapper')}>
                        <div className={cx('review-form')}>
                            <div className={cx('review-form-inner')}>
                                <h3 className={cx('reply-title')}>Hãy là người đầu tiên đánh giá {item.name}</h3>
                                <form action="" className={cx('comment-form')}>
                                    <div className={cx('comment-rating')}>
                                        <label htmlFor="">Đánh giá của bạn</label>

                                        <p>
                                            <span className={cx('start')}>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={cx('shared')} label="Mô tả" {...a11yProps(0)} />
                        <Tab className={cx('shared')} label="Đánh giá" {...a11yProps(1)} />
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
