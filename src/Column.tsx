import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

interface ColumnProps {
  column: {
    id: string
    title: string
    taskIds: string[]
  }
  tasks: {
    id: string
    content: string
  }[]
}

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div className="column">
      <h3 className="column-title">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column