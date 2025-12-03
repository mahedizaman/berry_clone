import React from 'react'
import Container from './Container'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import {  ChevronsDown, Search } from 'lucide-react';

const CategoryDropdown = () => {
  return (
    <Container className="pt-10 pb-8">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1 items-center border-2 border-gray-500 px-4 py-1 rounded-md text-sm">
          Filter by Category <ChevronsDown size={14} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-4">
          <DropdownMenuLabel>
            
            <form className="w-full">
              <input
                type="text"
                name="query"
                placeholder="Search for products"
                className="bg-gray-50 text-gray-800 px-4 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 border border-gray-200 w-full max-w-4xl rounded-md hoverEffect"
              />
            </form>
          </DropdownMenuLabel>
          <DropdownMenuItem>Juice</DropdownMenuItem>
          <DropdownMenuItem>Spices</DropdownMenuItem>
          <DropdownMenuItem>Snacks</DropdownMenuItem>
          <DropdownMenuItem>Chocos</DropdownMenuItem>
          <DropdownMenuItem>Chips</DropdownMenuItem>
          <DropdownMenuItem>Sauces</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
}

export default CategoryDropdown