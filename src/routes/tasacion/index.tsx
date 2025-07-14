import { component$, useSignal, $ } from '@builder.io/qwik'

export default component$(() => {
	const listedValue = useSignal('')
	const age = useSignal('')
	const resultado = useSignal('')

	const handleSubmit = $(async (e: Event) => {
		e.preventDefault()

		const body = {
			address: {
				street: "Caseros",
				number: 449,
				apartment: 1,
				between_streets: ["Defensa", "Bolivar"]
			},
			bedrooms: 0,
			listed_value: Number(listedValue.value),
			neighbours: ["parks"],
			lighting: "good",
			greenery: "good",
			age: Number(age.value),
			quality: "medium",
			common_space: "good",
			central_services: "medium",
			exterior: "good",
			prestige: "high",
			inmutable: {
				covered_surface: 70,
				semi_covered_surface: 5,
				uncovered_surface_balcony: 5,
				uncovered_surface_backyard: 0,
				maintenance_fees: 25000,
				fixed_costs_and_taxes: 10000,
				floor: 6,
				building_highest_floor: 10,
				orientation: "NE",
				layout: "front_facing",
				type: "duplex",
				views: "remarkable"
			},
			condition: {
				kitchen: "good",
				bathrooms: "medium",
				walls: "good",
				floors: "good",
				closets: "medium",
				water: "good",
				gas: "good",
				electricity: "medium",
				drainage: "good",
				heating: "medium",
				cooling: "good",
				ventilation: "good"
			}
		}

		try {
			const res = await fetch('https://api-tasador-baires.deno.dev/tasacion', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})

			const data = await res.json()
			resultado.value = `USD ${data.tasacion_usd.toLocaleString()}`
		}
		catch (error) {
			resultado.value = '❌ Error en la tasación'
			console.error(error)
		}
	})

	return (
		<div class="p-6 max-w-xl mx-auto">
			<h2 class="text-2xl font-bold mb-4">Tasador Baires</h2>
			<form onSubmit$={handleSubmit} class="space-y-4">
				<div>
					<label class="block text-sm mb-1">Valor de lista (USD):</label>
					<input
						type="number"
						bind:value={listedValue}
						class="w-full border rounded px-3 py-2"
					/>
				</div>
				<div>
					<label class="block text-sm mb-1">Antigüedad (años):</label>
					<input
						type="number"
						bind:value={age}
						class="w-full border rounded px-3 py-2"
					/>
				</div>
				<button
					type="submit"
					class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
				>
					Obtener Tasación
				</button>
			</form>

			{resultado.value && (
				<div class="mt-6 text-lg font-semibold text-blue-600">
				Resultado: {resultado.value}
				</div>
			)}
		</div>
	)
})