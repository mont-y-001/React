export function CreateTodo() {
    return <div>
        <input style={{
            padding: "10px",
            margin: "10px",
            width: "300px"
        }} type="text" placeholder="title" /><br />
        <input style={{
            padding: "10px",
            margin: "10px",
            width: "300px"
        }} type="text" placeholder="description" /><br />

        <button style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
        }}>Add a todo</button>
    </div>
}