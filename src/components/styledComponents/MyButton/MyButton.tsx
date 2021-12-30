import styled, {keyframes} from "styled-components";

export const bgAnimation = keyframes`
  0% {
    background-color: #353945;
  }
  100% {
    background-color: #45B26B;
  }
`
const MyBtnPrimary = styled.button<BtnPropsType>`
  position: ${({position}) => position || 'static'};
  border-radius: 20px;
  border: 2px solid ${props => props.theme.colors.lightBlack};
  font-size: 20px;
  font-weight: bold;
  padding: 5px 35px;
  background-color: ${props => props.theme.colors.gray};
  &:hover {
    animation: ${bgAnimation} 1000ms linear;
    background-color: ${props => props.theme.colors.green};
  }
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 18px;
    padding: 5px 15px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    padding: 5px;
  }
`
type BtnPropsType = {
    btnText: string
    position?: string
}

export const MyButton: React.FC<BtnPropsType> = (props) => {
    return <MyBtnPrimary {...props}>{props.btnText}</MyBtnPrimary>
}
