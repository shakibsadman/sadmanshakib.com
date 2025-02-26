import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featureTabs } from "./constants";

export default function Features() {
  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl font-bold text-white text-center my-10">All Features</h1>
      </div>
      <Tabs defaultValue="authentication">
        <ScrollArea>
          <TabsList className="mb-3 gap-1 bg-transparent w-full justify-center">
            {featureTabs.map(({ title, icon: Icon }) => (
              <TabsTrigger
                key={title.toLowerCase()}
                value={title.toLowerCase()}
                className="text-black h-[56px] px-5 font-medium text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none data-[state=inactive]:text-gray-300"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <Icon
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>{title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {featureTabs.map(({ title, content: Content }) => (
          <TabsContent key={title.toLowerCase()} value={title.toLowerCase()}>
            <Content />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
