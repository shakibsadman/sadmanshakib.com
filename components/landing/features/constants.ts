import { Lock, CreditCard, Paintbrush, Server } from "lucide-react";
import AuthFeatures from "./authentication";
import PaymentsSection from "./payment";
import StyleSection from "./styles";
import FeatureSection from "./backend";
export const featureTabs = [
    {
        title: "Authentication",
        icon: Lock,
        content: AuthFeatures
    },
    {
        title: "Payments",
        icon: CreditCard,
        content: PaymentsSection

    },
    {
        title: "Styles",
        icon: Paintbrush,
        content: StyleSection
    },
    {
        title: "Backend",
        icon: Server,
        content: FeatureSection
    }
]
