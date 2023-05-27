"use client"
import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

interface BoardProps {
  
}

const Board: React.FC<BoardProps> = ({}) => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(()=> {
     getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {

  }

  return (
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable type='column' droppableId='board' direction='horizontal'>
      {(provided) => (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
          {...provided.droppableProps}
          ref={provided.innerRef}
         >
          {
            Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column index={index} todos={column.todos} id={id} key={id} />
            ))
          }
        </div>
      )}
    </Droppable>
  </DragDropContext>
  )
}

export default Board;