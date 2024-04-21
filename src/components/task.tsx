import { Draggable } from '@hello-pangea/dnd'
import { Trash2 } from 'lucide-react'

export type TaskProps = {
  id: string
  title: string
  onDeleteTask?: (id: string) => void
  index?: number
}

export function Task({ title, id, onDeleteTask, index }: TaskProps) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provider) => (
        <div
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          className="flex min-h-12 items-center justify-between rounded-sm bg-zinc-900 p-4 text-gray-50"
        >
          <span className="font-semibold text-gray-50">{title}</span>
          <button onClick={() => onDeleteTask(id)} className="">
            <Trash2
              size={18}
              className="text-gray-400 transition-colors hover:text-red-500"
            />
          </button>
        </div>
      )}
    </Draggable>
  )
}
