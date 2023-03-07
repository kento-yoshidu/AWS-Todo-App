import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Header from './components/Header'

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
    <div className={styles.container}>

      <Header />

      {data && (
        <ul>
          {data.tasks.map((task) => {
            return (
              <li key={task.id}>{task.title}</li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Home
