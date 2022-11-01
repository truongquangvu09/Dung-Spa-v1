import classNames from 'classnames/bind';
import styles from './BookingContent.module.scss';
import React from 'react';
import { listItemMenuHomePage } from '../../../data/data';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles);

function BookingContent() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list_itemService')}>
                    <div className={cx('list_menu')}>
                        {listItemMenuHomePage.map((e, index) => (
                            <div className={cx('item_menu')}>
                                <div className={cx('w_img')}>
                                    <img className={cx('imgTT')} src={e.img} />
                                </div>
                                <div className={cx('title_of_imgitemmenu')}>
                                    <p className={cx('txt_imgitemmenu')}>{e.nameItem}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('wrap_info_cus')}>
                    <div className={cx('txt_title')}>
                        <h3 className={cx('txt_intro')}>CHÀO MỪNG ĐẾN DUNG SPA</h3>
                        <h2 className={cx('txt_Buy')}>ĐẶT NGAY</h2>
                    </div>
                    <div className={cx('is-right')}>
                        <div className={cx('form-inner')}>
                            <div className={cx('form-row')}>
                                <input type="text" placeholder="Họ và tên" />
                            </div>
                            <div className={cx('form-row')}>
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>
                        <div className={cx('form-inner')}>
                            <div className={cx('form-row')}>
                                <input type="text" placeholder="Số điện thoại" />
                            </div>
                        </div>
                        <div className={cx('form-inner')}>
                            <div className={cx('form-row')}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Chọn dịch vụ</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Massage</MenuItem>
                                            <MenuItem value={20}>Trị mụn</MenuItem>
                                            <MenuItem value={30}>Trị Thâm</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <div className={cx('message')}>
                            <textarea name="content" id="content" cols="30" rows="10" placeholder="Lời nhắn"></textarea>
                        </div>
                        <div className={cx('form-button')}>
                            <button type="submit">Đặt</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingContent;
