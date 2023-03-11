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

      <label
        htmlFor="task"
        className="block mx-auto w-1/2 mb-2 text-sm font-medium text-gray-900"
      >
        タスク
      </label>

      <input
        id="task"
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        className="mx-auto w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        required
      />

      <button
        type="button"
        onClick={handleClick}
        className="block my-10 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2focus:outline-none"
      >
        タスクを追加する
      </button>
    </form>
  )
}

export default Form
