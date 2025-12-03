import CategoryDropdown from "@/components/CategoryDropdown";
import Container from "@/components/Container";
import DayOFDeal from "@/components/DayOFDeal";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <Container>
      <Hero />
      <CategoryDropdown />
      <DayOFDeal />
    </Container>
  );
};

export default page;
