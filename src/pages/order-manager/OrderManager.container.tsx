import { useEffect, useState } from 'react';

import type { DropResult } from 'react-beautiful-dnd';
import { OrderManagerComponent } from './OrderManager.component';
import type { Column } from '../../cores/interfaces/Column';
import { useGetOrder, usePutOrder } from '../../cores/hooks/react-query/useOrder';
import { useUserContext } from '../../cores/contexts/user/User.context';

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

export const OrderManagerContainer = () => {
	const board: Column[] = [
		{
			name: 'En Attente de Préparation',
			items: [],
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

	const [columns, setColumns] = useState<Column[]>(board);
	const { mutate } = usePutOrder();
	const { checkLogin } = useUserContext();
	const { orders } = useGetOrder('64a712389e1e4ac128a9ce8e');

	orders?.forEach(order => {
		const columnConst = columns.find(column => ColumnNameConvert(column.name) === order.status);

		if (columnConst) {
			if (!columnConst.items.find(item => item._id === order._id)) {
				columnConst.items.push({
					_id: order._id,
					user: order.user,
					restaurant: order.restaurant,
					deliveryDriver: order.deliveryDriver,
					foods: order.foods,
					orderDate: order.orderDate,
					totalPrice: order.totalPrice,
					status: order.status,
				});
			}
		}
	});

	const getItemsStatusFromColumns = () => {
		columns.forEach(column => {
			column.items.forEach(item => {
				const putOrder = {
					id: item._id,
					status: ColumnNameConvert(column.name),
				};

				mutate(putOrder);
			});
		});
	};

	useEffect(() => {
		getItemsStatusFromColumns();
	}, [columns, mutate]);

	useEffect(() => {
		checkLogin();
	}, []);

	const onDragEnd = (result: DropResult) => {
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

	return (
		<OrderManagerComponent
			columns={columns}
			setColumns={setColumns}
			onDragEnd={onDragEnd}
		/>
	);
};
