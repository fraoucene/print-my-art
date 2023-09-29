"use client";

import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Container from "../ui/container";

const routes = [
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Tarif",
    url: "/tarif",
  },
  {
    title: "Bolg",
    url: "/blog",
  },
];
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex sm:justify-between p-4 border-b">
      <Container>
        <div className="items-center gap-4 flex justify-between w-full">
          <h1 className="text-xl font-bold">Print my Art</h1>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((page) => (
              <Button variant={"ghost"} key={page.title}>
                {page.title}
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            {/* <ProfileButton /> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
