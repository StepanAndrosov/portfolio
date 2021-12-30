import styled from "styled-components";
import {FlexContainer} from "../styledComponents/FlexContainer/FlexContainer";
import reactLogo from "../../static/react-logo.png"
import reduxLogo from "../../static/Redux.png"
import typeScriptLogo from "../../static/ts-logo.png"
import React from "react";

const SkillsCard = styled(FlexContainer)`
  max-width: 1440px;
  background-color: ${props => props.theme.colors.purple};
`
const Flex = styled(FlexContainer)`
  background-color: inherit;
`
const SkillCard = styled(FlexContainer)`
  flex-direction: column;
  padding: 20px;
  margin: 20px;

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};

    h2 {
      color: ${props => props.theme.colors.mediumBlack};
    }

    p {
      color: ${props => props.theme.colors.mediumBlack};
    }
  }
  @media (max-width: 425px) {
    margin: 20px 0;
  }
`
const TitleText = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 20px;
  @media (max-width: 425px) {
    font-size: 24px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 28px;
  }
`
const ImgBlock = styled.div`
  margin: 15px auto;
  max-width: 150px;
  text-align: center;
  
  @media (max-width: 425px) {
    max-width: 80px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    max-width: 120px;
  }
`
const Image = styled.img`
  max-width: 100%;
`
const NameSkill = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
const TextBlock = styled.div`
  max-width: 400px;
`
const Description = styled.p`
  font-size: 18px;
`
const defaultSkills = [
    {
        id: '1',
        title: 'React',
        logo: reactLogo,
        description: 'React - JS библиотека для создания пользовательских интерфейсов. Я познакомился с ней более года назад, с тех пор пишу учебные проекты на ней'
    },
    {
        id: '2',
        title: 'Redux',
        logo: reduxLogo,
        description: 'Redux - самый популярный менеджер состояний для React. Освоил эту библиотеку вместе с React, так же использую дополнительные библиотеки, такие как: React-Redux, Redux-thunk, Redux-toolkit.'
    },
    {
        id: '3',
        title: 'TypeScript',
        logo: typeScriptLogo,
        description: 'TypeScript - язык программирования, расширяющий возможности JavaScript. Пишу приложения в основном на TS, так как статическая типизация упрощает разработку'
    }
]
const defaultTitle = "Мои Навыки"

type SkillsType = typeof defaultSkills
type MySkillsType = {
    mySkills?: SkillsType
    title?: string
}

export const MySkills: React.FC<MySkillsType> = ({mySkills, title}) => {

    const skills = mySkills ? mySkills : defaultSkills
    const header = title ? title : defaultTitle

    return (
        <SkillsCard justify={'space-around'}
                    padding={'30px'}
                    rounded={'20px'}
                    align={'center'}
                    margin={'20px auto'}
                    direction={'column'}
        >
            <TitleText>{header}</TitleText>
            <Flex justify={'center'}>
                {
                    skills.map((skill, idx) => <SkillCard rounded={'15px'}
                                                          align={'center'}
                                                          key={skill.id}>
                        <NameSkill id={'skills'}>{skill.title}</NameSkill>
                        <ImgBlock>
                            <Image src={defaultSkills[idx].logo} alt={skill.title + 'logo'}/>
                        </ImgBlock>
                        <TextBlock>
                            <Description>{skill.description}</Description>
                        </TextBlock>
                    </SkillCard>)
                }
            </Flex>

        </SkillsCard>
    )
}
