import { useState } from "react"

const Form = () => {
  const [task, setTask] = useState("")

  const handleClick = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify({
        title: task
      })
    })
  }

  return (
    <form>

      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button
        type="button"
        onClick={handleClick}
      >
        タスクを追加する
      </button>
    </form>
  )
}

export default Form
