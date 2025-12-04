import Container from "@/components/Container";
import cartData from "@/data/cartData";
import { Star } from "lucide-react";
import Image from "next/image";

export default async function Page({ params }) {
    params = await params;
    const id = params.id;

    const product = cartData.find(item => String(item.id) === String(id));

    if (!product) {
        return <div className="p-10 text-center text-2xl">Product not found</div>;
    }

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center ">

                {/* IMAGE */}
                <div className="relative w-full h-84 sm:w-120  sm:h-120  overflow-hidden rounded-lg border-2 border-gray-200 shadow-md">
                    <Image
                        src={product.image}
                        alt={product.heading}
                        fill
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2%] object-cover"
                    />
                </div>


                {/* CONTENT */}
                <div className="flex flex-col justify-start md:justify-center space-y-4 w-full md:w-1/2 text-left px-2 pb-10 md:px-0">

                    {/* Product Title */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">{product.heading}</h2>

                    {/* Rating */}
                    <div className="flex gap-1 items-center">
                        <Star size={16} strokeWidth={0.75} className="text-yellow-500" />
                        <p className="text-sm text-gray-600 font-medium">{product.rating} (25 reviews)</p>
                    </div>

                    {/* Price & Pack */}
                    <div className="flex  justify-between items-center">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-700">${product.price}</p>
                        <p className="text-sm text-gray-500">1 pack</p>
                    </div>

                    {/* Stock / Available */}
                    <div className="flex items-center justify-between gap-4">
                        <span className={`${product.available > 0 ? "text-green-600" : "text-red-600"} font-semibold`}>
                            {product.stocks}
                        </span>
                        <span className="text-gray-700 font-medium">
                            {product.available > 0 ? `${product.available} Available` : "Out of Stock"}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-base">
                        {product.description || "No description available for this product."}
                    </p>

                    {/* Add to Cart */}
                    <button
                        disabled={product.available === 0}
                        className={`w-full sm:w-fit  px-6 py-3 rounded-lg text-white transition ${product.available === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-purple-300 hover:bg-purple-600"
                            } `}
                    >
                        Add to Cart
                    </button>
                    <div className="flex flex-col gap-3 mt-6 pt-10 sm:flex-row border-t ">
                        <div className="flex flex-col items-start border border-gray-700 px-8 rounded py-4 w-70 justify-center cursor-pointer">
                            <h4 className="font-semibold text-md sm:text-sm text-gray-800">Free Shipping</h4>
                            <p className="text-gray-600 text-sm sm:text-xs">Free shipping over order $120</p>
                        </div>
                        <div className="flex flex-col items-start border border-gray-700 px-8 rounded py-4 w-70 justify-center cursor-pointer">
                            <h4 className="font-semibold text-md sm:text-sm text-gray-800">Flexible Payment

                            </h4>
                            <p className="text-gray-600 text-sm sm:text-xs">Pay with Multiple Credit Cards

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
    );
}
