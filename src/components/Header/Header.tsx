import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #353945;
`
const UlBlock = styled.div`
  margin: 0;
`
const UlElement = styled.ul`
  display: flex;
  margin-left: 0;
  padding-left: 0;
`
const LiElement = styled.li`
  list-style-type: none;
  padding-right: 20px;
  font-size: 18px;
  font-weight: bold;
`
const LinkElement = styled.a`
  text-decoration: none;
`

const HeaderLinks = [
    {title: 'Главная', link: '#'},
    {title: 'Скиллы', link: '#'},
    {title: 'Работы', link: '#'},
    {title: 'Контакты', link: '#'}
]

export const Header: React.FC = () => {
    return <HeaderWrapper>
        <div>
            <h1>My Portfolio</h1>
        </div>
        <UlBlock>
            <UlElement>
                {HeaderLinks.map(item => <LiElement key={item.title}>
                    <LinkElement href={item.link}>{item.title}</LinkElement>
                </LiElement>)}
            </UlElement>
        </UlBlock>
    </HeaderWrapper>
}
