import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface TaskProps {
  task: {
    id: string
    content: string
  }
  index: number
}

const Task = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task