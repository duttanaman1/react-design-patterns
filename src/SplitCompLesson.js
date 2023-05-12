import { SplitScreen } from "./SplitScreen";
import styled from "styled-components";

export const SplitCompLesson = () => {
  const LeftHandComponent = ({ name }) => {
    return <h1 style={{ backgroundColor: "red" }}>{name}</h1>;
  };
  const RighthandComponent = ({ message }) => {
    return <p style={{ backgroundColor: "green" }}>{message}</p>;
  };
  return (
    <SplitScreen leftWeight={1} RightWeight={3}>
      <LeftHandComponent name={"Lefft Side name"} />
      <RighthandComponent message={"Right Message here"} />
    </SplitScreen>
  );
};
