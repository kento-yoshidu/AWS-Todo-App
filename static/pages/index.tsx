import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import Header from '../components/Header'
import Form from '../components/Form'
import { FONT_LOADER_MANIFEST } from 'next/dist/shared/lib/constants'

type Task = {
  id: string
  title: string
}

type Tasks = {
  tasks: Task[]
}

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/tasks`)

  const data = await res.json()

  return data
}

const Home: NextPage = () => {
  const [data, setData] = useState<Tasks | null>(null)

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <Header />

      <div className="my-16 w-1/2 mx-auto">
        {data && (
          <ul className="w-1/2 mx-auto my-12">
            {data.tasks.map((task) => {
              return (
                <li
                  key={task.id}
                  className="my-3 text-lg"
                >
                  ・ {task.title}
                </li>
              )
            })}
          </ul>
        )}

        <Form />
      </div>
    </div>
  )
}

export default Home
