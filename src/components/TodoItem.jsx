import React from "react";
import styled from "styled-components";

export default function TodoItem(props) {
  const { title, isComplete, id } = props.todo;
  return (
    <Container showBottomBorder={props.isLastItem}>
      <Checkbox type="checkbox" checked={isComplete} />
      <CheckboxImage />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25vw;

  border-top: 3px solid var(--border-color);
  border-bottom: ${(props) =>
    props.showBottomBorder ? "3px solid var(--border-color)" : 0};
`;

const Checkbox = styled.input`
  width: 20%;
  height: 65%;
`;

const CheckboxImage = styled.img``;

const Title = styled.p`
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.03rem;
  line-height: 1.3rem;

  margin-left: 4vw;

  width: 65%;
`;
