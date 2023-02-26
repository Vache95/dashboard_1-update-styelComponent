import { useEffect, useRef, useState } from 'react';
import './dnd.scss';

const Dnd = () => {
  const ref1 = useRef('');
  const ref2 = useRef('');
  const [data, setData] = useState();
  const [currentBoard, setcurrentBoard] = useState(null);
  const [currentItem, setcurrentItem] = useState(null);
  const [boards, setBards] = useState([
    {
      id: 1,
      title: 'to do',
      items: [
        { id: 1, title: 'gos' },
        { id: 2, title: 'gof' },
        { id: 3, title: 'got' },
      ],
    },
    {
      id: 2,
      title: 'to do',
      items: [
        { id: 4, title: 'go' },
        { id: 5, title: 'go back' },
        { id: 6, title: 'go for' },
      ],
    },
    {
      id: 3,
      title: 'to do',
      items: [
        { id: 7, title: 'red' },
        { id: 8, title: 'go1' },
        { id: 9, title: 'go4' },
      ],
    },
  ]);
  const [tog, setTog] = useState(false);

  const func = () => {
    setTog(!tog);
  };
  useEffect(() => {
    setData(ref2.current.clientWidth);
  }, [tog]);
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className == 'item') {
      e.target.style.marginTop = '10px';
    }
  };
  const dragLeaveHandler = (e) => {
    e.target.style.marginTop = '0px';
  };
  const dragStartHandler = (e, board, item) => {
    setcurrentBoard(board);
    setcurrentItem(item);
  };
  const animationEndHandler = (e) => {
    e.target.style.marginTop = '0px';
  };
  const onDropHandler = (e, board, item) => {
    e.preventDefault();
    const cuurentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(cuurentIndex, 0);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    console.log(currentBoard, 'kk');
    setBards(
      boards.map((b) => {
        if (b.id == board.id) {
          console.log(currentBoard, 'a');
          return board;
        }
        if (b.id == currentBoard.id) {
          console.log(currentBoard, 'b');
          return currentBoard;
        }
        return b;
      }),
    );
  };
  const onDropboardHandler = (e, board) => {
    board.items.push(currentItem);
    const cuurentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(cuurentIndex, 1);
    setBards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  };
  return (
    <div className="dndcontainer">
      <div className="itemscont">
        <div className="items" ref={ref1} style={{ width: `calc(100% - ${data}px)` }}>
          <span onClick={func}>change</span>
          <div className="app">
            {boards.map((board) => (
              <div
                key={board.id}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => onDropboardHandler(e, board)}
                className="board">
                <div className="board__title">{board.title}</div>
                {board.items.map((item) => (
                  <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragEnd={(e) => animationEndHandler(e)}
                    onDrop={(e) => onDropHandler(e, board, item)}
                    key={item.id}
                    draggable={true}
                    className="item">
                    {item.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
      <div className={tog ? 'sidebaar' : 'pak'} ref={ref2}></div>
    </div>
  );
};

export default Dnd;
