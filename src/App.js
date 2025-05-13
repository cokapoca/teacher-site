import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import Aside from './components/Aside';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import './styles.css';

function App() {
    const [language, setLanguage] = useState('ru');

    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <div className="container">
                    <Header changeLanguage={changeLanguage} />
                    <main className="main">
                        <Section />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/news" component={News} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/products" component={Products} />
                        </Switch>
                        <Aside />
                    </main>
                    <Footer />
                </div>
            </Router>
        </I18nextProvider>
    );
}

export default App;