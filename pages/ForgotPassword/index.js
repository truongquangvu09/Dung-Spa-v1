import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Register/Register.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Vui lòng nhập email   !')
                .matches(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    'Địa chỉ email không hợp lệ',
                ),
        }),
        onChange: (e) => setEmail(e.target.value),
        onSubmit: (values) => {
            values.preventDefault();
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h3 className={cx('title')}>Forgot Password</h3>
                <form className={cx('info-form')} onSubmit={formik.onSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Nhập vào email của bạn"
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <p className={cx('errorMsg')}>{formik.errors.email}</p>
                    ) : null}
                    <button>Kiểm tra</button>
                    <div className={cx('footer')}>
                        <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
