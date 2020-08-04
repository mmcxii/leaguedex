import styled, { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";
import { Link as ReactLink } from "react-router-dom";

const GenericButton = css`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.85rem 1.1rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  cursor: pointer;

  ${(props) =>
    props.secondary &&
    css`
      background: ${(props) => props.theme.secondaryButton};
    `}

  ${(props) =>
    props.menu &&
    css`
      width: 48.5%;
    `}

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.form &&
    css`
      margin-top: 2rem;
      width: 100%;
    `}
`;

export const utils = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const Link = styled(ReactLink)`
  ${GenericButton}
`;

export const Button = styled.button`
  ${GenericButton}
`;

export default createGlobalStyle`
    ${normalize}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
      width: 100%;
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.third};
      font-family: 'Poppins', sans-serif;
    }

    .searchbar-icon {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }

    textarea:focus, input:focus{
      outline: none;
    }
`;
