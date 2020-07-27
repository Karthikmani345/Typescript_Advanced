// *** Constructs a  new  type by picking from the existing.

interface TodoPick {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<TodoPick, 'title' | 'completed'>;

const todoP: TodoPreview = {
    title: 'Clean room',
    completed: false,
};