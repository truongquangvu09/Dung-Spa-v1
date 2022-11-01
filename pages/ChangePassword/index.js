import React from 'react';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../Register/Register.module.scss';
const cx = classNames.bind(styles);

function ChangePassword() {
    const formik = useFormik({
        initialValues: {
            email: '',
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Vui lòng nhập email   !')
                .matches(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    'Địa chỉ email không hợp lệ',
                ),
            oldPassword: Yup.string()
                .required('Vui lòng nhập mật khẩu cũ!')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,}$/,
                    'Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt',
                ),
            newPassword: Yup.string()
                .required('Vui lòng nhập mật khẩu mới!')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,}$/,
                    'Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt',
                ),
            confirmNewPassword: Yup.string()
                .required('Nhập lại mật khẩu mới')
                .oneOf([Yup.ref('newPassword'), null], 'mật khẩu không khớp'),
        }),
        onSubmit: (values) => {
            values.preventDefault();
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h3 className={cx('title')}>Change the Password</h3>
                <section>
                    <form className={cx('info-form')} onSubmit={formik.handleSubmit}>
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
                        <label> Mật khẩu cũ </label>
                        <input
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            placeholder="Nhập mật khẩu cũ của bạn"
                            value={formik.values.oldPassword}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.oldPassword && formik.touched.oldPassword ? (
                            <p className={cx('errorMsg')}>{formik.errors.oldPassword}</p>
                        ) : null}
                        <label> Mật khẩu mới </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Nhập mật khẩu cũ của bạn"
                            value={formik.values.newPassword}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.newPassword && formik.touched.newPassword ? (
                            <p className={cx('errorMsg')}>{formik.errors.newPassword}</p>
                        ) : null}
                        <label>Xác nhận mật khẩu mới</label>
                        <input
                            type="password"
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            placeholder="Nhập lại mật khẩu"
                            value={formik.values.confirmNewPassword}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmNewPassword && formik.touched.confirmNewPassword ? (
                            <p className={cx('errorMsg')}>{formik.errors.confirmNewPassword}</p>
                        ) : null}
                        <button>Xác nhận</button>
                        <div className={cx('footer')}>
                            <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default ChangePassword;
