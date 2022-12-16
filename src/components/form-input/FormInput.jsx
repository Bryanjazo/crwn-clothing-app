import React from "react";
import {
  FromInputLabel,
  Input,
  Group,
} from "../styles/form-input/forminput.styles";
export default function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FromInputLabel shrink={otherProps.value.length}>
          {label}
        </FromInputLabel>
      )}
    </Group>
  );
}
