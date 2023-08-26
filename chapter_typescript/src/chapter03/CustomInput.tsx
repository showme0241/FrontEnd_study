import React from "react";
import { Control, useController } from "react-hook-form";
import { FormValues } from "./FormTest";

interface CustomInputProps {
    control: Control<FormValues>;
    name: keyof FormValues;
    label: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    control,
    name,
    label,
}) => {
    const {
        field: { value, onChange, onBlur },
        fieldState: { error: errors },
    } = useController({ control, name });

    return (
        <div>
            <label>{label}</label>
            <input value={value} />
            {errors && <span>errors.message</span>}
        </div>
    );
};
