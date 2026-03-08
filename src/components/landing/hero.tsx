import { component$ } from "@builder.io/qwik";
import { ArrowRightIcon, MapPinIcon, CalculatorIcon, CheckCircleIcon } from "../ui/icons";

export const Hero = component$(() => {
    return (
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Decorative Background Elements */}
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div class="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-50 blur-[120px] opacity-70"></div>
                <div class="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-50 blur-[100px] opacity-80"></div>
                {/* Subtle grid pattern */}
                <div
                    class="absolute inset-0 opacity-[0.03]"
                    style="background-image: radial-gradient(#0f172a 1px, transparent 1px); background-size: 32px 32px;"
                ></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Content */}
                    <div class="flex-1 text-center lg:text-left">
                        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100 shadow-sm">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Precisión Algorítmica en CABA
                        </div>

                        <h1 class="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                            Descubrí el <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">valor real</span> de tu propiedad.
                        </h1>

                        <p class="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            El tasador más preciso de Buenos Aires. Analizamos ubicación, estado, características y mercado para darte una valuación profesional en segundos.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/tasacion"
                                class="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Comenzar Tasación Gratuita
                                <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#como-funciona"
                                class="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                Ver cómo funciona
                            </a>
                        </div>

                        <div class="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
                            <div class="flex items-center gap-2">
                                <MapPinIcon class="w-5 h-5 text-blue-600" />
                                <span>Exclusivo CABA</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <CalculatorIcon class="w-5 h-5 text-blue-600" />
                                <span>Resultados Inmediatos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual / Dashboard Preview */}
                    <div class="flex-1 w-full max-w-lg lg:max-w-none perspective-1000">
                        {/* Main Graphic Container */}
                        <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                            {/* Header mock */}
                            <div class="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div class="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            {/* Content mock */}
                            <div class="p-6 h-full flex flex-col">
                                <div class="flex justify-between items-center mb-8">
                                    <div>
                                        <div class="h-4 w-32 bg-slate-200 rounded animate-pulse mb-2"></div>
                                        <div class="h-8 w-48 bg-slate-300 rounded animate-pulse"></div>
                                    </div>
                                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                        <CalculatorIcon class="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="h-24 bg-slate-50 rounded-xl border border-slate-100 p-4">
                                        <div class="h-3 w-16 bg-slate-200 rounded mb-4"></div>
                                        <div class="h-6 w-24 bg-slate-300 rounded"></div>
                                    </div>
                                    <div class="h-24 bg-slate-50 rounded-xl border border-slate-100 p-4">
                                        <div class="h-3 w-20 bg-slate-200 rounded mb-4"></div>
                                        <div class="h-6 w-20 bg-slate-300 rounded"></div>
                                    </div>
                                </div>

                                <div class="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-4 hidden sm:block">
                                    <div class="w-full h-full border-b-2 border-l-2 border-slate-200 relative">
                                        {/* Mock chart line */}
                                        <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <path d="M0 100 Q 20 80, 40 60 T 80 30 T 100 10" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div class="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce" style="animation-duration: 3s;">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircleIcon class="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Valor Estimado</p>
                                        <p class="text-xl font-bold text-slate-900">U$D 285.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
});
