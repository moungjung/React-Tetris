import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.heigh},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeate(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
`