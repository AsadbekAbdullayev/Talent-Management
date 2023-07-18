import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import styled from 'styled-components';

export const LogoIcon = styled(Logo)`
  width: ${({ width }) => (width ? width : '153px')};
  height: ${({ height }) => (height ? height : '150px')};
  height: ${({ height }) => (height ? height : 'var(--appTableIconSize)')};
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  path {
    fill: ${({ color }) => color || '#000'};
  }
  &:hover {
    path {
      fill: ${({ hovercolor }) => hovercolor && hovercolor};
    }
  }
`;