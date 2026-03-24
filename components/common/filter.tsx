import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ListFilter } from "lucide-react";

interface FilterOption<T> {
  label: string;
  value: T | null;
  color?: string;
}

interface FilterProps<T> {
  value: T | null;
  onChange: (value: T | null) => void;
  options: FilterOption<T>[];
  label?: string;
  triggerLabel?: string;
}

export default function Filter<T>({
  value,
  onChange,
  options,
  label = "Бүгд",
  triggerLabel,
}: FilterProps<T>) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 whitespace-nowrap">
          <ListFilter className="h-4 w-4 mr-2" />
          {triggerLabel ? triggerLabel : selectedOption?.label || label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem
          className={cn(
            "cursor-pointer transition-colors",
            !value && "font-medium text-primary"
          )}
          onClick={() => onChange(null)}
        >
          {label}
        </DropdownMenuItem>
        <Separator className="my-2" />
        {options.map((option) => (
          <DropdownMenuItem
            key={String(option.value)}
            className={cn(
              "cursor-pointer transition-colors",
              option.color && option.color,
              value === option.value && "font-medium"
            )}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
