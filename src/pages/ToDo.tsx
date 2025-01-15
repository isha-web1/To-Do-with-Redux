import ToDoContainer from "../components/toDo/ToDoContainer";
import Container from "../components/UI/Container";


const ToDo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-semibold my-10">My todos</h1>
            <ToDoContainer/>
        </Container>
    );
};

export default ToDo;