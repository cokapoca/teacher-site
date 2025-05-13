import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <article className="article">
            <h1>{t('home')}</h1>
            <p>Добро пожаловать на сайт педагога-филолога!</p>
        </article>
    );
}

export default Home;