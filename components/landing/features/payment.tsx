
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, CreditCard, Wallet } from "lucide-react"

export default function PaymentsSection() {
    return (
        <div className=" bg-[#FDF8F7] mx-auto px-4 py-20">
            <div className="space-y-4 mb-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900">Payments</h1>
                <p className="text-xl text-gray-600">Monetize your mobile app with subscriptions or in-app purchases.</p>
                <p className="text-gray-600">
                    NativeExpress has RevenueCat integrated, which is the standard for mobile app payments and subscriptions. It
                    allows you to integrate Apple Pay, Google Pay, and Stripe payments with minimal effort.
                </p>
            </div>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto ">
                <Card className="bg-white">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <ShoppingCart className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">In App Purchases</h3>
                        <p className="text-gray-600">Implement in-app purchases with ease using RevenueCat.</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Subscriptions</h3>
                        <p className="text-gray-600">Implement in-app purchases with ease using RevenueCat.</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardContent className="p-6 space-y-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Wallet className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Pay Wall</h3>
                        <p className="text-gray-600">Implement in-app purchases with ease using RevenueCat.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

