import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  margin-left: ${p => p.theme.space[4]}px;
`;
export const ButtonItem = styled.li`
  margin-right: ${p => p.theme.space[4]}px;
  :last-child {
    margin-right: 0;
  }
`;
export const Button = styled.button`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => buttonColor(p)};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.buttonBg};
  }
`;

function buttonColor(button) {
  switch (button.name) {
    case 'good':
      return button.theme.colors.good;
    case 'neutral':
      return button.theme.colors.neutral;
    case 'bad':
      return button.theme.colors.bad;
    default:
      return button.theme.colors.stats;
  }
}
