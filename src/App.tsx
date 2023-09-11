import React from 'react';
import './global.scss'
import { Layout } from './shared/Layout/Layout.tsx';
import { Header } from './shared/Header/Header.tsx';
import { Content } from './shared/Content/Content.tsx';

export const App = () => {
    return (
        <Layout>
            <Header />
            <Content>
                content
            </Content>
        </Layout>
    );
};

export default App;