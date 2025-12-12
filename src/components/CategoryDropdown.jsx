"use client";

import React from "react";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronsDown } from "lucide-react";

const CategoryDropdown = ({ selectedCategory, onSelectCategory }) => {
  return (
    <Container className="pt-10 pb-8">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1 items-center border-2 border-gray-500 px-4 py-1 rounded-md text-sm">
          Filter by Category <ChevronsDown size={14} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mx-4">
          <DropdownMenuItem onClick={() => onSelectCategory("juice")}>
            Juice
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("spices")}>
            Spices
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("snacks")}>
            Snacks
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("chocos")}>
            Chocos
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("chips")}>
            Chips
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("sauces")}>
            Sauces
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
};

export default CategoryDropdown;
