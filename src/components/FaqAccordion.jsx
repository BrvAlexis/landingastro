import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FaqAccordion({ items }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="bg-gray-50/50 border border-gray-200/80 rounded-lg shadow-sm mb-3 transition-shadow hover:shadow-md"
                    data-animate="fade-in"
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <AccordionTrigger className="text-lg font-semibold text-gray-800 text-left hover:no-underline px-6 py-4">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600 px-6 pb-4 pt-0">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}