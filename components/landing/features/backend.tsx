import { Database, Server, RefreshCw, Table2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureSection() {
    return (
        <div className="bg-[#FDF8F7] px-4 py-16 md:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <div className="mb-2">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-8 w-8 text-emerald-500"
                        >
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" stroke="none" />
                        </svg>
                    </div>
                    <h2 className="mb-3 text-4xl font-bold tracking-tight">Full-Stack Ready</h2>
                    <p className="mb-4 text-xl text-muted-foreground">Build a full-stack SaaS app.</p>
                    <p className="text-muted-foreground">
                        Build MVP using powerful Supabase Backend.
                        <br />
                        Using PostgreSQL database, authentication, and serverless functions - all preconfigured.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Database className="h-6 w-6 mb-2" />
                            <CardTitle>Database Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Ready-to-use Supabase Postgres database with CRUD examples.</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Server className="h-6 w-6 mb-2" />
                            <CardTitle>Serverless Functions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Pre-configured serverless endpoints with production-ready examples.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <RefreshCw className="h-6 w-6 mb-2" />
                            <CardTitle>Data Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Integrated React Query for efficient server state and cache management.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <Table2 className="h-6 w-6 mb-2" />
                            <CardTitle>Migrations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Preconfigured migrations and seed data for quick development setup.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

