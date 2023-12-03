import theme from 'CommonStyle/themeJSX';
import styled from 'styled-components';

export const ContainerCarCard = styled.div`
width: 274px;
display: flex;
flex-direction: column;

img{
width: 274px;
height: 268px;
object-fit: cover;
object-position: center;

border-radius: 14px;
/* background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2; */
}
`

export const ImgWrapper = styled.div`
position: relative;

margin-bottom: 14px;
`

export const CardTitleWrapper = styled.div`
display: flex;
margin-bottom: 8px;
justify-content: space-between;
h2{
color: ${theme.colors.primaryDark};
font-size: 16px;
font-weight: 500;
line-height: calc(24/16);
margin-right: 9px;
}

span{
color: ${theme.colors.primaryAccent};
}
`

export const CardFeatureWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 28px;
gap: 5px;

flex-grow: 1;

`

export const FeatureContainer = styled.div`
color: ${theme.colors.secondaryGrayTextCard};
font-size: 12px;
font-weight: 400;
line-height: calc(18/12);

white-space: nowrap;
`

export const FirstLine = styled.div`
display: flex;
gap:6px;
overflow: hidden;



span{
    height: 100%;
    width: 1px;
background-color: #1214171a;

}
`


export const SecondLine = styled.div`
display: flex;
gap:6px;
overflow: hidden;


span{
    height: 100%;
    width: 1px;
background-color: #1214171a;

}
`

