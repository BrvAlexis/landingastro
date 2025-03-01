import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";

export const MainNav = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isClient, setIsClient] = useState(false);

    // Vérification que nous sommes côté client
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Détection de la section active au défilement
    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => {
            const sections = ["services", "expertise", "temoignages"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }

            setActiveSection(window.location.pathname === "/" ? "accueil" : "");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialisation

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient]); // Dépendance à isClient pour s'assurer que ce code s'exécute uniquement côté client

    // Style personnalisé pour les liens actifs
    const getNavLinkStyle = (section) => {
        const baseStyle = navigationMenuTriggerStyle();
        return `${baseStyle} ${activeSection === section ? "bg-primary/10 font-semibold" : ""} transition-all duration-300`;
    };

    // Vérification côté client pour window.location
    const isBlogActive = isClient && window.location.pathname.startsWith("/blog");

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/"
                        className={getNavLinkStyle("accueil")}
                        aria-current={activeSection === "accueil" ? "page" : undefined}
                    >
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={`${navigationMenuTriggerStyle()} ${activeSection === "services" ? "bg-primary/10 font-semibold" : ""} transition-all duration-300`}
                        aria-current={activeSection === "services" ? "page" : undefined}
                    >
                        Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 bg-white rounded-lg shadow-lg animate-in fade-in zoom-in-95 duration-200">
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Optimisation Fiscale</div>
                                    <p className="text-sm text-gray-600">
                                        Stratégies personnalisées pour optimiser votre situation
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Contrôle Fiscal</div>
                                    <p className="text-sm text-gray-600">
                                        Accompagnement expert pendant les contrôles
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Contentieux</div>
                                    <p className="text-sm text-gray-600">
                                        Défense de vos intérêts dans les litiges
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Conseil Patrimonial</div>
                                    <p className="text-sm text-gray-600">
                                        Optimisation de votre patrimoine
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#expertise"
                        className={getNavLinkStyle("expertise")}
                        aria-current={activeSection === "expertise" ? "page" : undefined}
                    >
                        Expertise
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#temoignages"
                        className={getNavLinkStyle("temoignages")}
                        aria-current={activeSection === "temoignages" ? "page" : undefined}
                    >
                        Témoignages
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/blog"
                        className={`${navigationMenuTriggerStyle()} ${isBlogActive ? "bg-primary/10 font-semibold" : ""} transition-all duration-300`}
                        aria-current={isBlogActive ? "page" : undefined}
                    >
                        Blog
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}; 