import React from 'react';
import { Container } from "./layout.style";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
                <main>
                    {children}
                </main>
        </Container>
    );
};

export default Layout;