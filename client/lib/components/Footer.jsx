import React from 'react';
import { Link } from "react-router-dom";

export default  class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
          <div className="footer__">
            <nav className="footer__left gr">
              <Link to="/" className="footer__left-logo">
              <span className="icon-brand"></span></Link>
              <Link to="/" className="nav__logo-brand-name f_36" href="/">
                Tech<span className="bold">Forum</span></Link>
              <ul className="footer__left-ul medium f_24">
                <li className="footer__left-li">
                  <Link to="*" className="g_4 footer__left-a">
                  TRANG CHỦ</Link>
                </li>
                {/* <li className="footer__left-li">
                  <Link to="*" className="g_4 footer__left-a">
                  HỔ TRỢ</Link>
                </li> */}
                <li className="footer__left-li">
                  <Link to="*" className="g_4 footer__left-a">
                  ĐIỂU KHOẢN & QUY ĐỊNH</Link>
                </li>
                <li className="footer__left-li">
                  <Link to="*" className="g_4 footer__left-a">
                  CHÍNH SÁCH QUYỀN RIÊNG TƯ</Link>
                </li>
                <li className="footer__left-li">
                  <Link to="*" className="g_4 footer__left-a">
                  QUẢNG CÁO</Link>
                </li>
              </ul>
            </nav>
            <div className="footer__right">
              <Link to="*" className="footer__rightlogo g_4">
              <span className="icon-facebook"></span>
              </Link>
              <Link to="*" className="footer__rightlogo g_4">
              <span className="icon-twitter"></span>
              </Link>
              <Link to="*" className="footer__rightlogo g_4">
              <span className="icon-instagram"></span>
              </Link>
            </div>
          </div>
          <p className="footer__copyright medium f_24 g_4">©2018 GiaBao DucDuy.</p>
      </footer>
    );
  }
}
