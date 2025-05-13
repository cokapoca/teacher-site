import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <article className="article">
            <h1>{t('about')}</h1>
            <p>Педагог-филолог с многолетним опытом.</p>
        </article>
    );
}

export default About;