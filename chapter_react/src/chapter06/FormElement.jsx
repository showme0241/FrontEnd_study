import { useController } from "react-hook-form";

const FormElement = ({ control, name, label }) => {
    const {
        field,
        fieldState: { error: errors },
    } = useController({ control, name });

    return (
        <>
            <label>{label}</label>
            <input
                type={name === "password" ? "password" : "text"}
                {...field}
            />
            {errors && <p>{errors.message}</p>}
        </>
    );
};

export default FormElement;
