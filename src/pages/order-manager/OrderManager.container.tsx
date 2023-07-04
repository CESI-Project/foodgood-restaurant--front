import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import type { DropResult } from 'react-beautiful-dnd';
import { OrderManagerComponent } from './OrderManager.component';
import type { Order } from '../../cores/models/Order';
import type { Column } from '../../cores/interfaces/Column';
import { useUserContext } from '../../cores/contexts/user/User.context';
import { usePutOrder } from '../../cores/hooks/react-query/useOrder.ts';

const itemsFromBackend: Order[] = [
	{ id: '1', user: 'Jean Casquette', foods: ['Sprite', 'Burger'] },
	{ id: '2', user: 'Marie Claquette', foods: ['Coca', 'Pizza'] },
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
		name: 'En Cours de Livraison',
		items: [],
	},
	{
		name: 'Livré',
		items: [],
	},
];

const onDragEnd = (result: DropResult, columns: Column[], setColumns: Dispatch<SetStateAction<Column[]>>) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumnIndex = Number(source.droppableId);
		const destColumnIndex = Number(destination.droppableId);
		const updatedColumns = [...columns];

		const [removed] = updatedColumns[sourceColumnIndex].items.splice(source.index, 1);
		updatedColumns[destColumnIndex].items.splice(destination.index, 0, removed);

		setColumns(updatedColumns);
	} else {
		const columnId = Number(source.droppableId);
		const updatedColumns = [...columns];
		const column = updatedColumns[columnId];

		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);

		updatedColumns[columnId] = {
			...column,
			items: copiedItems,
		};

		setColumns(updatedColumns);
	}
};

export const OrderManagerContainer = () => {
	const [columns, setColumns] = useState<Column[]>(board);
	const { checkLogin } = useUserContext();
	const { mutate } = usePutOrder();

	const ColumnNameConvert = (name: string) => {
		switch (name) {
			case 'En Attente de Préparation':
				return 'waiting';
			case 'En Cours de Préparation':
				return 'preparing';
			case 'En Cours de Livraison':
				return 'delivering';
			case 'Livré':
				return 'delivered';
			default:
				return 'waiting';
		}
	};

	const getItemsStatusFromColumns = () => {
		columns.forEach(column => {
			column.items.forEach(item => {
				const putOrder = {
					id: item.id,
					status: ColumnNameConvert(column.name),
				};

				mutate(putOrder);
			});
		});
	};

	useEffect(() => {
		getItemsStatusFromColumns();
	}, [columns]);

	// useEffect(() => {
	// 	checkLogin();
	// });

	return (
		<OrderManagerComponent
			columns={columns}
			setColumns={setColumns}
			onDragEnd={onDragEnd}
		/>
	);
};
