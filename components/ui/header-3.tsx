import * as React from "react";
import { Menu } from "@radix-ui/react-menu";
import * as MenuPrimitive from "@radix-ui/react-menu";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-support border-b border-border/50">
      <div className="px-4 lg:px-8 mx-auto max-w-7xl flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-sm">P</span>
            </div>
            <div className="text-foreground">
              <h1 className="text-lg font-semibold tracking-tight">Prajwal</h1>
              <p className="text-muted-foreground text-xs">Global Payments Made Simple</p>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Menu className="relative inline-block text-sm">
              <MenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open user menu">
                  <Moon className="size-4" />
                </Button>
              </MenuTrigger>
              <MenuContent className="w-48 origin-top-right right-0 mt-2">
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <Sun className="size-4 opacity-0" />
                  <span className="text-foreground">Light Mode</span>
                </MenuItem>
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <Moon className="size-4" />
                  <span className="text-foreground">Dark Mode</span>
                </MenuItem>
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <Moon className="size-4" />
                  <span className="text-foreground">System Setting</span>
                </MenuItem>
                <MenuSeparator className="my-1" />
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-muted-foreground">Sign Out</span>
                </MenuItem>
              </MenuContent>
            </Menu>

            <Button variant="outline">
              Get Started
            </Button>
          </div>
        </div>

        <div className="lg:hidden">
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Menu className="relative inline-block z-[50]">
              <MenuTrigger asChild>
                <svg className="size-5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </MenuTrigger>
              <MenuContent className="w-52 origin-top-right right-0 mt-2">
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-foreground">Features</span>
                </MenuItem>
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-foreground">How it works</span>
                </MenuItem>
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-foreground">Security</span>
                </MenuItem>
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-foreground">Pricing</span>
                </MenuItem>
                <MenuSeparator className="my-1" />
                <MenuItem className="flex items-center space-x-3 rounded-sm px-2 py-1.5 text-sm">
                  <span className="text-muted-foreground">Sign Out</span>
                </MenuItem>
              </MenuContent>
            </Menu>
          </Button>
        </div>
      </div>
    </header>
  );
};

const MenuTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </MenuPrimitive.Trigger>
));
MenuTrigger.displayName = MenuPrimitive.Trigger.displayName;

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.Content
    ref={ref}
    className={cn(
      "min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    {children}
  </MenuPrimitive.Content>
));
MenuContent.displayName = MenuPrimitive.Content.displayName;

const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </MenuPrimitive.Item>
));
MenuItem.displayName = MenuPrimitive.Item.displayName;

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenuSeparator.displayName = MenuPrimitive.Separator.displayName;

export { Header };