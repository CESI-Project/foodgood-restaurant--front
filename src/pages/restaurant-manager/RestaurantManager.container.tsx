import type { FormEvent } from 'react';
import { useState } from 'react';
import { RestaurantManagerComponent } from './RestaurantManager.component';
import type { Food } from '../../cores/models/Food';
import { FoodItemComponent } from '../../cores/components/atoms/food-item/FoodItem.component';
import { useRestaurant } from '../../cores/hooks/react-query/useRestaurant';
import { useGetFood, usePostFood } from '../../cores/hooks/react-query/useFood';
import './RestaurantManager.component.scss';
import type { Supplier } from '../../cores/models/Supplier';
import { useGetSupplier, usePostSupplier } from '../../cores/hooks/react-query/useSupplier';
import { SupplierComponent } from '../../cores/components/atoms/supplier/Supplier.component';

export const RestaurantManagerContainer = () => {
	const { foods } = useGetFood('1');
	const { suppliers } = useGetSupplier('1');
	const { restaurant } = useRestaurant('64786871e2d703d7dda1d699');
	const { mutate: mutateFood } = usePostFood();
	const { mutate: mutateSupplier } = usePostSupplier();
	const [showFoodForm, setShowFoodForm] = useState(false);
	const [showSupplierForm, setShowSupplierForm] = useState(false);

	const foodItems = foods?.map((food: Food) => (
		<FoodItemComponent
			id={food.id}
			key={food.id}
			name={food.name}
			imageUrl={food.imageUrl}
			price={food.price}
			description={food.description}
		/>
	));

	const supplierItems = suppliers?.map((supplier: Supplier) => (
		<SupplierComponent
			id={supplier.id}
			key={supplier.id}
			name={supplier.name}
			phone={supplier.phone}
		/>
	));

	const addFood = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const foodName = formData.get('foodName') as string;
		const foodType = formData.get('foodType') as string;
		const foodImage = formData.get('foodImage') as string;
		const foodPrice = formData.get('foodPrice') as string;
		const foodDescription = formData.get('foodDescription') as string;

		const food: Food = {
			name: foodName,
			type: foodType,
			imageUrl: foodImage,
			price: Number(foodPrice),
			description: foodDescription,
			restaurant,
		};
		mutateFood(food);
	};

	const addSupplier = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const supplierName = formData.get('supplierName') as string;
		const supplierPhone = formData.get('supplierPhone') as string;

		const supplier: Supplier = { name: supplierName, phone: supplierPhone };
		mutateSupplier(supplier);
	};

	const handleShowFoodForm = () => {
		setShowFoodForm(!showFoodForm);
	};

	const handleShowSupplierForm = () => {
		setShowSupplierForm(!showSupplierForm);
	};

	return (
		<RestaurantManagerComponent
			id={restaurant?.id}
			name={restaurant?.name}
			image={restaurant?.imageUrl}
			address={restaurant?.address}
			rating={restaurant?.rate}
			foodItems={foodItems}
			addFood={addFood}
			handleShowFoodForm={handleShowFoodForm}
			showFoodForm={showFoodForm}
			showSupplierForm={showSupplierForm}
			supplierItems={supplierItems}
			addSupplier={addSupplier}
			handleShowSupplierForm={handleShowSupplierForm}
		/>
	);
};
