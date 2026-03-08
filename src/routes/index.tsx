import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/landing/hero";
import { Features } from "../components/landing/features";
import { HowItWorks } from "../components/landing/how-it-works";
import { CTASection } from "../components/landing/cta-section";

export default component$(() => {
	return (
		<div class="font-sans antialiased text-slate-900 selection:bg-blue-200 selection:text-slate-900">
			<Navbar />
			<main>
				<Hero />
				<Features />
				<HowItWorks />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
});

export const head: DocumentHead = {
	title: "Tasador Baires | Valuación inteligente de Inmuebles",
	meta: [
		{
			name: "description",
			content: "Obtené el valor real de tu propiedad en CABA. El tasador más preciso de Buenos Aires basado en análisis multifactorial.",
		},
		{
			name: "keywords",
			content: "tasacion, buenos aires, inmuebles, calcular precio, real estate, argentina",
		}
	],
};