import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default () => {
    return (
        <Container>
            <Menu
                inverted
                style={{
                    display: 'flex',
                    marginTop: '10px',
                    flexDirection: 'column'
                    //minHeight: '100vh'
                }}
            >
                <Menu.Item name="browse">
                    &copy; 2018 Michael C Pennington
                </Menu.Item>

                <Menu.Item name="submit">Contact Me</Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item name="signup">FAQs</Menu.Item>

                    <Menu.Item name="help">Help</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    );
};
