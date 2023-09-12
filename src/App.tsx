import React from 'react';
import './global.scss'
import { Layout } from './shared/Layout/Layout.tsx';
import { Header } from './shared/Header/Header.tsx';
import { Content } from './shared/Content/Content.tsx';
import { CardsList } from './shared/CardsList/CardsList.tsx';

export const App = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
};

export default App;