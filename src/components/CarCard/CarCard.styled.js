import theme from 'GlobalStyle/themeJSX';
import styled from 'styled-components';

export const ContainerCarCard = styled.li`
  position: relative;
  padding: 10px;
  width: 274px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 14px;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  img {
    width: 274px;
    height: 268px;
    object-fit: cover;
    object-position: center center;
    border-radius: 14px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    scale: 1.03;
  }
`;

export const ImgWrapper = styled.div`
  margin-bottom: 14px;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  h2 {
    color: ${theme.colors.primaryDark};
    font-size: 16px;
    font-weight: 500;
    line-height: calc(24 / 16);
    margin-right: 9px;
  }

  span {
    color: ${theme.colors.primaryAccent};
  }
`;

export const CardFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.$marginBottom || '28px'};
  gap: 5px;

  flex-grow: 1;
  span {
    border-left: 1px solid #1214171a;
  }
`;

export const FeatureContainer = styled.div`
  color: ${theme.colors.secondaryGrayTextCard};
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);

  white-space: nowrap;
`;

export const FirstLine = styled.div`
  display: flex;
  gap: 6px;
  overflow: hidden;
`;

export const SecondLine = styled.div`
  display: flex;
  gap: 6px;
  overflow: hidden;
`;

export const ButtonHeard = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  stroke: red;
  background-color: transparent;

  &:hover {
    scale: 1.1;
  }
`;
