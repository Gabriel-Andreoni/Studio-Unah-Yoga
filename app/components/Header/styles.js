import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;

    box-shadow: 0 0 5px #00000050;

`;

export const Navigation = styled.nav`
    width: 40%;
`;

export const Menu = styled.ul`
    width: 100%;
    height: 100%;

    padding: 1em;

    display: flex;
    justify-content: space-around;

    list-style: none;
`;

export const MenuItem = styled.li`
    font-size: 1.3em;

    color: #F4E3B7;
    
    cursor: pointer;
`;

export const ContactButton = styled.button`
    width: 10%;

    padding: 1em;

    border: 1px solid transparent;
    border-radius: .25em;

    background: #F8B396;

    transition: all 300ms ease-in-out;

    cursor: pointer;

    &:hover {
        border-color: #F8B396;

        background: #F8B39650;

        color: #F4E3B7;
    }

`;