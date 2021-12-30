import React from "react";
import styled from "styled-components";
import myImg from "../../static/my_img.jpg"
import {FlexContainer} from "../styledComponents/FlexContainer/FlexContainer";

const RepresentationCard = styled(FlexContainer)`
  margin: 40px auto;
  max-width: 1440px;
  background-color: ${props => props.theme.colors.blue};
`
const GreetingsBlock = styled.div`
  max-width: 350px;
  margin-bottom: 40px;
`
const GreetingsText = styled.p`
  font-size: 28px;
  font-weight: bold;
  @media (max-width: 425px) {
    font-size: 24px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
   font-size: 26px;
  }
`
const ImgBlock = styled.div`
  max-width: 450px;
`
const Image = styled.img`
  max-width: 100%;
  border-radius: 20px;
`
const greeting = 'Привет! Меня зовут Степан. Я front-end разработчик.'

type PresentationType = {
    presentation?: string
}

export const MyRepresentation: React.FC<PresentationType> = ({presentation}) => {

    const myPresent = presentation ? presentation : greeting

    return (
        <RepresentationCard
            justify={'space-around'}
            padding={'30px'}
            rounded={'20px'}
            align={'center'}
        >
            <GreetingsBlock >
                <GreetingsText>
                    {myPresent}
                </GreetingsText>
            </GreetingsBlock>
            <ImgBlock id={'home'}>
                <Image src={myImg}/>
            </ImgBlock>
        </RepresentationCard>
    )
}
