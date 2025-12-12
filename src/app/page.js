"use client";

import React, { useState } from "react";
import CategoryDropdown from "@/components/CategoryDropdown";
import Container from "@/components/Container";
import DayOFDeal from "@/components/DayOFDeal";
import Hero from "@/components/Hero";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Container>
      <Hero />

      <CategoryDropdown
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <DayOFDeal selectedCategory={selectedCategory} />
    </Container>
  );
};

export default Page;
