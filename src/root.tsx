import { component$, isDev } from "@builder.io/qwik"
import { QwikCityProvider } from "@builder.io/qwik-city"
import { RouterHead } from "./components/router-head/router-head"

import "./global.css"

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<RouterHead />
			</head>
			<body lang="en">
				<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
					<h1 class="text-4xl font-bold text-blue-600 mb-4">¡Tailwind test ok!</h1>
					<p class="text-gray-700 text-lg">Usando Tailwind con Qwik 🎉</p>
					<button class="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
						Probar botón
					</button>
				</div>
			</body>
		</QwikCityProvider>
	)
})