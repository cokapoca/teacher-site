import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t('footer')}</p>
            <p>+7 908 517 50 43 | WhatsApp | Telegram</p>
        </footer>
    );
}

export default Footer;