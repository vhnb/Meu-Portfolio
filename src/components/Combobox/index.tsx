"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const tecs = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "typescript",
    label: "TypeScript",
  },
  {
    value: "firebase",
    label: "Firebase",
  },
  {
    value: "css",
    label: "CSS",
  },
  {
    value: "react.js",
    label: "React.js",
  },
  {
    value: "bootstrap",
    label: "Bootstrap",
  },
]

interface Props {
  onSelectTech: (tech: string | null) => void
}

export function ComboboxDemo({ onSelectTech }: Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? tecs.find((tecs) => tecs.value === value)?.label
            : "Buscar por tecnologia"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar..." className="h-9" />
          <CommandList>
            <CommandEmpty>Sem resultado</CommandEmpty>
            <CommandGroup>
              {tecs.map((tecs) => (
                <CommandItem
                  key={tecs.value}
                  value={tecs.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? null : currentValue

                    setValue(newValue)
                    setOpen(false)

                    onSelectTech(newValue)
                  }}
                >
                  {tecs.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === tecs.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
