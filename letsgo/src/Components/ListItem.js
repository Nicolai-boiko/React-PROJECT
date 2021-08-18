import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Item = styled.li`
    width: 400px;
    height: 155px;
    background-image: ${({img}) => `url(${img})`};
    position: relative;
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    font-size: 30px;
    color: white;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 40%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 40px 10px grey;
        &:after {
            opacity: 0;
        }
    }
`;

export const ListItem = ({itemList, setOpenItem}) => (
    <List>
        {itemList.map(item => (
            <Item 
                key={item.id} 
                img={item.img}
                onClick={() => setOpenItem(item)}
            >
                <p>{item.name}</p>
                <p>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
            </Item>
        ))}
    </List>
)