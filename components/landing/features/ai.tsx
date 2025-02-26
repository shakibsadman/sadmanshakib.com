import { Brain, Bot, Zap, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function AIFeatures() {
    return (
        <div className="bg-[#FDF8F7] px-4 py-16 md:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="mb-2">
                        <Sparkles className="h-8 w-8 text-emerald-500" />

                    </div>
                    <h2 className="mb-3 text-4xl font-bold tracking-tight">AI-Powered Features</h2>
                    <p className="mb-4 text-xl text-muted-foreground">Build intelligent applications.</p>
                    <p className="text-muted-foreground">
                        Integrate cutting-edge AI capabilities into your app.
                        <br />
                        Using preconfigured AI models, natural language processing, and smart automation tools.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Brain className="h-6 w-6 mb-2" />
                            <CardTitle>API Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Integrate Oenai models into your app.</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Bot className="h-6 w-6 mb-2" />
                            <CardTitle>Chat Automation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Pre-built conversational AI endpoints with natural language understanding.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Zap className="h-6 w-6 mb-2" />
                            <CardTitle>Real-Time AI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Integrated real-time AI processing for instant responses and predictions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <MessageSquare className="h-6 w-6 mb-2" />
                            <CardTitle>Content Generation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Ready-to-use AI tools for generating text, summaries, and smart suggestions.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}