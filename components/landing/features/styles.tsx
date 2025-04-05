import { Grid, Link, Moon, Settings } from "lucide-react"

export default function StyleSection() {
    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-textPrimary mb-3">Style</h2>
                <p className="text-xl text-textSecondary mb-6">Simple, modern, and customizable.</p>

                <p className="text-textSecondary mb-8 leading-relaxed">
                    NativeExpress leverages familiar web styling patterns with NativeWind (TailwindCSS for React Native) and
                    Gluestack UI, providing a Radix/ShadCN-like component system.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="mb-4">
                            <Grid className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-textPrimary mb-2">UI Library</h3>
                        <p className="text-textSecondary leading-relaxed">
                            Uses Gluestack UI, a modern and customizable UI library inspired by Radix/ShadCN.
                        </p>
                    </div>

                    <div className="bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="mb-4">
                            <Link className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-textPrimary mb-2">TailwindCSS</h3>
                        <p className="text-textSecondary leading-relaxed">
                            By integrating NativeWind you can use TailwindCSS to style your app.
                        </p>
                    </div>

                    <div className="bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="mb-4">
                            <Moon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-textPrimary mb-2">Dark Mode</h3>
                        <p className="text-textSecondary leading-relaxed">Demo app comes with dark mode support out of the box.</p>
                    </div>

                    <div className="bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="mb-4">
                            <Settings className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-textPrimary mb-2">Customizable</h3>
                        <p className="text-textSecondary leading-relaxed">
                            You can customize the theme, fonts, and colors to match your brand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
