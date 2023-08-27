'use client'
import { Logo } from "@components/common/Logo";
import { Check } from "iconoir-react";
import { NextPage } from "next";
import Link from "next/link";
import {
  ChangeEventHandler,
  FormEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import styled from "styled-components";

const LogoAnchor = styled(Link)`
  position: absolute;
  top: ${({ theme }) => theme.size[6]};
  left: ${({ theme }) => theme.size[9]};
`;

const LogoLink = () => (
  <LogoAnchor href="/" aria-label="Go home link">
    <Logo />
  </LogoAnchor>
);

const Container = styled.div`
  height: 100%;
  display: grid;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/images/ES-en-20220226-popsignuptwoweeks-perspective_alpha_website_small.jpg);
  background-color: ${({ theme }) => theme.color?.black};
  background-size: cover;
  background-repeat: no-repeat;

  & > * {
    grid-area: 1/1;
  }
`;

const FormWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.size[8]};
  width: 100%;
  max-width: 23.75rem;
  place-self: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding: ${({ theme }) => theme.size[12]};
  border-radius: ${({ theme }) => theme.size['1.5em']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.text['4xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
`;

const Form = styled.form`
  display: grid;
  row-gap: ${({ theme }) => theme.size[5]};
`;

const Label = styled.label`
  display: grid;
  background-color: ${({ theme }) => theme.color.gray_700};
  border-radius: ${({ theme }) => theme.size['1em']};
  overflow: hidden;
  align-items: center;
  border-bottom: ${({ theme }) => `2px solid ${theme.color.orange}`};

  & > * {
    background-color: transparent;
    grid-area: 1/1;
  }
`;

const LabelText = styled.span`
  display: inline-block;
  pointer-events: none;
  z-index: 1;
  transition: 200ms ease-in-out;
  color: ${({ theme }) => theme.color.gray_400};
  transform: ${({ theme }) => `translateX(${theme.size[4]})`};
`;

const Input = styled.input`
  padding-inline: ${({ theme }) => theme.size[4]};
  padding-top: ${({ theme }) => theme.size[4]};
  line-height: ${({ theme }) => theme.leading[8]};
  border: none;
  color: ${({ theme }) => theme.color.white};

  &.has-text + ${LabelText}, &:focus + ${LabelText} {
    font-size: ${({ theme }) => theme.text.xs};
    transform: ${({ theme }) => `translate(${theme.size[4]}, -75%)`};
  }
`;
const InputPasswordWrapper = styled.div`
  display: grid;

  & > * {
    grid-area: 1/1;
  }
`;

const TogglePassWordVisibiliy = styled.button`
  justify-self: end;
  position: relative;
  z-index: 1;
  background-color: transparent;
  appearance: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  outline: none;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.text.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray_400};
  padding-left: 0;
  padding-right: ${({ theme }) => theme.size[4]};
`;

const Footer = styled.footer`
  align-self: end;
`;

const SigninButton = styled.button`
  appearance: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  line-height: ${({ theme }) => theme.leading[12]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.color.brand};
  border-radius: ${({ theme }) => theme.size['1em']};
  cursor: pointer;
`;

type InputFieldDefaultProps = InputHTMLAttributes<HTMLInputElement>;

type InputFieldProps = InputFieldDefaultProps & {
  label: string;
};

type PasswordFieldProps = InputFieldDefaultProps & {
  isVisible?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomCheckbox = styled.div`
  color: ${({ theme }) => theme.color.white};

  [type="checkbox"] {
    appearance: none;
  }

  label {
    display: grid;
    grid-template: "checkbox text" auto / auto 1fr;
    column-gap: ${({ theme }) => theme.size[4]};
    align-items: center;
  }

  input,
  svg {
    grid-area: checkbox;
  }

  span {
    display: inline-block;
    width: ${({ theme }) => theme.size[4]};
    height: ${({ theme }) => theme.size[4]};
    background-color: ${({ theme }) => theme.color.gray_400};
    grid-area: text;
  }
`;

const InputCheckbox = ({ label, ...props }: InputFieldProps) => (
  <CustomCheckbox>
    <label>
      <input type="checkbox" {...props} />
      <Check />
      <span>{label}</span>
    </label>
  </CustomCheckbox>
);

const InputField = forwardRef(
  (
    { label, ...props }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <Label>
      <Input ref={ref} {...props} />
      <LabelText>{label}</LabelText>
    </Label>
  )
);

InputField.displayName = "InputField";

const PasswordField = forwardRef(
  (
    { isVisible = false, onClick, ...props }: PasswordFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <InputPasswordWrapper>
      <InputField
        ref={ref}
        type={isVisible ? "password" : "text"}
        label="Password"
        {...props}
      />
      <TogglePassWordVisibiliy type="button" onClick={onClick}>
        {isVisible ? "Show" : "Hide"}
      </TogglePassWordVisibiliy>
    </InputPasswordWrapper>
  )
);

PasswordField.displayName = "PasswordField";

const Login: NextPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function togglePasswordVisibility() {
    setIsVisible((previousState) => !previousState);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <Container>
      <LogoLink />

      <FormWrapper>
        <Title>Sign in</Title>
        <Form onSubmit={handleSubmit}>
          <InputField
            className={fields.email && "has-text"}
            onChange={handleChange}
            required
            value={fields.email}
            name="email"
            label="Email or phone number"
            type="email"
          />
          <PasswordField
            className={fields.password && "has-text"}
            onChange={handleChange}
            isVisible={isVisible}
            required
            onClick={togglePasswordVisibility}
            name="password"
            value={fields.password}
          />
          <SigninButton type="submit">Sign in</SigninButton>
          <footer>
            <InputCheckbox label="Remember me" />
            <p>Need help?</p>
          </footer>
        </Form>
      </FormWrapper>
      <Footer>footer element</Footer>
    </Container>
  );
};

export default Login;
