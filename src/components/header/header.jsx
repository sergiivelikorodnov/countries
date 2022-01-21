import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Container } from '../container/container';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
    background: var(--color-bg);
    box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--color-text)
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    font-size: var(--fs-sm);
    color: var(--color-text)
    cursor: pointer;
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderEl>
          <Container>
            <Wrapper>
                <Title>Where is the world?</Title>
                <ModeSwitcher onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <IoMoonOutline size="14px"/>
                    ) : (
                        <IoMoon size="14px"/>
                    )}
                    <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                </ModeSwitcher>
            </Wrapper>
          </Container>
        </HeaderEl>
    )
}
