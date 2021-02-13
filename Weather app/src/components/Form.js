import styled from 'styled-components';

const Input = styled.input`
  margin-top: 2.2rem;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 0 0 0 15px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: #fff;
  border: 1px solid transparent;
  padding: 8px 12px;
  background-color: #4358e2;
  border-radius: 0 15px 0 0;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Form = props => {
    return (
        <form action="" onSubmit={props.onSubmit}>
            <Input
                type="text"
                placeholder="Search Cities..."
                onChange={props.inputHandler}
                value={props.inputValue}/>
            <Button type="submit">Search</Button>
        </form>
    )
};

export default Form;