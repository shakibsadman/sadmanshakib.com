import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featureTabs } from "./constants";

export default function Features() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-accent mb-4">
                    Powerful Features
                </h1>
                <p className="text-xl text-textSecondary max-w-2xl mx-auto">
                    Discover all the tools and capabilities designed to enhance your experience
                </p>
            </div>
            
            <Tabs defaultValue="authentication" className="w-full">
                <div className="relative">
                    <ScrollArea className="w-full">
                        <TabsList className="mb-8 bg-backgroundSecondary/80 backdrop-blur-sm rounded-full p-1.5 border border-border w-fit mx-auto">
                            {featureTabs.map(({ title, icon: Icon }) => (
                                <TabsTrigger
                                    key={title.toLowerCase()}
                                    value={title.toLowerCase()}
                                    className="rounded-full px-6 py-3 font-medium text-base transition-all duration-300
                                    data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary-light
                                    data-[state=active]:text-textPrimary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20
                                    data-[state=inactive]:text-textSecondary data-[state=inactive]:hover:text-textPrimary data-[state=inactive]:hover:bg-backgroundSecondary"
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            className="opacity-90"
                                            size={18}
                                            strokeWidth={2.5}
                                            aria-hidden="true"
                                        />
                                        <span>{title}</span>
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <ScrollBar orientation="horizontal" className="opacity-0" />
                    </ScrollArea>
                </div>
                
                <div className="mt-8 bg-backgroundSecondary/40 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-xl">
                    {featureTabs.map(({ title, content: Content }) => (
                        <TabsContent 
                            key={title.toLowerCase()} 
                            value={title.toLowerCase()}
                            className="mt-0 animate-in fade-in-50 duration-300"
                        >
                            <Content />
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
        </div>
    );
}