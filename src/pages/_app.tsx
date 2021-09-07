import 'raf/polyfill'; // add this at the top
import dynamic from 'next/dynamic';
import { DripsyProvider } from 'dripsy';
import type { AppProps /*, AppContext */ } from 'next/app';
import { theme } from '../theme/theme';

function App({ Component, pageProps }: AppProps) {
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

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
