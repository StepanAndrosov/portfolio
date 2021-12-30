import styled from "styled-components";
import {FlexContainer} from "../styledComponents/FlexContainer/FlexContainer";
import reactLogo from "../../static/react-logo.png"
import reduxLogo from "../../static/Redux.png"
import typeScriptLogo from "../../static/ts-logo.png"
import jsLogo from "../../static/js_logo.png"
import React from "react";

const FooterWrapper = styled.footer`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid #353945;
`
const TitleText = styled.h1`
  font-size: 28px;
  margin: 15px;
`
const LinkBlock = styled(FlexContainer)`
  background-color: ${props => props.theme.colors.lightBlack};
`
const ImgBlock = styled.div`
  margin: 15px;
  max-width: 50px;
  text-align: center;
`
const Image = styled.img`
  max-width: 100%;
`
const defaultRights = '©2022 Все права защищены'
const links = [reactLogo, reduxLogo, typeScriptLogo, jsLogo]
const nameDefault = 'Степан Андросов'

type FooterType = {
    rights?: string
    name?: string
}

export const Footer: React.FC<FooterType> = ({name,rights}) => {

    const titleName = name ? name : nameDefault
    const titleRights = rights ? rights : defaultRights

    return (
        <FooterWrapper>
            <TitleText>{titleName}</TitleText>
            <LinkBlock>
                {
                    links.map(img => <ImgBlock key={img}>
                            <Image src={img}/>
                        </ImgBlock>
                    )
                }
            </LinkBlock>
            <p>{titleRights}</p>
        </FooterWrapper>
    )
}
