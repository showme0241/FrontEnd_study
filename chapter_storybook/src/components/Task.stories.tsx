import type { Meta, StoryObj } from "@storybook/react";
import { Task } from "./Task";

const meta: Meta<typeof Task> = {
    component: Task,
    // 스토리 렌더링 기능
    decorators: [(Task) => <Task />],
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Primary: Story = {
    args: {
        id: "1",
        state: "ok",
        title: "wake",
    },
    name: "I am the primary",
};

export const Secondary: Story = {
    args: {
        id: "2",
        state: "no",
        title: "sleep",
    },
    name: "I am the secondary",
};
