export interface ContextItem {
    id?: number;
    title: string;
    content: string;
}

export interface ContextFunc {
    onCreate: (title: string, content: string) => void;
    onRemove: (id: number) => void;
    onUpdate: (id: number, title: string, content: string) => void;
}
