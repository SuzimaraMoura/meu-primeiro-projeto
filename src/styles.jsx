import styled from "styled-components";
export const ButtonInput = styled.button`
    background-color: #10e910;
    color: black;
    height: 35px;
    width: 100px;
    font-weight: bold;
    font-size: 18px;
    border-style: none;
    border-radius:8px;    
    margin-left:10px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

`
export const Container = styled.div`
    background-color: #802ea0;
    border-radius: 10px;
    padding: 20px;

    h1{
        color: white;
        font-size: 50px;
    }

    input{
        height: 35px;
        outline: none;
        border-radius: 5px;
        margin-top: 35px;
        border: none;
        padding-left: 10px;
        font-size: 20px;
    }

`
export const ProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: white;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p{
        text-transform: capitalize;
        font-size: 25px;
        font-weight: bold;
    }
`
export const ButtonDelete = styled.button `
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    border: none;
`

