import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import type { DropResult } from 'react-beautiful-dnd';
import { OrderManagerComponent } from './OrderManager.component';
import type { Order } from '../../cores/models/Order';
import type { Column } from '../../cores/interfaces/Column';
import { useUserContext } from '../../cores/contexts/user/User.context';

const itemsFromBackend: Order[] = [
	{ id: '1', userName: 'Jean Casquette', foods: ['Sprite', 'Burger'] },
	{ id: '2', userName: 'Marie Claquette', foods: ['Coca', 'Pizza'] },
];

const board: Column[] = [
	{
		name: 'En Attente de Préparation',
		items: itemsFromBackend,
	},
	{
		name: 'En Cours de Préparation',
		items: [],
	},
	{
		name: 'En Attente de Livraison',
		items: [],
	},
	{
		name: 'En Cours de Livraison',
		items: [],
	},
];

const onDragEnd = (result: DropResult, columns: Column[], setColumns: Dispatch<SetStateAction<Column[]>>) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};
export const OrderManagerContainer = () => {
	const [columns, setColumns] = useState<Column[]>(board);
	const { checkLogin } = useUserContext();

	useEffect(() => {
		checkLogin();
	});

	return (
		<OrderManagerComponent
			columns={columns}
			setColumns={setColumns}
			onDragEnd={onDragEnd}
		/>
	);
};
