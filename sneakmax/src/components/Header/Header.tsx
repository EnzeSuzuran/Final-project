import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import CartModal from '../Cart/CartModal';
import styles from './header.module.css';
import CartIcon from '../../images/Cart.svg';

const Header: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const cartCount = useSelector((state: RootState) => state.counter.value);
    const location = useLocation();

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    React.useEffect(() => {
        if (location.pathname === '/cart') {
            setModalOpen(false);
        }
    }, [location]);

    return (
        <div className={styles.headerAbout}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1>SneakMax</h1>
                    <nav>
                        <Link to="/">Каталог</Link>
                        <Link to="/">О нас</Link>
                        <Link to="/">Подбор товара</Link>
                        <Link to="/">Наша команда</Link>
                        <Link to="/">Доставка и оплата</Link>
                        <Link to="/">Контакты</Link>
                        <Link to="/cart" className={styles.cartLink} onClick={toggleModal}>
                            Корзина
                            <img src={CartIcon} alt="Корзина" className={styles.cartIcon} />
                            <span className={styles.cartCount}>{cartCount}</span>
                        </Link>
                    </nav>
                </div>
                {isModalOpen && <CartModal isOpen={isModalOpen} onClose={toggleModal} />}
            </header>
            <div className={styles.about}>
                <p className={styles.backText}>SneakMax</p>
                <div className={styles.aboutUs}>
                    <div className={styles.aboutUsContent}>
                        <h1 >Кроссовки известных брендов с доставкой по России и СНГ</h1>
                        <h2 >Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</h2>
                        <button>
                            <Link to="/catalog">
                                Перейти к покупкам
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
