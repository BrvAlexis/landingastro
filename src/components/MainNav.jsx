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
    const [mounted, setMounted] = useState(false);

    // Utiliser useEffect pour indiquer que le composant est monté côté client
    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const sections = ["services", "expertise", "equipe"];
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
    }, []);

    // Style personnalisé pour les liens actifs
    const getNavLinkStyle = (section) => {
        const baseStyle = navigationMenuTriggerStyle();
        // N'appliquer les styles actifs que côté client pour éviter les problèmes d'hydratation
        return `${baseStyle} ${mounted && activeSection === section ? "bg-primary/10 font-semibold" : ""} transition-all duration-300`;
    };

    // Rendu du même contenu côté serveur et client
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/"
                        className={getNavLinkStyle("accueil")}
                        aria-current={mounted && activeSection === "accueil" ? "page" : undefined}
                    >
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={`${navigationMenuTriggerStyle()} ${mounted && activeSection === "services" ? "bg-primary/10 font-semibold" : ""} transition-all duration-300`}
                        aria-current={mounted && activeSection === "services" ? "page" : undefined}
                    >
                        Domaines d'expertise
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-6 md:w-[600px] md:grid-cols-3 bg-card rounded-lg shadow-lg animate-in fade-in zoom-in-95 duration-200">
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit Fiscal</div>
                                    <p className="text-sm text-muted-foreground">
                                        Optimisation fiscale et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit des Affaires</div>
                                    <p className="text-sm text-muted-foreground">
                                        Conseil aux entreprises et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit Social</div>
                                    <p className="text-sm text-muted-foreground">
                                        Relations de travail et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit de la Famille</div>
                                    <p className="text-sm text-muted-foreground">
                                        Divorce, succession et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Propriété Intellectuelle</div>
                                    <p className="text-sm text-muted-foreground">
                                        Marques, brevets, droits d'auteur
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Contentieux Divers</div>
                                    <p className="text-sm text-muted-foreground">
                                        Représentation devant les juridictions
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Rédactions d'Actes</div>
                                    <p className="text-sm text-muted-foreground">
                                        Contrats, statuts, baux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit Immobilier</div>
                                    <p className="text-sm text-muted-foreground">
                                        Construction, baux, copropriété
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#expertise" className="block p-3 hover:bg-secondary/10 rounded-md transition-colors duration-200">
                                    <div className="font-medium mb-1">Droit des Contrats</div>
                                    <p className="text-sm text-muted-foreground">
                                        Négociation, rédaction, analyse
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
                        aria-current={mounted && activeSection === "expertise" ? "page" : undefined}
                    >
                        Expertises
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#equipe"
                        className={getNavLinkStyle("equipe")}
                        aria-current={mounted && activeSection === "equipe" ? "page" : undefined}
                    >
                        Notre Équipe
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}; 