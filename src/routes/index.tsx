import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"

export default component$(() => {
	return (
		<>
			<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
				<h1 class="text-4xl font-bold text-blue-600 mb-4">¡Tailwind test ok!</h1>
				<p class="text-gray-700 text-lg">Usando Tailwind con Qwik 🎉</p>
				<button class="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
					Probar botón
				</button>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: "Tasador Baires",
	meta: [
		{
			name: "description",
			content: "Automatizador de tasaciones en propiedades de Buenos Aires.",
		},
	],
}