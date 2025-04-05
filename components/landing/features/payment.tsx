import { ShoppingCart, CreditCard, Wallet, DollarSign } from "lucide-react"

export default function PaymentsSection() {
    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-textPrimary">Payments</h2>
                    </div>
                    <p className="text-xl text-textSecondary mb-4">Monetize your mobile app with subscriptions or in-app purchases.</p>
                    <p className="text-textSecondary/80">
                        NativeExpress has RevenueCat integrated, which is the standard for mobile app payments and subscriptions. It
                        allows you to integrate Apple Pay, Google Pay, and Stripe payments with minimal effort.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex flex-col gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                                <ShoppingCart className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">In App Purchases</h3>
                                <p className="text-textSecondary text-sm">Implement in-app purchases with ease using RevenueCat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex flex-col gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Subscriptions</h3>
                                <p className="text-textSecondary text-sm">Set up recurring payments and subscription management.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex flex-col gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Pay Wall</h3>
                                <p className="text-textSecondary text-sm">Beautiful and customizable payment walls for your app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
