import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { funcContext, stateContext } from "../../../App";
import { Data } from "../../Hooks/useData";

interface EditProps {
    isEdit?: boolean;
    idx?: number;
}

export default function Editor(props: EditProps) {
    const { isEdit, idx } = props;
    const func = useContext(funcContext);
    const stateData = useContext(stateContext);

    const targetData = stateData?.find((it) => it.id === idx);

    const {
        register,
        formState: { errors: error },
        handleSubmit,
        watch,
    } = useForm<Data>();
    const navigate = useNavigate();

    const onSubmitHandler = (data: Data) => {
        const { title } = data;

        if (idx) {
            func?.onUpdate(idx as number, title);
            navigate("/");
        }

        if (!idx) {
            func?.onCreate(title);
            navigate("/");
        }
    };

    const Title = watch("title");

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label htmlFor="title">타이틀</label>
                <input
                    id="title"
                    type="text"
                    defaultValue={isEdit ? targetData?.title : Title}
                    {...register("title", {
                        required: { value: true, message: "입력해" },
                    })}
                />
                {error.title && <p>{error.title.message}</p>}
                <button type="submit">저장</button>
            </form>
        </div>
    );
}
