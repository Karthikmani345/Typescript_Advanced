// interface TodoRead {
//     title: string;
// }

type TodoRead = {
    title: string;
}

const todo: Readonly<TodoRead> = {
    title: 'Delete inactive users',
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
