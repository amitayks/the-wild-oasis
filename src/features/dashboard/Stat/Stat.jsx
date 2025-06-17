import { Icon, StyledStat, Title, Value } from "./Stat.styled";

export const Stat = ({ icon: StatIcon, title, value, color }) => {
  return (
    <StyledStat>
      <Icon color={color}>{<StatIcon />}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
};

export default Stat;
