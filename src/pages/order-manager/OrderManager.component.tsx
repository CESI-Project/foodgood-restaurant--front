import type { DropResult } from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './OrderManager.component.scss';
import type { Dispatch, SetStateAction } from 'react';
import type { Column } from '../../cores/interfaces/Column';

interface OrderManagerComponentProps {
	columns: any;
	setColumns: any;
	onDragEnd: (result: DropResult, columns: Column[], setColumns: Dispatch<SetStateAction<Column[]>>) => void;
}

export const OrderManagerComponent = ({ onDragEnd, columns, setColumns }: OrderManagerComponentProps) => (
	<div className='order-manager'>
		<DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
			{Object.entries(columns).map(([columnId, column]) => (
				<div
					className='order-manager__column'
					key={columnId}
				>
					<h2>{column.name}</h2>
					<Droppable
						droppableId={columnId}
						key={columnId}
					>
						{provided => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className='order-manager__column__droppable'
							>
								{column.items.map((item, index) => (
									<Draggable
										key={item.id}
										draggableId={item.id}
										index={index}
									>
										{draggableProvided => (
											<div
												ref={draggableProvided.innerRef}
												{...draggableProvided.draggableProps}
												{...draggableProvided.dragHandleProps}
												className='order-manager__column__droppable__item'
											>
												<div className='order-manager__column__droppable__item__title'>{item.userName}</div>
												{item.foods.map((food: string) => (
													<li
														className='order-manager__column__droppable__item__food'
														key={food}
													>
														{food}
													</li>
												))}
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			))}
		</DragDropContext>
	</div>
);
