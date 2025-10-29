"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, MapPin } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Brew & Bean"
          button={{
            text: "Order Online",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="HEYYYYYYYYYYYYYYYYYYYYYY"
          description="Experience the perfect blend of artisanal coffee, crafted with passion and served with care in our cozy neighborhood coffee shop"
          tag="Premium Coffee"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior"
          imagePosition="right"
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2018, Brew & Bean started as a small neighborhood coffee shop with a big dream: to serve the perfect cup of coffee.",
            "qwfqwfqwfqwfqwfqwf"
          ]}
          buttons={[
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Coffee Selection"
          description="Discover our carefully curated selection of premium coffee blends and single-origin beans"
          tag="Featured Products"
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "Signature Espresso Blend",
              price: "$16.99",
              rating: 5,
              reviewCount: "124",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium espresso blend"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "House Roast Medium",
              price: "$14.99",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "House roast coffee"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Cold Brew Special",
              price: "$12.99",
              rating: 4,
              reviewCount: "67",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate people behind your perfect cup of coffee"
          members={[
            {
              id: "1",
              name: "John Martinez",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/7162994/pexels-photo-7162994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "John Martinez, Head Barista"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Coffee Roaster",
              imageSrc: "https://images.pexels.com/photos/13736138/pexels-photo-13736138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen, Coffee Roaster"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from coffee lovers who've made us their daily choice"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Mike Thompson",
              role: "Regular Customer",
              company: "Local Business Owner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5710147/pexels-photo-5710147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Thompson"
            },
            {
              id: "2",
              name: "Emma Wilson",
              role: "Coffee Enthusiast",
              company: "Marketing Manager",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990160/pexels-photo-5990160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Wilson"
            },
            {
              id: "3",
              name: "David Park",
              role: "Daily Customer",
              company: "Software Developer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4050473/pexels-photo-4050473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park"
            },
            {
              id: "4",
              name: "Lisa Rodriguez",
              role: "Coffee Lover",
              company: "Designer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4861348/pexels-photo-4861348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Rodriguez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee shop"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday through Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM."
            },
            {
              id: "2",
              title: "Do you offer decaf options?",
              content: "Yes! We have several decaf options including our signature decaf espresso blend and decaf pour-over selections."
            },
            {
              id: "3",
              title: "Can I order online for pickup?",
              content: "Absolutely! You can place orders through our website or call us directly. We'll have your order ready for pickup."
            },
            {
              id: "4",
              title: "Do you cater events?",
              content: "Yes, we offer catering services for meetings, events, and special occasions. Contact us for more details and pricing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Come for the coffee, stay for the community"
          description="Join our coffee community and never miss out on special blends, events, and brewing tips delivered to your inbox"
          imageSrc="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee beans and cup"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you'll receive our weekly newsletter with coffee tips and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          copyrightText="© 2025 | Brew & Bean Coffee Shop"
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Coffee",
                  href: "products"
                },
                {
                  label: "Pastries",
                  href: "products"
                },
                {
                  label: "Cold Drinks",
                  href: "products"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Catering",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}