import { DripsyProvider } from 'dripsy';
import type { AppProps /*, AppContext */ } from 'next/app';
import { theme } from '../theme/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DripsyProvider
				ssr
				theme={theme}
				ssrPlaceholder={<div>Reticulating splines...</div>} // optional
			>
				<Component {...pageProps} />
			</DripsyProvider>
		</>
	);
}
