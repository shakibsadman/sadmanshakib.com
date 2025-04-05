import { Bolt, KeyRound, LogIn, Package, Trash2 } from "lucide-react"

export default function AuthFeatures() {
    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Bolt className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold text-textPrimary">Authentication</h2>
                </div>
                
                <p className="text-xl text-textSecondary mb-2">Securely authenticate your users using social login or password.</p>
                <p className="text-textSecondary/80 mb-12">
                    Supabase Auth to provide a complete authentication system out of the box. Sign up,
                    sign in, password reset, and social authentication with Apple and Google - all preconfigured and ready for
                    your SaaS.
                </p>

                <div className="grid gap-6 md:grid-cols-2 mb-6">
                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <LogIn className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Email & Password</h3>
                                <p className="text-textSecondary text-sm">Sign in with Email and Password.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <KeyRound className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">OAuth</h3>
                                <p className="text-textSecondary text-sm">Sign in with Google and Apple oAuth.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Package className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Auth Components</h3>
                                <p className="text-textSecondary text-sm">
                                    Comes with ready to use components for signup, signin, password reset, profile.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <KeyRound className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Forgot password</h3>
                                <p className="text-textSecondary text-sm">Password reset using email and deeplink.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70 max-w-[calc(50%-12px)]">
                    <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                            <Trash2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-textPrimary mb-2">Account deletion</h3>
                            <p className="text-textSecondary text-sm">
                                Allow users to delete their account to comply with submission guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
