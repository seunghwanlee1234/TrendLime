import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Container from '../../components/Container/index';
import ScrollToTop from '../../common/ScrollToTop/index';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const queryClient = new QueryClient();

function MainContents() {
    return (
        <div>
            <ScrollToTop />
            <Section1 />
            <Container>
                <Section2 />
                <Section3 />
                <Section4 />
            </Container>
        </div>
    );
}

function MainPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainContents />
        </QueryClientProvider>
    );
}

export default MainPage;
