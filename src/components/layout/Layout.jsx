import {Outlet} from 'react-router-dom';
import { Header } from '../header/header';

import styled from 'styled-components';
import {Container} from '../container/container'

const Wrapper = styled.main`
    padding: 2rem 0;

    @media(min-width:767px){
        padding: 4rem 0;
    }
`;

export const Layout = () => {
    return (
        <>
            <Header/>
            <Wrapper>
                 <Container>
                     <Outlet/>
                </Container>
            </Wrapper>

        </>
    )
}
