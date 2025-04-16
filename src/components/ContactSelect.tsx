import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSelectProps {
  placeholder: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  name: string;
}

export const ContactSelect = ({
  placeholder,
  options,
  name,
}: ContactSelectProps) => {
  return (
    <Select name={name} required>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
