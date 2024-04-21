import { useState } from 'react'
import { OctagonAlert } from 'lucide-react'
import { Task, TaskProps } from './components/task'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newTask) return alert('Digite uma tarefa válida!')
    setTasks([...tasks, { id: String(Date.now()), title: newTask }])
    setNewTask('')
  }

  function onDeleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-zinc-950 px-8 pb-5 pt-40">
      <h1 className="text-5xl font-bold text-green-400">Tarefas</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-lg gap-3">
        <input
          type="text"
          placeholder="Digite sua próxima tarefa!"
          className="w-full rounded-sm bg-zinc-600 px-4 py-3 text-white outline-none placeholder:text-gray-300"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          type="submit"
          className=" group flex items-center justify-center rounded-sm bg-green-400 px-4 py-1 shadow-sm transition-colors duration-300 hover:bg-green-500"
        >
          <span className="font-medium text-zinc-800 group-hover:text-white">
            Adicionar
          </span>
        </button>
      </form>

      <section className="mt-8 flex min-h-20 w-full max-w-lg flex-col gap-2 rounded-sm border border-green-300 p-4">
        {tasks.length === 0 && (
          <div className=" m-auto flex gap-2 text-gray-200">
            <OctagonAlert />
            <span className="font-semibold">Lista vazia</span>
          </div>
        )}

        {tasks.map(({ id, title }) => {
          return (
            <Task key={id} title={title} id={id} onDeleteTask={onDeleteTask} />
          )
        })}
      </section>
    </main>
  )
}

export default App
