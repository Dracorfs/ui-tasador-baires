import { component$, useSignal, useStore, $, type QRL } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { BuildingIcon, ArrowRightIcon, CheckCircleIcon } from "../../components/ui/icons";

// ─── Types ────────────────────────────────────────────────
// Types used only for documentation; store properties are typed as `string` for Qwik serialization.

interface ValuationResult {
	id: string;
	listed_value: number;
	factor_final: number;
	tasacion_usd: number;
	explanation: string[];
}

// ─── Shared Sub‑components ────────────────────────────────
const SectionTitle = component$<{ step: number; title: string; subtitle: string }>(
	({ step, title, subtitle }) => (
		<div class="mb-8">
			<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-xs mb-3 border border-blue-100">
				Paso {step}
			</div>
			<h3 class="text-2xl font-bold text-slate-900 tracking-tight">{title}</h3>
			<p class="text-slate-500 mt-1">{subtitle}</p>
		</div>
	),
);

// ─── Main Page ────────────────────────────────────────────
export default component$(() => {
	const currentStep = useSignal(1);
	const isLoading = useSignal(false);
	const result = useSignal<ValuationResult | null>(null);
	const errorMsg = useSignal("");

	// ─── Form state store ───────────────────────────────
	const form = useStore({
		// Address
		street: "",
		number: "",
		apartment: "",
		between_street_1: "",
		between_street_2: "",

		// General
		bedrooms: "0" as string,
		listed_value: "",
		neighbours: [] as string[],
		lighting: "good" as string,
		greenery: "good" as string,
		age: "",
		quality: "medium" as string,
		common_space: "good" as string,
		central_services: "medium" as string,
		exterior: "good" as string,
		prestige: "medium" as string,

		// Inmutable
		covered_surface: "",
		semi_covered_surface: "",
		uncovered_surface_balcony: "",
		uncovered_surface_backyard: "",
		maintenance_fees: "",
		fixed_costs_and_taxes: "",
		floor: "",
		building_highest_floor: "",
		orientation: "N" as string,
		layout: "front_facing" as string,
		type: "studio_apartment" as string,
		views: "good" as string,

		// Condition
		kitchen: "good" as string,
		bathrooms: "good" as string,
		walls: "good" as string,
		floors: "good" as string,
		closets: "good" as string,
		water: "good" as string,
		gas: "good" as string,
		electricity: "good" as string,
		drainage: "good" as string,
		heating: "good" as string,
		cooling: "good" as string,
		ventilation: "good" as string,
	});

	const totalSteps = 4;

	const goNext = $(() => {
		if (currentStep.value < totalSteps) currentStep.value++;
	});
	const goPrev = $(() => {
		if (currentStep.value > 1) currentStep.value--;
	});

	const handleSubmit = $(async () => {
		isLoading.value = true;
		errorMsg.value = "";
		result.value = null;

		const body = {
			address: {
				street: form.street,
				number: form.number ? Number(form.number) : null,
				apartment: form.apartment ? Number(form.apartment) : null,
				between_streets: [form.between_street_1, form.between_street_2],
			},
			bedrooms: form.bedrooms,
			listed_value: Number(form.listed_value),
			neighbours: form.neighbours,
			lighting: form.lighting,
			greenery: form.greenery,
			age: Number(form.age),
			quality: form.quality,
			common_space: form.common_space,
			central_services: form.central_services,
			exterior: form.exterior,
			prestige: form.prestige,
			inmutable: {
				covered_surface: Number(form.covered_surface),
				semi_covered_surface: Number(form.semi_covered_surface),
				uncovered_surface_balcony: Number(form.uncovered_surface_balcony),
				uncovered_surface_backyard: Number(form.uncovered_surface_backyard),
				maintenance_fees: Number(form.maintenance_fees),
				fixed_costs_and_taxes: Number(form.fixed_costs_and_taxes),
				floor: Number(form.floor),
				building_highest_floor: Number(form.building_highest_floor),
				orientation: form.orientation,
				layout: form.layout,
				type: form.type,
				views: form.views,
			},
			condition: {
				kitchen: form.kitchen,
				bathrooms: form.bathrooms,
				walls: form.walls,
				floors: form.floors,
				closets: form.closets,
				water: form.water,
				gas: form.gas,
				electricity: form.electricity,
				drainage: form.drainage,
				heating: form.heating,
				cooling: form.cooling,
				ventilation: form.ventilation,
			},
		};

		try {
			const res = await fetch(
				"https://api-tasador-baires.deno.dev/tasacion",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				},
			);
			if (!res.ok) throw new Error("Error del servidor");
			const data = await res.json();
			result.value = data as ValuationResult;
			currentStep.value = 5; // go to results view
		} catch (err: any) {
			errorMsg.value = err?.message || "Error inesperado al procesar la tasación.";
		} finally {
			isLoading.value = false;
		}
	});

	const handleReset = $(() => {
		result.value = null;
		currentStep.value = 1;
	});

	// ────────────────────────────────────────────────────
	// Reusable class strings
	const inputClass =
		"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-shadow shadow-sm";
	const selectClass =
		"w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-shadow shadow-sm appearance-none cursor-pointer";

	// ────────────────────────────────────────────────────
	return (
		<div class="font-sans antialiased text-slate-900 selection:bg-blue-200 selection:text-slate-900">
			<Navbar />

			<main class="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 px-4">
				<div class="max-w-3xl mx-auto">

					{/* ── Header ── */}
					<div class="text-center mb-10">
						<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4 border border-blue-100">
							<BuildingIcon class="w-4 h-4" />
							Tasación Inteligente
						</div>
						<h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
							Valuá tu propiedad
						</h1>
						<p class="text-slate-500 max-w-md mx-auto">
							Completá los datos de tu inmueble y nuestro algoritmo calculará su valor real de mercado.
						</p>
					</div>

					{/* ── Progress Bar ── */}
					{currentStep.value <= totalSteps && (
						<div class="mb-10">
							<div class="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
								{["Ubicación", "Edificio", "Inmueble", "Condición"].map(
									(label, i) => (
										<span
											key={i}
											class={`transition-colors ${currentStep.value >= i + 1 ? "text-blue-600" : "text-slate-400"}`}
										>
											{label}
										</span>
									),
								)}
							</div>
							<div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
								<div
									class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
									style={`width: ${(currentStep.value / totalSteps) * 100}%`}
								/>
							</div>
						</div>
					)}

					{/* ── Form Card ── */}
					{currentStep.value <= totalSteps && (
						<div class="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 sm:p-10">

							{/* ─── Step 1: Address & Location ─── */}
							{currentStep.value === 1 && (
								<div>
									<SectionTitle step={1} title="Ubicación" subtitle="Indicá la dirección y las características del entorno." />
									<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div class="sm:col-span-2 space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Calle</label>
											<input type="text" class={inputClass} placeholder="Ej: Caseros" value={form.street} onInput$={(e: Event) => { form.street = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Número</label>
											<input type="number" class={inputClass} placeholder="449" value={form.number} onInput$={(e: Event) => { form.number = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Departamento</label>
											<input type="number" class={inputClass} placeholder="1" value={form.apartment} onInput$={(e: Event) => { form.apartment = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Entre calle 1</label>
											<input type="text" class={inputClass} placeholder="Defensa" value={form.between_street_1} onInput$={(e: Event) => { form.between_street_1 = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Entre calle 2</label>
											<input type="text" class={inputClass} placeholder="Bolívar" value={form.between_street_2} onInput$={(e: Event) => { form.between_street_2 = (e.target as HTMLInputElement).value; }} />
										</div>

										{/* Location quality */}
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Iluminación</label>
											<select class={selectClass} value={form.lighting} onChange$={(e: Event) => { form.lighting = (e.target as HTMLInputElement).value; }}>
												<option value="good">Buena</option>
												<option value="medium">Regular</option>
												<option value="bad">Mala</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Vegetación</label>
											<select class={selectClass} value={form.greenery} onChange$={(e: Event) => { form.greenery = (e.target as HTMLInputElement).value; }}>
												<option value="good">Buena</option>
												<option value="medium">Regular</option>
												<option value="bad">Mala</option>
											</select>
										</div>

										{/* Neighbours checkboxes */}
										<div class="sm:col-span-2 space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Vecinos positivos (seleccionar si aplica)</label>
											<div class="flex flex-wrap gap-3 mt-2">
												{["parks", "plazas", "schools", "hospitals", "malls"].map((n) => (
													<label
														key={n}
														class="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 cursor-pointer hover:border-blue-300 hover:bg-blue-50/40 transition-colors text-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700"
													>
														<input
															type="checkbox"
															class="accent-blue-600 w-4 h-4"
															checked={form.neighbours.includes(n)}
															onChange$={() => {
																if (form.neighbours.includes(n)) {
																	form.neighbours = form.neighbours.filter((x: string) => x !== n);
																} else {
																	form.neighbours = [...form.neighbours, n];
																}
															}}
														/>
														<span class="capitalize">{n}</span>
													</label>
												))}
											</div>
										</div>
									</div>
								</div>
							)}

							{/* ─── Step 2: Building ─── */}
							{currentStep.value === 2 && (
								<div>
									<SectionTitle step={2} title="Edificio" subtitle="Contanos sobre el edificio y sus prestaciones generales." />
									<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Antigüedad (años)</label>
											<input type="number" class={inputClass} placeholder="15" value={form.age} onInput$={(e: Event) => { form.age = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Dormitorios</label>
											<select class={selectClass} value={form.bedrooms} onChange$={(e: Event) => { form.bedrooms = (e.target as HTMLInputElement).value; }}>
												<option value="0">Monoambiente</option>
												<option value="1">1 dormitorio</option>
												<option value="2">2 dormitorios</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Calidad constructiva</label>
											<select class={selectClass} value={form.quality} onChange$={(e: Event) => { form.quality = (e.target as HTMLInputElement).value; }}>
												<option value="good">Buena</option>
												<option value="medium">Regular</option>
												<option value="bad">Mala</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Espacios comunes</label>
											<select class={selectClass} value={form.common_space} onChange$={(e: Event) => { form.common_space = (e.target as HTMLInputElement).value; }}>
												<option value="good">Bueno</option>
												<option value="medium">Regular</option>
												<option value="bad">Malo</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Servicios centrales</label>
											<select class={selectClass} value={form.central_services} onChange$={(e: Event) => { form.central_services = (e.target as HTMLInputElement).value; }}>
												<option value="good">Bueno</option>
												<option value="medium">Regular</option>
												<option value="bad">Malo</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Exterior</label>
											<select class={selectClass} value={form.exterior} onChange$={(e: Event) => { form.exterior = (e.target as HTMLInputElement).value; }}>
												<option value="good">Bueno</option>
												<option value="medium">Regular</option>
												<option value="bad">Malo</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Prestigio</label>
											<select class={selectClass} value={form.prestige} onChange$={(e: Event) => { form.prestige = (e.target as HTMLInputElement).value; }}>
												<option value="high">Alto</option>
												<option value="medium">Medio</option>
												<option value="low">Bajo</option>
											</select>
										</div>
									</div>
								</div>
							)}

							{/* ─── Step 3: Inmutable ─── */}
							{currentStep.value === 3 && (
								<div>
									<SectionTitle step={3} title="Inmueble" subtitle="Detallá las características propias de la unidad." />
									<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Valor de lista (USD)</label>
											<input type="number" class={inputClass} placeholder="100000" value={form.listed_value} onInput$={(e: Event) => { form.listed_value = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Sup. cubierta (m²)</label>
											<input type="number" class={inputClass} placeholder="70" value={form.covered_surface} onInput$={(e: Event) => { form.covered_surface = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Sup. semicubierta (m²)</label>
											<input type="number" class={inputClass} placeholder="5" value={form.semi_covered_surface} onInput$={(e: Event) => { form.semi_covered_surface = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Sup. descubierta — Balcón (m²)</label>
											<input type="number" class={inputClass} placeholder="5" value={form.uncovered_surface_balcony} onInput$={(e: Event) => { form.uncovered_surface_balcony = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Sup. descubierta — Patio (m²)</label>
											<input type="number" class={inputClass} placeholder="0" value={form.uncovered_surface_backyard} onInput$={(e: Event) => { form.uncovered_surface_backyard = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Expensas (ARS)</label>
											<input type="number" class={inputClass} placeholder="25000" value={form.maintenance_fees} onInput$={(e: Event) => { form.maintenance_fees = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Impuestos fijos (ARS)</label>
											<input type="number" class={inputClass} placeholder="10000" value={form.fixed_costs_and_taxes} onInput$={(e: Event) => { form.fixed_costs_and_taxes = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Piso</label>
											<input type="number" class={inputClass} placeholder="6" value={form.floor} onInput$={(e: Event) => { form.floor = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Piso más alto del edificio</label>
											<input type="number" class={inputClass} placeholder="10" value={form.building_highest_floor} onInput$={(e: Event) => { form.building_highest_floor = (e.target as HTMLInputElement).value; }} />
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Orientación</label>
											<select class={selectClass} value={form.orientation} onChange$={(e: Event) => { form.orientation = (e.target as HTMLInputElement).value; }}>
												{["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((o) => (
													<option key={o} value={o}>{o}</option>
												))}
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Disposición</label>
											<select class={selectClass} value={form.layout} onChange$={(e: Event) => { form.layout = (e.target as HTMLInputElement).value; }}>
												<option value="front_facing">Al frente</option>
												<option value="rear_facing">Contrafrente</option>
												<option value="internal">Interno</option>
												<option value="lateral">Lateral</option>
												<option value="reversed_plan">Planta invertida</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Tipo de unidad</label>
											<select class={selectClass} value={form.type} onChange$={(e: Event) => { form.type = (e.target as HTMLInputElement).value; }}>
												<option value="studio_apartment">Monoambiente</option>
												<option value="half_floor">Medio piso</option>
												<option value="full_floor">Piso completo</option>
												<option value="duplex">Dúplex</option>
											</select>
										</div>
										<div class="space-y-1.5">
											<label class="block text-sm font-semibold text-slate-700">Vistas</label>
											<select class={selectClass} value={form.views} onChange$={(e: Event) => { form.views = (e.target as HTMLInputElement).value; }}>
												<option value="remarkable">Excepcionales</option>
												<option value="good">Buenas</option>
												<option value="common">Comunes</option>
												<option value="bad">Malas</option>
											</select>
										</div>
									</div>
								</div>
							)}

							{/* ─── Step 4: Condition ─── */}
							{currentStep.value === 4 && (
								<div>
									<SectionTitle step={4} title="Condición" subtitle="Valorá el estado actual de cada aspecto del inmueble." />
									<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
										{([
											["kitchen", "Cocina"],
											["bathrooms", "Baños"],
											["walls", "Paredes"],
											["floors", "Pisos"],
											["closets", "Placards"],
											["water", "Agua"],
											["gas", "Gas"],
											["electricity", "Electricidad"],
											["drainage", "Desagüe"],
											["heating", "Calefacción"],
											["cooling", "Refrigeración"],
											["ventilation", "Ventilación"],
										] as [string, string][]).map(([key, label]) => (
											<div key={key} class="space-y-1.5">
												<label class="block text-sm font-semibold text-slate-700">{label}</label>
												<select
													class={selectClass}
													value={form[key as keyof typeof form] as string}
													onChange$={(e: Event) => {
														(form as any)[key] = (e.target as HTMLSelectElement).value;
													}}
												>
													<option value="good">Bueno</option>
													<option value="medium">Regular</option>
													<option value="bad">Malo</option>
												</select>
											</div>
										))}
									</div>
								</div>
							)}

							{/* ─── Navigation Buttons ─── */}
							<div class="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
								{currentStep.value > 1 ? (
									<button
										type="button"
										onClick$={goPrev}
										class="px-6 py-3 text-sm font-semibold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
									>
										← Anterior
									</button>
								) : (
									<div></div>
								)}

								{currentStep.value < totalSteps ? (
									<button
										type="button"
										onClick$={goNext}
										class="px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 flex items-center gap-2 group"
									>
										Siguiente
										<ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</button>
								) : (
									<button
										type="button"
										onClick$={handleSubmit}
										disabled={isLoading.value}
										class="px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isLoading.value ? (
											<>
												<svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
													<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
													<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
												</svg>
												Calculando…
											</>
										) : (
											<>
												Obtener Tasación
												<CheckCircleIcon class="w-4 h-4" />
											</>
										)}
									</button>
								)}
							</div>

							{/* Error message */}
							{errorMsg.value && (
								<div class="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm flex items-center gap-2">
									<span class="text-lg">⚠️</span>
									{errorMsg.value}
								</div>
							)}
						</div>
					)}

					{/* ── Results View  ── */}
					{currentStep.value === 5 && result.value && (
						<ResultCard result={result.value} onReset$={handleReset} />
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
});

// ─── Result Card Component ────────────────────────────────
const ResultCard = component$<{ result: ValuationResult; onReset$: QRL<() => void> }>(
	({ result, onReset$ }) => {
		const impactColor = (text: string) => {
			if (text.includes("positive")) return "text-emerald-600 bg-emerald-50 border-emerald-100";
			if (text.includes("negative")) return "text-red-600 bg-red-50 border-red-100";
			return "text-slate-600 bg-slate-50 border-slate-100";
		};

		const impactIcon = (text: string) => {
			if (text.includes("positive")) return "↗";
			if (text.includes("negative")) return "↘";
			return "→";
		};

		return (
			<div class="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 sm:p-10 text-center">
				{/* Success badge */}
				<div class="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center">
					<CheckCircleIcon class="w-10 h-10 text-emerald-500" />
				</div>

				<h2 class="text-2xl font-bold text-slate-900 mb-2">Resultado de la Tasación</h2>
				<p class="text-slate-500 mb-8">{result.id}</p>

				{/* Main Value */}
				<div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white shadow-xl">
					<p class="text-sm uppercase tracking-wider text-slate-400 mb-2">Valor Estimado</p>
					<p class="text-4xl sm:text-5xl font-extrabold tracking-tight">
						U$D {result.tasacion_usd.toLocaleString("es-AR")}
					</p>
				</div>

				{/* Stats grid */}
				<div class="grid grid-cols-2 gap-4 mb-8">
					<div class="bg-slate-50 rounded-xl p-4 border border-slate-100">
						<p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Valor Publicado</p>
						<p class="text-xl font-bold text-slate-900">U$D {result.listed_value.toLocaleString("es-AR")}</p>
					</div>
					<div class="bg-slate-50 rounded-xl p-4 border border-slate-100">
						<p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Factor Final</p>
						<p class="text-xl font-bold text-slate-900">{result.factor_final.toFixed(3)}</p>
					</div>
				</div>

				{/* Explanation Pills */}
				<div class="text-left mb-8">
					<h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Desglose de Factores</h3>
					<div class="space-y-3">
						{result.explanation.map((exp, i) => {
							const [name, rest] = exp.split(": ");
							return (
								<div
									key={i}
									class={`flex items-center justify-between px-4 py-3 rounded-xl border ${impactColor(exp)} transition-all`}
								>
									<div class="flex items-center gap-3">
										<span class="text-lg">{impactIcon(exp)}</span>
										<span class="font-semibold capitalize">{name}</span>
									</div>
									<span class="text-sm font-medium">{rest}</span>
								</div>
							);
						})}
					</div>
				</div>

				{/* Actions */}
				<div class="flex flex-col sm:flex-row gap-4">
					<button
						type="button"
						onClick$={onReset$}
						class="flex-1 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
					>
						Nueva Tasación
					</button>
					<a
						href="/"
						class="flex-1 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-center"
					>
						Volver al Inicio
					</a>
				</div>
			</div>
		);
	},
);

// ─── Head ─────────────────────────────────────────────────
export const head: DocumentHead = {
	title: "Tasar Propiedad | Tasador Baires",
	meta: [
		{
			name: "description",
			content:
				"Ingresá los datos de tu propiedad en CABA y obtené una valuación inteligente al instante.",
		},
	],
};