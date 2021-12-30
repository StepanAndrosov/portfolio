import styled from "styled-components";
import React from "react";

type StyledPropsType = {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    padding?: string
    bgColor?: string
    rounded?: string
}

const StyledFlex = styled.div<StyledPropsType>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: ${({align}) => align || 'stretch'};
  justify-content: ${({justify}) =>justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  background-color: ${props => props.bgColor || props.theme.colors.gray};
  border-radius: ${({rounded}) => rounded || '0'};
`

export const FlexContainer: React.FC<StyledPropsType> = (props) => {
    return <StyledFlex {...props} />
}
