import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display:flex;
    align-items:center;
    box-shadow: var(--shadow);

    border-radius: var(--radius);
    width: 100%;
    margin-bottom: 1rem;

    @media(min-width: 767px){
        width:280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    margin-left: 2rem;
    border: none;
    outline: none;

    background-color: var(--color-bg);
    color: var(--color-text)
`;

export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />

        </InputContainer>
    )
}
