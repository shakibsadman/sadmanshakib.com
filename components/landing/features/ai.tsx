import { Brain, Bot, Zap, MessageSquare, Sparkles } from "lucide-react"

export default function AIFeatures() {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Sparkles className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl font-bold text-textPrimary">AI-Powered Features</h2>
                    </div>
                    <p className="text-xl text-textSecondary mb-4">Build intelligent applications.</p>
                    <p className="text-textSecondary/80">
                        Integrate cutting-edge AI capabilities into your app.
                        <br />
                        Using preconfigured AI models, natural language processing, and smart automation tools.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                <Brain className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">API Integration</h3>
                                <p className="text-textSecondary text-sm">Integrate OpenAI models into your app.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Chat Automation</h3>
                                <p className="text-textSecondary text-sm">
                                    Pre-built conversational AI endpoints with natural language understanding.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Real-Time AI</h3>
                                <p className="text-textSecondary text-sm">
                                    Integrated real-time AI processing for instant responses and predictions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Content Generation</h3>
                                <p className="text-textSecondary text-sm">
                                    Ready-to-use AI tools for generating text, summaries, and smart suggestions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}