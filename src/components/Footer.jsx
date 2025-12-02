import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-purple-50 py-4 fixed bottom-0 w-full">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-gray-500 text-xs text-center md:text-left">
          Copyright © 2025
          <span className="text-purple-500 font-bold text-sm ml-1">
            navzaBD
          </span>
          — all rights reserved.
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/payment.png"
            alt="payment"
            width={700}
            height={700}
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
