import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const AboutUs: React.FC = () => {
  return (
    <section
      className="bg-creamy-white text-charcoal-gray py-12 px-4"
      id="about-us"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Our Story
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <p className="mb-4">
              Nestled in the heart of the city, our restaurant began as a dream
              of two passionate food enthusiasts who wanted to bring an
              unforgettable dining experience to the community. With a love for
              culinary arts and a dedication to hospitality, we opened our doors
              in 2010, aiming to serve not just meals, but memories. Our journey
              has been one of passion, perseverance, and constant evolution, as
              we've grown from a small bistro to a culinary destination. Our
              walls are adorned with pictures that tell our story, from the
              early days of recipe testing and kitchen trials to the
              celebrations and accolades that have marked our growth. We invite
              you to become a part of our ongoing story, to create your own
              memories here, and to indulge in the love for food that is at the
              very core of our establishment.
            </p>
            <p className="mb-4">
              At the core of our restaurant is a simple philosophy: to provide
              an exceptional dining experience that delights the senses and
              nurtures the soul. We believe that a great meal is not just about
              the food on the plate, but the environment in which it is enjoyed,
              the people it is shared with, and the service that makes it
              memorable. Our commitment to sustainability and ethical sourcing
              means that we work closely with local farmers and producers,
              ensuring that the freshest, highest-quality ingredients make their
              way into our kitchen and onto your plate. We strive to innovate
              while respecting culinary traditions, creating dishes that are
              both familiar and exciting. Our team is dedicated to creating an
              atmosphere where every guest feels valued, understood, and taken
              care of from the moment they step through our doors.
            </p>
            <p className="mb-4">
              Behind every dish that leaves our kitchen is a team of talented
              and dedicated professionals who bring our culinary vision to life.
              Our chefs are artists, our servers are storytellers, and our
              managers are the glue that holds it all together. Each member of
              our team is handpicked for their expertise, passion for
              hospitality, and commitment to excellence. Our head chef brings a
              wealth of experience and a creative flair to our menu, crafting
              dishes that are both innovative and comforting. Our servers are
              trained to provide impeccable service, ensuring that every guest's
              experience is seamless and enjoyable. From the kitchen to the
              dining room, our team works in harmony to create an environment
              that is warm, welcoming, and distinctly ours.
            </p>
            <p className="mb-4">
              Our menu is a reflection of our identity: diverse, vibrant, and
              rooted in quality. We take pride in offering a range of dishes
              that cater to a variety of tastes and dietary preferences,
              including vegetarian, vegan, and gluten-free options. Each dish is
              thoughtfully designed to balance flavors, textures, and aromas,
              resulting in a symphony of taste with every bite. Seasonality is
              key to our menu's design, as we aim to showcase the best of what
              each season has to offer. From our signature appetizers to our
              decadent desserts, every item is prepared with meticulous care and
              an eye for detail. We also boast a curated selection of wines,
              craft beers, and artisanal cocktails to complement your meal and
              enhance your dining experience.
            </p>
            <p>
              We believe that our restaurant is more than a place to eat; it's a
              part of the community. As such, we are committed to giving back
              and fostering a sense of togetherness. We regularly participate in
              local events, support charitable causes, and collaborate with
              other businesses to strengthen the bonds within our neighborhood.
              Our community table events are a testament to this commitment,
              where we invite locals to come together and share a meal, sparking
              conversations and building relationships. We also offer cooking
              classes and workshops, sharing our knowledge and passion for food
              with those eager to learn. Our restaurant is not just a business;
              it's a place where community thrives and where we can make a
              positive impact on the lives of those around us.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/how-to-win-friends.png"
                alt="About Us"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
