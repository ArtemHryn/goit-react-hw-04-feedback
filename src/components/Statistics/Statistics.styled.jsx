import styled from 'styled-components';

export const StatItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Stat = styled.p`
  color: ${p => statColor(p)};
`;

function statColor(stat) {
  switch (stat.children[0]) {
    case 'Good':
      return stat.theme.colors.good;
    case 'Neutral':
      return stat.theme.colors.neutral;
    case 'Bad':
      return stat.theme.colors.bad;
    default:
      return stat.theme.colors.stats;
  }
}
