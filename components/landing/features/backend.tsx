import { Database, Server, RefreshCw, Table2, Zap } from "lucide-react"

export default function FeatureSection() {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-textPrimary">Full-Stack Ready</h2>
                    </div>
                    <p className="text-xl text-textSecondary mb-4">Build a full-stack SaaS app.</p>
                    <p className="text-textSecondary/80">
                        Build MVP using powerful Supabase Backend.
                        <br />
                        Using PostgreSQL database, authentication, and serverless functions - all preconfigured.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Database Integration</h3>
                                <p className="text-textSecondary text-sm">Ready-to-use Supabase Postgres database with CRUD examples.</p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Server className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Serverless Functions</h3>
                                <p className="text-textSecondary text-sm">
                                    Pre-configured serverless endpoints with production-ready examples.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Data Management</h3>
                                <p className="text-textSecondary text-sm">
                                    Integrated React Query for efficient server state and cache management.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-backgroundSecondary/50 rounded-2xl p-6 border border-border backdrop-blur-sm transition-all duration-300 hover:bg-backgroundSecondary/70">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                <Table2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textPrimary mb-2">Migrations</h3>
                                <p className="text-textSecondary text-sm">
                                    Preconfigured migrations and seed data for quick development setup.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
