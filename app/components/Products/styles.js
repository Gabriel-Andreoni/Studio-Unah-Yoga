import styled from "styled-components";
import Image from "next/image";

export const ProductsContainer = styled.section`
    width: 100%;
    height: auto;

`;

export const ListProducts = styled.ul`
    width: 100%;
    height: 100%;

    margin-top: 2em;
    margin-bottom: 2em;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;

    list-style: none;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 4em;

        padding: 1em;
    }

`;

export const ProductItem = styled.li`
    width: 25%;
    height: 100%;

    display: flex;
    flex-direction: column;

    border-bottom: 2px solid #A1AA7F;
    border-radius: .25em;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    overflow: hidden;

    transition: all 300ms ease-in-out;

    &:hover {
        translate: 0 -10%;

        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

`;

export const ProductHeader = styled.div`
    width: 100%;
    height: 50%;

`;

export const ProductImage = styled(Image)`
   width: 339px;
   
   transition: scale 200ms ease-in-out;

   &:hover {
        scale: 1.1;
   }

   @media (max-width: 480px) {
        width: 100%;
   }
`;


export const ProcuctContent = styled.div`
    width: 100%;
    height: 50%;

    padding: 1em;


`;

export const ProductTitle = styled.h4`
    font-size: 1em;


`;

export const ProductDescription = styled.p`
    margin-top: 1em;

    font-size: .8em;
`;

export const ProductButton = styled.button`
    width: 100%;

    margin-top: 1em;

    padding: .5em;

    border: 0;
    border-radius: .25em;

    background: green;

    font-size: .9em;

    cursor: pointer;

`;

