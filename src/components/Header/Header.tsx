import styled, {keyframes} from "styled-components";
import React from "react";

const borderAnimation = keyframes`
  0% {
    border-bottom: 5px solid #353945;
  }
  100% {
    border-bottom: 5px solid #45B26B;
  }
`
const HeaderWrapper = styled.header`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #353945;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`
const UlElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  padding-left: 0;
`
const LiElement = styled.li`
  list-style-type: none;
  padding-right: 20px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;

`
const LinkElement = styled.a`
  text-decoration: none;
  padding-bottom: 5px;
  font-size: 18px;

  &:hover {
    animation: ${borderAnimation} 1000ms linear;
    border-bottom: 5px solid #45B26B;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`
const TitleText = styled.h1`
  font-size: 28px;
  margin-right: 10px;
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 24px;
    margin-right: 15px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`

const Select = styled.select`
  max-width: 50px;
  height: 35px;
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.gray};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  @media (max-width: 425px) {
    align-self: end;
    margin-right: 15px;
    margin-top: 10px;
  }

  option {
    color: ${props => props.theme.colors.mediumBlack};
    background: ${props => props.theme.colors.lightGray};
    display: flex;
    font-size: 14px;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
    @media (max-width: 425px) {
      max-width: 50px;
      min-height: 15px;
      font-size: 14px;
      padding: 0;
    }
  }
`

const headerLinksDefault = [
    {title: 'Главная', link: '#home'},
    {title: 'Скиллы', link: '#skills'},
    {title: 'Работы', link: '#works'},
    {title: 'Контакты', link: '#contakts'}
]

type HeaderLinksType = typeof headerLinksDefault

const headerDefault = 'Моё портфолио'

type HeaderPropsType = {
    lang: string
    setLang: (lang: string) => void
    links?: HeaderLinksType
    title?: string
}
export const Header: React.FC<HeaderPropsType> = ({lang, setLang, title, links}) => {

    const onChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(event.target.value)
    }

    const titleHeader = title ? title : headerDefault
    const navLinks = links ? links : headerLinksDefault

    return (
        <HeaderWrapper>
            <TitleText>{titleHeader}</TitleText>
            <UlElement>
                {
                    navLinks.map(item => <LiElement key={item.title}>
                        <LinkElement href={item.link}>{item.title}</LinkElement>
                    </LiElement>)
                }
            </UlElement>
            <Select onChange={onChangeLang} value={lang}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </Select>
        </HeaderWrapper>
    )
}
