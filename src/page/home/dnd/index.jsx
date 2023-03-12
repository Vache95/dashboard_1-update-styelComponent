import { height } from '@mui/system';
import { useState, lazy } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// import Column from './column';
import './dnd.scss';
const Column = lazy(() => import('./column'));
const initialData = {
  tasks: {
    1: { id: 1, content: '111' },
    2: { id: 2, content: '22222' },
    3: { id: 3, content: '333333' },
    4: { id: 4, content: '4444444' },
    5: { id: 5, content: '5555' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TO-DO',
      taskIds: [1, 2],
    },
    'column-2': {
      id: 'column-2',
      title: 'IN-PROGRESS',
      taskIds: [3],
    },
    'column-3': {
      id: 'column-3',
      title: 'COMPLETED',
      taskIds: [4, 5],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

const Dnd = () => {
  const [state, setState] = useState(initialData);
  console.log(state, 'state');

  const add = () => {
    const id = 'column-1';
    const idd = 6;
    const addarr = [];
    const addobj = {};
    for (const property in state.columns) {
      if (state.columns[property].id === id) {
        addarr.push([...state.columns[property].taskIds, idd]);
        addobj[idd] = { id: idd, content: 'test test' };
      }
    }

    setState({
      tasks: { ...state.tasks, ...addobj },
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'TO-DO',
          taskIds: [...addarr[0]],
        },
        'column-2': {
          id: 'column-2',
          title: 'IN-PROGRESS',
          taskIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'COMPLETED',
          taskIds: [],
        },
        'column-4': {
          id: 'column-4',
          title: 'COMPLETED',
          taskIds: [],
        },
      },
      columnOrder: [...state.columnOrder],
    });
  };

  const changednd = (items) => {
    if (items === 1) {
      const test = [];
      const arr = [];
      for (const property in state.columns) {
        if (state.columns[property].taskIds.length >= 1) {
          arr.push(state.columns[property].taskIds);
          test.push(state.columns[property]);
        } else if (state.columns[property].taskIds.length === 0) {
          arr.push(state.columns[property].taskIds);
          test.push(state.columns[property]);
        }
      }
      const arrMutation = [];
      if (arr.length === 1) {
        arrMutation.push(...arr[0]);
      } else if (arr.length === 2) {
        arrMutation.push(...arr[0], ...arr[1]);
      } else if (arr.length === 3) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2]);
      } else if (arr.length === 4) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2], ...arr[3]);
      }
      const tasksarr = [];
      arrMutation.filter((e) => {
        for (const property2 in state.tasks) {
          if (state.tasks[property2].id === e) {
            tasksarr.push(state.tasks[property2]);
          }
        }
      });

      const obj = {};
      tasksarr.filter((e) => {
        obj[e.id] = e;
      });

      setState({
        tasks: { ...obj },
        columns: {
          'column-1': {
            id: 'column-1',
            title: test[0].title,
            taskIds: arrMutation,
          },
        },
        columnOrder: ['column-1'],
      });
    } else if (items === 2) {
      const arr = [];
      for (const property in state.columns) {
        if (state.columns[property].taskIds.length >= 1) {
          arr.push(state.columns[property].taskIds);
        } else if (state.columns[property].taskIds.length === 0) {
          arr.push(state.columns[property].taskIds);
        }
      }
      const arrMutation = [];
      if (arr.length === 1) {
        arrMutation.push(...arr[0]);
      } else if (arr.length === 2) {
        arrMutation.push(...arr[0], ...arr[1]);
      } else if (arr.length === 3) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2]);
      } else if (arr.length === 4) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2], ...arr[3]);
      }
      const tasksarr = [];
      arrMutation.filter((e) => {
        for (const property2 in state.tasks) {
          if (state.tasks[property2].id === e) {
            tasksarr.push(state.tasks[property2]);
          }
        }
      });

      const obj = {};
      tasksarr.filter((e) => {
        obj[e.id] = e;
      });
      setState({
        tasks: { ...obj },
        columns: {
          'column-1': {
            id: 'column-1',
            taskIds: arrMutation,
          },
          'column-2': {
            id: 'column-2',
            taskIds: [],
          },
        },
        columnOrder: ['column-1', 'column-2'],
      });
    } else if (items === 3) {
      const arr = [];
      for (const property in state.columns) {
        if (state.columns[property].taskIds.length >= 1) {
          arr.push(state.columns[property].taskIds);
        } else if (state.columns[property].taskIds.length === 0) {
          arr.push(state.columns[property].taskIds);
        }
      }
      const arrMutation = [];
      if (arr.length === 1) {
        arrMutation.push(...arr[0]);
      } else if (arr.length === 2) {
        arrMutation.push(...arr[0], ...arr[1]);
      } else if (arr.length === 3) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2]);
      } else if (arr.length === 4) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2], ...arr[3]);
      }
      const tasksarr = [];
      arrMutation.filter((e) => {
        for (const property2 in state.tasks) {
          if (state.tasks[property2].id === e) {
            tasksarr.push(state.tasks[property2]);
          }
        }
      });

      const obj = {};
      tasksarr.filter((e) => {
        obj[e.id] = e;
      });
      setState({
        tasks: { ...obj },
        columns: {
          'column-1': {
            id: 'column-1',
            taskIds: arrMutation,
          },
          'column-2': {
            id: 'column-2',
            taskIds: [],
          },
          'column-3': {
            id: 'column-3',
            taskIds: [],
          },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
      });
    } else if (items === 4) {
      const arr = [];
      for (const property in state.columns) {
        if (state.columns[property].taskIds.length >= 1) {
          arr.push(state.columns[property].taskIds);
        } else if (state.columns[property].taskIds.length === 0) {
          arr.push(state.columns[property].taskIds);
        }
      }
      const arrMutation = [];
      if (arr.length === 1) {
        arrMutation.push(...arr[0]);
      } else if (arr.length === 2) {
        arrMutation.push(...arr[0], ...arr[1]);
      } else if (arr.length === 3) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2]);
      } else if (arr.length === 4) {
        arrMutation.push(...arr[0], ...arr[1], ...arr[2], ...arr[3]);
      }
      const tasksarr = [];
      arrMutation.filter((e) => {
        for (const property2 in state.tasks) {
          if (state.tasks[property2].id === e) {
            tasksarr.push(state.tasks[property2]);
          }
        }
      });

      const obj = {};
      tasksarr.filter((e) => {
        obj[e.id] = e;
      });
      setState({
        tasks: { ...obj },
        columns: {
          'column-1': {
            id: 'column-1',
            taskIds: arrMutation,
          },
          'column-2': {
            id: 'column-2',
            taskIds: [],
          },
          'column-3': {
            id: 'column-3',
            taskIds: [],
          },
          'column-4': {
            id: 'column-4',
            taskIds: [],
          },
        },
        columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
      });
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log(result, 'res');
    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(sourceCol, source.index, destination.index);

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };
  const deleteFunc = (columName, id) => {

    if (columName.id === 'column-1') {
      setState({
        tasks: { ...state.tasks },
        columns: {
          ...state.columns,
          'column-1': {
            id: 'column-1',
            title: 'TO-DO',
            taskIds: [1],
          },

          // 'column-2': {
          //   id: 'column-2',
          //   title: 'IN-PROGRESS',
          //   taskIds: [...state.columns['column-2'].taskIds],
          // },
          // 'column-3': {
          //   id: 'column-3',
          //   title: 'COMPLETED',
          //   taskIds: [...state.columns['column-3'].taskIds],
          // },
        },
        columnOrder: [...state.columnOrder],
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dnd">
        {/* <span onClick={add}>add</span> */}
        <div className="dnd__container">
          {state?.columnOrder?.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column?.taskIds?.map((taskId) => state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} deleteFunc={deleteFunc} />;
          })}
        </div>
        <span
          style={{
            width: '100px',
            height: '30px',
            display: 'block',
            float: 'left',
            border: '1px solid black',
            padding: '5px',
            marginRigth: '5px',
            cursor: 'pointer',
          }}
          onClick={() => changednd(1)}>
          add 1
        </span>
        <span
          style={{
            width: '100px',
            height: '30px',
            display: 'block',
            float: 'left',
            border: '1px solid black',
            padding: '5px',
            marginRigth: '5px',
            cursor: 'pointer',
          }}
          onClick={() => changednd(2)}>
          add 2
        </span>
        <span
          style={{
            width: '100px',
            height: '30px',
            display: 'block',
            float: 'left',
            border: '1px solid black',
            padding: '5px',
            marginRigth: '5px',
            cursor: 'pointer',
          }}
          onClick={() => changednd(3)}>
          add 3
        </span>
        <span
          style={{
            width: '100px',
            height: '30px',
            display: 'block',
            float: 'left',
            border: '1px solid black',
            padding: '5px',
            marginRigth: '5px',
            cursor: 'pointer',
          }}
          onClick={() => changednd(4)}>
          add 4
        </span>
        <span
          style={{
            width: '100px',
            height: '30px',
            display: 'block',
            float: 'left',
            border: '1px solid red',
            padding: '5px',
            marginRigth: '5px',
            cursor: 'pointer',
          }}
          onClick={add}>
          add
        </span>
      </div>
    </DragDropContext>
  );
};

export default Dnd;
