import ShopCard from './ShopCard';

const Shop = () => {
    // Sample data for products
    const products = [
        {
            id: 1,
            title: "Eye Lashes",
            description: "Description for Product 1",
            price: "R149.99",
            rating: 4.5,
            image: "/assets/shop/lashes.jpg"
        },
        {
            id: 2,
            title: "Hair Serum",
            description: "Description for Product 2",
            price: "R124.99",
            rating: 4.2,
            image: "/assets/shop/hairLashes.jpg"
        },
        {
            id: 3,
            title: "Wax Sticks",
            description: "Description for Product 3",
            price: "R129.99",
            rating: 4.7,
            image: "/assets/shop/waxSticks.jpg"
        }
    ];

    return (
        <section className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-6">Shop Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ShopCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;
