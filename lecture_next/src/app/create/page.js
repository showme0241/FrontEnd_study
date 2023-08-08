"use client";

// next 12버전에서는 next/router에 useRouter를 import한다.
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title, body }),
                };

                fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, options)
                    .then((res) => res.json())
                    .then((result) => {
                        router.refresh();
                        router.push(`/read/${result.id}`);
                    });
            }}
        >
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body" />
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    );
}
