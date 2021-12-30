import styled from "styled-components";
import {FlexContainer} from "../styledComponents/FlexContainer/FlexContainer";
import {MyButton} from "../styledComponents/MyButton/MyButton";
import React from "react";


const DistanceWorkingCard = styled(FlexContainer)`
  max-width: 1440px;
  background-color: ${props => props.theme.colors.yellow};
`
const TitleText = styled.h2`
  color: ${props => props.theme.colors.mediumBlack};
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 40px;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 22px;
  }
`
const BtnPrimary = styled(MyButton)`
  max-width: 300px;
  margin: 5px auto;
`
const FormBlock = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 15px 40px;
  @media (max-width: 425px) {
    padding: 0;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    padding: 10px 20px;
  }
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  height: 30px;
  margin-bottom: 30px;
  @media (max-width: 425px) {
    height: 20px;
  }
`
const Textarea = styled.textarea`
  margin-bottom: 30px;
`
const FormText = styled(TitleText)`
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 22px;
  }
`
const defaultText = 'Рассматриваю варианты удаленной работы'
const defaultHireButton = 'Нанять меня'
const defaultFormBtn = 'Отправить'
const defaultFormText = 'Контакты'

type DistanceWorkingType = {
    distanceWorking: {
        title?: string
        hireBtn?: string
        formBtn?: string
        formTitle?: string
    }
}

export const DistanceWorking:React.FC<DistanceWorkingType> = ({distanceWorking}) => {

    const title = distanceWorking.title ? distanceWorking.title : defaultText
    const hireBtn = distanceWorking.hireBtn ? distanceWorking.hireBtn : defaultHireButton
    const formTitle = distanceWorking.formTitle ? distanceWorking.formTitle : defaultFormText
    const formBtn = distanceWorking.formBtn ? distanceWorking.formBtn : defaultFormBtn

    return (
        <DistanceWorkingCard
            direction={'column'}
            margin={'20px auto'}
            padding={'30px'}
            rounded={'20px'}
            align={'center'}
        >
            <TitleText id={'contacts'}>{title}</TitleText>
            <BtnPrimary btnText={hireBtn}/>
            <FormText>{formTitle}</FormText>
            <FormBlock>
                <Form>
                    <Input type="text"/>
                    <Input type="text"/>
                    <Textarea/>
                    <BtnPrimary btnText={formBtn}/>
                </Form>
            </FormBlock>

        </DistanceWorkingCard>
    )
}
