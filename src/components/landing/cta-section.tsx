import { component$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "../ui/icons";

export const CTASection = component$(() => {
    return (
        <section class="py-20 bg-white relative px-4 sm:px-6 lg:px-8">
            <div class="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Glow effect */}
                <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-[80px]"></div>
                <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-[80px]"></div>

                {/* Geometric pattern overlay */}
                <div
                    class="absolute inset-0 opacity-10 mix-blend-overlay"
                    style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"
                ></div>

                <div class="relative z-10 px-8 py-16 md:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div class="max-w-xl">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            ¿Listo para valuar tu propiedad?
                        </h2>
                        <p class="text-lg text-slate-300">
                            Dejá de dudar sobre el precio de tu inmueble. Obtené un reporte detallado al instante, sin intermediarios.
                        </p>
                    </div>

                    <div class="flex-shrink-0">
                        <a
                            href="/tasacion"
                            class="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-white hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1 gap-2 text-lg group"
                        >
                            Comenzar Ahora
                            <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});
