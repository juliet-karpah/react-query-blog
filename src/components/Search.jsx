import { styled } from "styled-components";

const Form = styled.form`
  position: relative;
  margin: 100px 35%;

`;

const Input = styled.input`
  background-color: white;
  border: 1px solid #160224;
  border-radius: 4px;
  height: 50px;
  width: 300px;
  padding: 4px 0px 4px 8px;
`;

const Button = styled.button`
  background-color: #9900ff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.25s;
  position: absolute;
  left: 200px;
  top: 11px;
  &:hover {
    background-color: #160224;
  }
`;

export default function SearchForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.search.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="search" type="text" />
      <Button type="submit"> Search </Button>
    </Form>
  );
}
