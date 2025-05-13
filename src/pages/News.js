import React from 'react';
import { useTranslation } from 'react-i18next';

function News() {
    const { t } = useTranslation();

    return (
        <article className="article">
            <h1>{t('news')}</h1>
            <p>{t('news_text')}</p>
        </article>
    );
}

export default News;