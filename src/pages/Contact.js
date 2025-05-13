import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <article className="article">
            <h1>{t('contact')}</h1>
            <p>{t('contact_phone')}</p>
            <p>WhatsApp | Telegram</p>
            <form>
                <label htmlFor="question">Ваш вопрос:</label>
                <textarea id="question" rows="4"></textarea>
                <button type="submit">Отправить</button>
            </form>
        </article>
    );
}

export default Contact;