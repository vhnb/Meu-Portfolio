import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TbMenu } from "react-icons/tb";
import NavItem from "../NavItem";
import { TbFile, TbBrandGithub, TbFolder } from "react-icons/tb";

export default function MenuMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <TbMenu className="flex md:hidden" size={24} />
            </SheetTrigger>
            <SheetContent className="z-999">
                <SheetHeader>
                    <SheetTitle>Navegação</SheetTitle>
                </SheetHeader>
                <NavItem link="/posts" title="Postagens" targetBlank={false} icon={TbFolder} />
                <NavItem link="https://github.com/vhnb" title="GitHub" targetBlank={true} icon={TbBrandGithub} />
                <NavItem link="" title="Currículo" targetBlank={true} icon={TbFile} />
            </SheetContent>
        </Sheet>
    )
}