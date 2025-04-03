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
                                <NavigationMenuLink href="/blog/droit-fiscal">
                                    <div className="font-medium">Droit Fiscal</div>
                                    <p className="text-sm text-gray-600">
                                        Optimisation fiscale et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/droit-affaires">
                                    <div className="font-medium">Droit des Affaires</div>
                                    <p className="text-sm text-gray-600">
                                        Conseil aux entreprises et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/droit-social">
                                    <div className="font-medium">Droit Social</div>
                                    <p className="text-sm text-gray-600">
                                        Relations de travail et contentieux
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/blog/droit-famille">
                                    <div className="font-medium">Droit de la Famille</div>
                                    <p className="text-sm text-gray-600">
                                        Divorce, succession et contentieux
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