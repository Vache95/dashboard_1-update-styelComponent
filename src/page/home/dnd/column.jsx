import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, tasks, deleteFunc }) => {
  return (
    <div className="column">
      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            className="column__container">
            {tasks?.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className={
                      draggableSnapshot.isDragging ? 'columnItem columnItem_ch' : 'columnItem'
                    }
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}>
                    {task.content}
                    <span onClick={() => deleteFunc(column, task.id)}>X</span>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
