import { Form } from "./components/Form/Form";
import { GlobalStyles } from "./GlobalStyles";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <StyledApp>
      <Form />
      <GlobalStyles />
    </StyledApp>
  );
};
