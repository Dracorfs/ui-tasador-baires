import { component$ } from "@builder.io/qwik";
import { ShieldCheckIcon, CalculatorIcon, TrendingUpIcon } from "../ui/icons";

export const Features = component$(() => {
    const features = [
        {
            title: "Algoritmo Preciso",
            description: "Nuestro motor de cálculo cruza múltiples fuentes de datos para brindar la valuación más exacta del mercado porteño.",
            icon: CalculatorIcon,
            color: "bg-blue-50 text-blue-600 border-blue-100",
            delay: "delay-[0ms]"
        },
        {
            title: "Análisis Multifactorial",
            description: "No solo miramos los m². Consideramos estado del edificio, luminosidad, calidad constructiva y más de 30 variables.",
            icon: TrendingUpIcon,
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
            delay: "delay-[100ms]"
        },
        {
            title: "Confiabilidad Total",
            description: "Datos actualizados mensualmente con los valores reales de cierre de operaciones en todos los barrios de la Ciudad.",
            icon: ShieldCheckIcon,
            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
            delay: "delay-[200ms]"
        }
    ];

    return (
        <section id="beneficios" class="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">¿Por qué elegirnos?</h2>
                    <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Valuaciones inteligentes, <br class="hidden sm:block" /> decisiones seguras
                    </h3>
                    <p class="text-lg text-slate-600">
                        Dejamos atrás las tasaciones a ojo. Nuestro sistema analiza matemáticamente las fortalezas de tu propiedad para encontrar su valor justo.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            class={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-start ${feature.delay}`}
                        >
                            <div class={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.color}`}>
                                <feature.icon class="w-7 h-7" />
                            </div>
                            <h4 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h4>
                            <p class="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});
