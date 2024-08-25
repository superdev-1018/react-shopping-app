import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';

import { Provider } from '@/context';
import ThemeProvider from '@/theme';
import App from './app';

import './index.scss';

createRoot(document.getElementById("root") as HTMLElement).render(
	<HelmetProvider>
		<BrowserRouter>
			<Provider>
				<Suspense>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</Suspense>
			</Provider>
		</BrowserRouter>
	</HelmetProvider>
);