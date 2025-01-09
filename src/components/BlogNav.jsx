import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const BlogNav = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2" href="/">
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Catégories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            <li>
                                <NavigationMenuLink href="/blog/fiscalite-entreprise">
                                    <div className="font-medium">Fiscalité d'Entreprise</div>
                                    <p className="text-sm text-gray-600">
                                        Actualités et conseils pour les entreprises
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/fiscalite-personnelle">
                                    <div className="font-medium">Fiscalité Personnelle</div>
                                    <p className="text-sm text-gray-600">
                                        Optimisation et gestion patrimoniale
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/international">
                                    <div className="font-medium">Fiscalité Internationale</div>
                                    <p className="text-sm text-gray-600">
                                        Enjeux transfrontaliers et mobilité
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/actualites">
                                    <div className="font-medium">Actualités Fiscales</div>
                                    <p className="text-sm text-gray-600">
                                        Dernières réformes et jurisprudences
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2" href="/blog">
                        Tous les Articles
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2" href="#contact">
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}; 