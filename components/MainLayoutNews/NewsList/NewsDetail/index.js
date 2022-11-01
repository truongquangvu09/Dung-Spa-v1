import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function NewsDetailContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('post')}>
                <div className={cx('post-inner')}>
                    <header className={cx('entry-header')}>
                        <div className={cx('entry-header-text')}>
                            <p>TIN TỨC</p>
                            <h1>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                            </h1>
                            <div className={cx('divider')}></div>
                            <p>POSTED ON 24/12/2022 BY C1SE.15</p>
                        </div>
                        <div className={cx('entry-img')}>
                            <div className={cx('badge-entry')}>
                                <div className={cx('badge-circle')}>
                                    <div class={cx('badge-inner')}>
                                        <span class="post-date-day">24</span> <br />
                                        <span class="post-date-month is-xsmall">Th12</span>
                                    </div>
                                </div>
                            </div>
                            <img src="http://mauweb.monamedia.net/luxuryspa/wp-content/uploads/2019/12/5.jpg" alt="" />
                        </div>
                    </header>
                    <div className={cx('entry-content')}>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <h3>Why do we use it?</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using ‘Content here, content
                            here’, making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will
                            uncover many web sites still in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <nav className={cx('navigation-post')}>
                        <Link to="/News">
                            <a>
                                <FontAwesomeIcon
                                    style={{ marginRight: '10px', paddingLeft: '10px' }}
                                    icon={faAngleLeft}
                                />
                                Back to list
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className={cx('comment')}>
                <div className={cx('comment-respond')}>
                    <h3>Trả Lời</h3>
                    <form className={cx('comment-form')}>
                        <p className={cx('comment-notes')}>
                            <span>
                                Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *
                            </span>
                        </p>
                        <p className={cx('comment-form-comment')}>
                            <label>Bình Luận</label>
                            <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                        </p>
                        <p className={cx('comment-form-author')}>
                            <label>Tên *</label>
                            <input type="text" />
                        </p>
                        <p className={cx('comment-form-email')}>
                            <label>Email *</label>
                            <input type="text" />
                        </p>
                        <p className={cx('comment-form-url')}>
                            <label>Trang Web *</label>
                            <input type="text" />
                        </p>
                        <p className={cx('comment-form-consent')}>
                            <input type="checkbox" />
                            <label>
                                Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của
                                tôi.
                            </label>
                        </p>
                        <p className={cx('comment-form-submit')}>
                            <input type="submit" value="Phản hồi" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsDetailContent;
