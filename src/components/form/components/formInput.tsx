import React, { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { formInputStyles } from "./formInput.styles";

type FormInputProps = Omit<TextInputProps, "styles">;

const FormInput: FC<FormInputProps> = (props) => {
    return <TextInput style={formInputStyles.input} {...props} />;
};

export default FormInput;
