import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;
export const SplitScreen = ({ Children, leftWeight = 1, RightWeight = 1 }) => {
  const [left, right] = Children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      con
      <Pane weight={RightWeight}>{right}</Pane>
    </Container>
  );
};
