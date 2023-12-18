import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Dish {
  title: string;
  description: string;
  imageSrc: string;
}

const dishes: Dish[] = [
  {
    title: "Signature Steaks",
    description:
      "Our hand-selected, aged, and perfectly seasoned steaks are the centerpiece of our menu. From the robust flavors of our Ribeye to the tenderness of the Filet Mignon, each steak is grilled to perfection and served with our house-made herb butter. Try our Porterhouse for two, a feast that combines the rich taste of a New York strip with the tenderness of a filet.",
    imageSrc: "/food.png",
  },
  {
    title: "Seafood Specialties",
    description:
      "Dive into our ocean-fresh seafood dishes, featuring sustainably sourced fish and shellfish. Our Seared Scallops are a crowd favorite, served with a delicate lemon-butter sauce. The Lobster Risotto is rich and creamy, with generous chunks of lobster meat and a touch of saffron. Don't miss our Grilled Salmon, topped with a dill-infused beurre blanc and served alongside seasonal vegetables.",
    imageSrc: "/food.png",
  },
  {
    title: "Farm to Table",
    description:
      "We take pride in our partnerships with local farms to bring you the freshest seasonal produce. Our Roasted Beet Salad is a vibrant mix of red and golden beets, goat cheese, and candied walnuts, all drizzled with a balsamic reduction. The Heirloom Tomato Bruschetta is a simple yet flavorful appetizer, with ripe tomatoes, basil, and a balsamic glaze atop toasted artisan bread.",
    imageSrc: "/food.png",
  },
  {
    title: "Pasta Perfection",
    description:
      "Our pasta dishes are a testament to our love for Italian cuisine. The Wild Mushroom Tagliatelle combines earthy mushrooms with a rich truffle cream sauce. For something with a kick, try our Spicy Penne Arrabbiata, with its bold tomato sauce and chili peppers. And for a classic, our Spaghetti Carbonara is made with pancetta, eggs, and Parmesan, creating a creamy, comforting dish.",
    imageSrc: "/food.png",
  },
  {
    title: "Decadent Desserts",
    description:
      "End your meal on a sweet note with our selection of desserts. The Chocolate Lava Cake is a warm, gooey treat with a molten chocolate center, served with vanilla bean ice cream. Our New York Cheesecake is velvety smooth, topped with a choice of fresh berries or a rich caramel sauce. For a lighter option, our Lemon Sorbet is refreshing and palate-cleansing, served with a mint leaf garnish.",
    imageSrc: "/food.png",
  },
  {
    title: "Innovative Cocktails",
    description:
      "Our bar is stocked with premium spirits and our bartenders are masters of their craft. The Smoked Old Fashioned is a twist on the classic, with a hint of applewood smoke to enhance the whiskey's natural flavors. The Lavender Martini is both elegant and refreshing, with a subtle floral note. For something truly unique, try our Spicy Mango Margarita, a blend of tequila, mango puree, lime, and a touch of jalape�o.",
    imageSrc: "/food.png",
  },
];

const FeaturedDishes: FC = () => {
  return (
    <section className="bg-creamy-white py-12" id="featured-dishes">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal-gray mb-6">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg bg-creamy-white"
            >
              <Image
                src={dish.imageSrc}
                alt={dish.title}
                width={600}
                height={400}
                layout="responsive"
                className="object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-warm-red mb-2">
                  {dish.title}
                </h3>
                <p className="text-charcoal-gray">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
