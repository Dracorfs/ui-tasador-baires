import { component$ } from "@builder.io/qwik";

export const HowItWorks = component$(() => {
    const steps = [
        {
            number: "01",
            title: "Ingresar Datos",
            description: "Detallá ubicación, superficie y características principales.",
            align: "items-start text-left"
        },
        {
            number: "02",
            title: "Análisis Inteligente",
            description: "Nuestro algoritmo califica estado, amenities y entorno.",
            align: "items-start text-left md:items-center md:text-center mt-8 md:mt-24"
        },
        {
            number: "03",
            title: "Reporte de Valor",
            description: "Obtenés al instante un reporte y el precio justo de mercado.",
            align: "items-start text-left md:items-end md:text-right mt-8 md:mt-48"
        }
    ];

    return (
        <section id="como-funciona" class="py-24 bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div class="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full border border-slate-100 opacity-50 pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center max-w-2xl mx-auto mb-20">
                    <h2 class="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Cómo <span class="text-blue-600">funciona</span>
                    </h2>
                    <p class="text-lg text-slate-600">
                        Un proceso guiado de 3 minutos para obtener la tasación más precisa del mercado inmobiliario actual.
                    </p>
                </div>

                <div class="relative">
                    {/* Connecting Line Desktop */}
                    <div class="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 z-0"></div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} class={`flex flex-col ${step.align} relative`}>
                                <div class="w-16 h-16 rounded-full bg-white border-4 border-blue-50 shadow-lg shadow-blue-500/10 flex items-center justify-center mb-6 group hover:border-blue-100 transition-colors">
                                    <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800">
                                        {step.number}
                                    </span>
                                </div>
                                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-sm">
                                    <h4 class="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                    <p class="text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
