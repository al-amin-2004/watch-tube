import Link from "next/link";
import { Search, UserHeadphone } from "../icons/icons";
import { Logo } from "../ui/Logo";
import {
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
} from "../ui/Dropdown";

export default function Header() {
  return (
    <header className="border-b border-border/80 sticky top-0 backdrop-blur-sm z-50 shadow-background/20 shadow-xl">
      <div className="container mx-auto px-2 md:px-0 py-2 md:py-4 flex justify-between items-center text-white">
        {/* LOGO  */}
        <Link href="/">
          <Logo />
        </Link>

        {/* NavBar  */}
        <nav className="text-sm space-x-6 md:space-x-10">
          <Link href="/movies">MOVIES</Link>
          <Link href="/series">SERIES</Link>
          <Link href="/anime">ANIME</Link>
          <Link href="/songs">SONGS</Link>
        </nav>

        {/* search Bar */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center px-3 py-2 border-2 border-transparent bg-surface rounded focus-within:border-primary transition-all duration-500 ease-out">
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none text-sm w-56"
            />
            <Search className="stroke-white" />
          </div>

          <select className="w-14 p-1 outline-none text-sm">
            <option className="bg-surface">EN</option>
            <option className="bg-surface">BN</option>
          </select>
        </div>

        {/* Profile  */}
        <Dropdown>
          <DropdownAction>
            <div className="rounded-sm ring-2 ring-primary p-1.5 cursor-pointer">
              <UserHeadphone className="size-7" />
            </div>
          </DropdownAction>
          <DropdownContent center  text="left">
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Setting</DropdownItem>
            <DropdownDivider></DropdownDivider>
            <DropdownItem>Logout</DropdownItem>
            <DropdownItem>Support</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    </header>
  );
}
