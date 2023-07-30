import Task from "./Task";

export default {
    component: Task,
    title: "Task",
};

const Template = (args) => <Task {...args} />;

/**
 * { ...args } = { task : id, title, state, updateAt }
 *
 */

export const Default = Template.bind({});
// 함수 컨텍스트를 빈 객체로 바인딩 후, 객체 접근
// bind({ Default.args })
Default.args = {
    task: {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
        updateAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: "TASK_PINNED",
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: "TASK_ARCHIVED",
    },
};
