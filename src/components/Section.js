import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Section() {
    const { t } = useTranslation();

    return (
        <section className="section">
            <nav>
                <NavLink to="/" exact>{t('header_links.home')}</NavLink>
                <NavLink to="/news">{t('header_links.news')}</NavLink>
                <NavLink to="/about">{t('header_links.about')}</NavLink>
                <NavLink to="/contact">{t('header_links.contact')}</NavLink>
                <NavLink to="/products">{t('header_links.products')}</NavLink>
            </nav>
            <div className="banner">Баннер</div>
        </section>
    );
}

export default Section;