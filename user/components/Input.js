import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
`;

export default function Input(props) {
  return <StyledInput {...props} />
}