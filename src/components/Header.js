import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header({ changeLanguage }) {
    const { t } = useTranslation();

    return (
        <header className="header">
            <img src="/logo.svg" alt="Logo" className="logo" />
            <nav>
                <NavLink to="/" exact>{t('header_links.home')}</NavLink>
                <NavLink to="/news">{t('header_links.news')}</NavLink>
                <NavLink to="/about">{t('header_links.about')}</NavLink>
                <NavLink to="/contact">{t('header_links.contact')}</NavLink>
                <NavLink to="/products">{t('header_links.products')}</NavLink>
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            </nav>
        </header>
    );
}

export default Header;