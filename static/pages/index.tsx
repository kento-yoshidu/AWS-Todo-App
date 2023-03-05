import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { cpSync } from 'fs'

type Task = {
  id: string
  title: string
}

type Tasks = {
  tasks: Task[]
}

/*
function useData<T>(url: string): T | undefined {
  const data$ = useRef<T>()

  const subscribe = useCallback(
    (onStoreChange: () => void): (() => void) => {
      const controller = new AbortController()

      fetch(url, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          data$.current = data

          onStoreChange()
        })

      return () => {
        controller.abort()
      }
    },
    [url]
  )

  return useSyncExternalStore(subscribe, () => data$.current)
}
*/

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
      <h1>AWS Todo App 0.0.1</h1>
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

/*
export const getServerSideProps = () => {


}
*/