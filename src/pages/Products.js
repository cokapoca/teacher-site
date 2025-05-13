import React from 'react';
import { useTranslation } from 'react-i18next';

function Products() {
    const { t } = useTranslation();

    return (
        <article className="article">
            <h1>{t('products')}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Услуга</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Курс по литературе</td>
                        <td>1000 руб.</td>
                    </tr>
                    <tr>
                        <td>Подготовка к экзаменам</td>
                        <td>1500 руб.</td>
                    </tr>
                </tbody>
            </table>
            <a href="/files/course.pdf" download>Скачать описание курса</a>
        </article>
    );
}

export default Products;