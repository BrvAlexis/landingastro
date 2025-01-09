import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const MainNav = () => {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/"
                        className={navigationMenuTriggerStyle()}
                    >
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 bg-white rounded-lg shadow-lg">
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md">
                                    <div className="font-medium mb-1">Optimisation Fiscale</div>
                                    <p className="text-sm text-gray-600">
                                        Stratégies personnalisées pour optimiser votre situation
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md">
                                    <div className="font-medium mb-1">Contrôle Fiscal</div>
                                    <p className="text-sm text-gray-600">
                                        Accompagnement expert pendant les contrôles
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md">
                                    <div className="font-medium mb-1">Contentieux</div>
                                    <p className="text-sm text-gray-600">
                                        Défense de vos intérêts dans les litiges
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#services" className="block p-3 hover:bg-gray-50 rounded-md">
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
                        className={navigationMenuTriggerStyle()}
                    >
                        Expertise
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="#temoignages"
                        className={navigationMenuTriggerStyle()}
                    >
                        Témoignages
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink
                        href="/blog"
                        className={navigationMenuTriggerStyle()}
                    >
                        Blog
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}; 