import React from "react";
import styled from "styled-components";
import myImg from "../static/my_img.jpg"
import {FlexContainer} from "../FlexContainer/FlexContainer";

const RepresentationCard = styled(FlexContainer)`
   background-color: ${props => props.theme.colors.blue};
`
const GreetingsBlock = styled.div`
  max-width: 350px;
`
const GreetingsText = styled.p`
  font-size: 28px;
  font-weight: bold;
`
const ImgBlock = styled.div`
  max-width: 450px;
`
const Image = styled.img`
  margin-left: 10px;
  max-width: 350px;
  border-radius: 20px;
`
export const MyRepresentation: React.FC = () => {
    return (
        <RepresentationCard
            justify={'space-around'}
            margin={'40px 40px'}
            padding={'30px'}
            rounded={'20px'}
        >
            <GreetingsBlock>
                <GreetingsText>
                    Привет! Меня зовут Степан. <br/>
                    Я front-end разработчик.
                </GreetingsText>
            </GreetingsBlock>
            <ImgBlock>
                <Image src={myImg}/>
            </ImgBlock>
        </RepresentationCard>
    )
}
