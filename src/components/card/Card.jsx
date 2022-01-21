import styled from 'styled-components';

const Wrapper = styled.article`
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
    background-color: var(--color-ui-base);
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    box-shadow: var(--shadow);
    object-fit: cover;
    object-position: center;
`;

const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
`;

const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5rem;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold)
    }
`;

export const Card = ({name, img, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(card=>(
                        <CardListItem key={card.title}>
                           <b>{card.title}</b>:{card.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}
