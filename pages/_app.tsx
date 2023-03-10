import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries/EntriesProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider>
			<EntriesProvider>
				<UIProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline>
							<Component {...pageProps} />
						</CssBaseline>
					</ThemeProvider>
				</UIProvider>
			</EntriesProvider>
		</SnackbarProvider>
	);
}

export default MyApp;
