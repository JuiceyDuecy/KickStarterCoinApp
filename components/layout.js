import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default props => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </Container>
    );
};
