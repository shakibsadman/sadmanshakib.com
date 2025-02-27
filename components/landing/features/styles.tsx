import { Grid, Link, Moon, Settings } from "lucide-react"

export default function StyleSection() {
    return (
        <div className="bg-[#fdf8f8] min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-semibold text-gray-900 mb-3">Style</h1>
                <p className="text-2xl text-gray-600 mb-6">Simple, modern, and customizable.</p>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    NativeExpress leverages familiar web styling patterns with NativeWind (TailwindCSS for React Native) and
                    Gluestack UI, providing a Radix/ShadCN-like component system.
                </p>



                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                            <Grid className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">UI Library</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Uses Gluestack UI, a modern and customizable UI library inspired by Radix/ShadCN.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                            <Link className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">TailwindCSS</h3>
                        <p className="text-gray-600 leading-relaxed">
                            By integrating NativeWind you can use TailwindCSS to style your app.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                            <Moon className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Dark Mode</h3>
                        <p className="text-gray-600 leading-relaxed">Demo app comes with dark mode support out of the box.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="mb-4">
                            <Settings className="w-6 h-6 text-gray-900" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customizable</h3>
                        <p className="text-gray-600 leading-relaxed">
                            You can customize the theme, fonts, and colors to match your brand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
