import { styled } from 'styled-components';
import { media } from '../../themes/media';
import { useNavigate } from 'react-router-dom';
import { LargeButton, SmallButton } from '../../component/Button.styles';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginText>Login</LoginText>
        <LoginInputBox>
          <LoginInputIcon>
            <ion-icon name="information-outline"></ion-icon>
          </LoginInputIcon>
          <LoginInputField type="text" placeholder="Userid" id="userid" />
        </LoginInputBox>

        <LoginInputBox>
          <LoginInputIcon>
            <ion-icon name="key-outline"></ion-icon>
          </LoginInputIcon>

          <LoginInputField placeholder="Password" id="password" type="password" />
        </LoginInputBox>
        <LargeButton type="submit">Submit</LargeButton>
        <SignupBox>
          <p>Don't have any account?</p>
          <SmallButton onClick={(e) => e.preventDefault()}>Sign up</SmallButton>
        </SignupBox>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => {
    props.theme.colors.background[2];
  }};
`;
const LoginForm = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background[1]};
  padding: 30px 30px 30px 30px;
  border-radius: 30px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
`;
const LoginText = styled.p`
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-h2);
  margin-bottom: 30px;
`;
const LoginInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const LoginInputIcon = styled.span`
  position: absolute;
  left: 10px;
`;
const LoginInputField = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding-left: 30px;
  color: ${(props) => props.theme.colors.text.title};
  background-color: transparent;
  font-size: var(--font-size-body-regular);
  font-weight: var(--font-weight-body-regular);
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.text.caption};
  border-radius: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary.normal};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.text.bodySubtle};
    font-size: var(--font-size-body-regular);
    font-weight: var(--font-weight-body-regular);
  }
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & p {
    font-size: var(--font-size-body-regular);
    font-weight: var(--font-weight-body-regular);
    color: ${(props) => props.theme.colors.text.title};
  }
`;
