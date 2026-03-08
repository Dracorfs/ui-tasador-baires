import { component$ } from "@builder.io/qwik";
import { BuildingIcon } from "../ui/icons";

export const Navbar = component$(() => {
    return (
        <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div class="flex items-center gap-2 cursor-pointer group">
                        <div class="bg-blue-600 text-white p-2 rounded-xl group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                            <BuildingIcon class="w-6 h-6" />
                        </div>
                        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight">
                            Tasador<span class="text-blue-600">Baires</span>
                        </span>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <nav class="hidden md:flex items-center gap-8">
                        <a href="#como-funciona" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                            Cómo funciona
                        </a>
                        <a href="#beneficios" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                            Beneficios
                        </a>
                        <a href="#faq" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                            FAQ
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div class="flex items-center">
                        <a
                            href="/tasacion"
                            class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                        >
                            Tasar mi propiedad
                        </a>

                        {/* Mobile menu button (visual only for now) */}
                        <button class="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
});
