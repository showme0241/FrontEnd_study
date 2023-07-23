import { useParams } from "react-router-dom";
import Editor from "./Editor";

export default function Edit() {
    const { idx } = useParams();

    return (
        <div>
            <Editor isEdit={true} idx={Number(idx)} />
        </div>
    );
}
