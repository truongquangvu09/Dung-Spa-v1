import React from 'react';
import classNames from 'classnames/bind';
import styles from './ViewPayCartRight.module.scss';
const cx = classNames.bind(styles);

function ViewPayCartRight() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('checkout-sidebar')}>
                    <h3>Đơn hàng của bạn</h3>
                    <div className={cx('order-review')}>
                        <table>
                            <thead>
                                <tr>
                                    <th class={cx('product-name')}>Sản phẩm</th>
                                    <th class={cx('product-total')}>Tạm tính</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class={cx('cart_item')}>
                                    <td class={cx('product-name')}>
                                        Dành cho nam&nbsp; <strong class={cx('product-quantity')}>×&nbsp;1</strong>{' '}
                                    </td>
                                    <td class={cx('product-total')}>
                                        <span class={cx('Price-amount')}>
                                            <span class={cx('Price-currencySymbol')}>₫</span>430,000.00
                                        </span>{' '}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class={cx('cart-subtotal')}>
                                    <th>Tạm tính</th>
                                    <td>
                                        <span class={cx('Price-amount')}>
                                            <span class={cx('Price-currencySymbol')}>₫</span>430,000.00
                                        </span>
                                    </td>
                                </tr>
                                <tr class={cx('order-total')}>
                                    <th>Tổng</th>
                                    <td>
                                        <strong>
                                            <span class={cx('Price-amount')}>
                                                <span class={cx('Price-currencySymbol')}>₫</span>430,000.00
                                            </span>
                                        </strong>{' '}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className={cx('checkout-payment')}>
                            <ul>
                                <li>
                                    <input type="radio" id="bank" name="checkout" value="bank" checked />

                                    <label>Chuyển khoản ngân hàng</label>
                                    <p>
                                        {' '}
                                        Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử
                                        dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao
                                        sau khi tiền đã chuyển.
                                    </p>
                                </li>
                                <li>
                                    <input type="radio" id="check" name="checkout" value="check" checked />

                                    <label>Kiểm tra thanh toán</label>
                                    <p>
                                        {' '}
                                        Vui lòng gửi chi phiếu của bạn đến Tên cửa hàng, Đường của cửa hàng, Thị trấn
                                        của cửa hàng, Bang / Hạt của cửa hàng, Mã bưu điện cửa hàng.
                                    </p>
                                </li>
                                <li>
                                    <input type="radio" id="off" name="checkout" value="off" checked />

                                    <label>Trả tiền mặt khi nhận hàng</label>
                                    <p> Trả tiền mặt khi giao hàng</p>
                                </li>
                            </ul>
                            <div className="form-row">
                                <button type="submit">Đặt hàng</button>
                            </div>
                        </div>
                        <div className={cx('privacy-text')}>
                            <p>
                                Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng
                                website, và cho các mục đích cụ thể khác đã được mô tả trong{' '}
                                <a href="">chính sách riêng tư</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPayCartRight;
