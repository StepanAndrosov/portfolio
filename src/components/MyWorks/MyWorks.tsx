import {FlexContainer} from "../styledComponents/FlexContainer/FlexContainer";
import styled from "styled-components";
import socialNetImg from "../../static/social-network.png"
import todoList from "../../static/todolist.jpg"
import {MyButton} from "../styledComponents/MyButton/MyButton";
import React from "react";

const WorksCard = styled(FlexContainer)`
  max-width: 1440px;
  background-color: ${props => props.theme.colors.purple};
`
const CardsBlock = styled(FlexContainer)`
  width: 100%;
  background-color: inherit;
`
const WorkCard = styled(FlexContainer)`
  max-width: 550px;

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};

    h2 {
      color: ${props => props.theme.colors.mediumBlack};
    }

    p {
      color: ${props => props.theme.colors.mediumBlack};
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
  position: relative;
  margin: 10px auto;
  max-width: 400px;
  text-align: center;
`
const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`
const DescBlock = styled.div`
`
const DescText = styled.p`
  font-size: 18px;
  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 16px;
  }
`
const BtnPrimary = styled(MyButton)`
  width: 50%;
  left: 25%;
  top: 40%;
  @media (max-width: 425px) {
    width: 60%;
    left: 20%;
  }
`

const defaultTitle = "Мои работы"
const defaultWorks = [
    {
        title: "Социальная сеть",
        img: socialNetImg,
        description: "Проект 'Социальная сеть' создан с помощью библиотеки Реакт. Менеджер состояния - Редакс. API используется с ресурса https://social-network.samuraijs.com/docs"
    },
    {
        title: "Список дел",
        img: todoList,
        description: "Проект 'Список дел' создан с помощью библиотеки Реакт. Менеджер состояния - Редакс. API используется с ресурса https://social-network.samuraijs.com/docs"
    },
]
const defaultButtonText = 'Посмотреть'
type WorksType = typeof defaultWorks
type MyWorksType = {
    title?: string
    works?: WorksType
    btnText?: string
}

export const MyWorks:React.FC<MyWorksType> = ({ works, title, btnText}) => {

    const handler = title ? title : defaultTitle
    const myWorks = works ? works : defaultWorks
    const btnTitle = btnText ? btnText : defaultButtonText

    return (
        <WorksCard
            direction={'column'}
            margin={'20px auto'}
            padding={'30px'}
            rounded={'20px'}
            align={'center'}
        >
            <TitleText id={'works'}>{handler}</TitleText>
            <CardsBlock justify={'space-around'}>
                {
                    myWorks.map((work, idx )=> <WorkCard
                            key={work.title}
                            direction={'column'}
                            align={'center'}
                            padding={'20px'}
                            rounded={'20px'}
                            margin={'20px auto'}
                        >
                            <h2 style={{fontSize: '20px'}}>{work.title}</h2>
                            <ImgBlock>
                                <Image src={defaultWorks[idx].img}/>
                                <BtnPrimary btnText={btnTitle} position={'absolute'}/>
                            </ImgBlock>
                            <DescBlock>
                                <DescText>{work.description}</DescText>
                            </DescBlock>
                        </WorkCard>
                    )
                }
            </CardsBlock>
        </WorksCard>
    )
}
