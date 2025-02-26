import { Bolt, KeyRound, LogIn, Package, Trash2 } from "lucide-react"

export default function AuthFeatures() {
    return (
        <div className="min-h-screen bg-[#FAF7F5] p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-3">Authentication</h1>
                <p className="text-gray-600 text-lg mb-2">Securely authenticate your users using social login or password.</p>
                <p className="text-gray-500 text-sm mb-8">
                    Supabase Auth to provide a complete authentication system out of the box. Sign up,
                    sign in, password reset, and social authentication with Apple and Google - all preconfigured and ready for
                    your SaaS.
                </p>

                <div className="mb-8">
                    <Bolt className="w-6 h-6 text-emerald-500" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                            <LogIn className="w-5 h-5 mt-1 text-gray-700" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Email & Password</h3>
                                <p className="text-gray-500 text-sm">Sign in with Email and Password.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                            <KeyRound className="w-5 h-5 mt-1 text-gray-700" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">OAuth</h3>
                                <p className="text-gray-500 text-sm">Sign in with Google and Apple oAuth.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                            <Package className="w-5 h-5 mt-1 text-gray-700" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Auth Components</h3>
                                <p className="text-gray-500 text-sm">
                                    Comes with ready to use components for signup, signin, password reset, profile.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                            <KeyRound className="w-5 h-5 mt-1 text-gray-700" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Forgot password</h3>
                                <p className="text-gray-500 text-sm">Password reset using email and deeplink.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow max-w-[calc(50%-8px)]">
                    <div className="flex items-start gap-3">
                        <Trash2 className="w-5 h-5 mt-1 text-gray-700" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Account deletion</h3>
                            <p className="text-gray-500 text-sm">
                                Allow users to delete their account to comply with submission guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

