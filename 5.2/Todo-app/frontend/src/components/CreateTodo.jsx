import { useState } from "react";

export function CreateTodo({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />

      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        value={description}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={async () => {
          const res = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });

          if (res.ok) {
            setTitle("");
            setDescription("");
            await onTodoCreated();
            alert("Todo added");
          }
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
