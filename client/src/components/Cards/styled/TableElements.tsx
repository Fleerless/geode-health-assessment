import styled from "styled-components";

export const Table = styled.div`
    width: 90svw;
    margin-left: 5svw;
    margin-top: 5svh;
    margin-bottom: 5svh;

    border: 1px solid black;

    span:not(:first-child) {
        border-left: 1px solid black;
    }
`;

export const TableRow = styled.div<{ isEven?: boolean }>`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    background-color: ${({ isEven }) => (isEven ? "#e7e7fd" : "#ffeeee")};

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        padding: 5px;
        font-size: 0.9em;
    }
`;

export const TableHeader = styled.span`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    background-color: #eaeaea;
    
    span {
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
        font-size: 1.2em;
        font-weight: bold;
    }
`;

export const TableLabel = styled.span`
`;

export const TableData = styled.span`
    /* border: 1px solid black; */

`;