import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './main.css';
import { NotifyComponent } from './cores/components/atoms/notify/Notify.component';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<NotifyComponent />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
