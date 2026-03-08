import { component$ } from "@builder.io/qwik";
import { BuildingIcon } from "../ui/icons";

export const Footer = component$(() => {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div class="md:col-span-2">
                        <div class="flex items-center gap-2 mb-6">
                            <div class="bg-blue-600 text-white p-1.5 rounded-lg">
                                <BuildingIcon class="w-5 h-5" />
                            </div>
                            <span class="text-xl font-bold text-white tracking-tight">
                                Tasador<span class="text-blue-500">Baires</span>
                            </span>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
                            La plataforma inteligente para valuar propiedades en la Ciudad Autónoma de Buenos Aires.
                            Decisiones inmobiliarias basadas en datos reales y análisis multifactorial.
                        </p>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Producto</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-sm hover:text-white transition-colors">Tasar Propiedad</a></li>
                            <li><a href="#como-funciona" class="text-sm hover:text-white transition-colors">Cómo Funciona</a></li>
                            <li><a href="#beneficios" class="text-sm hover:text-white transition-colors">Beneficios</a></li>
                            <li><a href="#" class="text-sm hover:text-white transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-sm hover:text-white transition-colors">Términos de Servicio</a></li>
                            <li><a href="#" class="text-sm hover:text-white transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" class="text-sm hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div class="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-slate-500">
                        &copy; {currentYear} Tasador Baires. Todos los derechos reservados.
                    </p>
                    <div class="flex items-center gap-6">
                        <p class="text-sm text-slate-500">
                            Hecho con precisión en CABA 🇦🇷
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
});
