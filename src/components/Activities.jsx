"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaQuran,
  FaChalkboardTeacher,
  FaLaptopHouse,
  FaUserGraduate,
  FaHeadset,
  FaBookReader,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const activitiesData = [
  {
    icon: <FaQuran className="text-4xl text-green-700" />,
    title: "Quran Recitation",
    desc: "Learn to recite the Quran with proper Tajweed and pronunciation.",
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-green-700" />,
    title: "Tajweed Classes",
    desc: "Master the rules of Tajweed under expert scholars and teachers.",
  },
  {
    icon: <FaLaptopHouse className="text-4xl text-green-700" />,
    title: "One-on-One Sessions",
    desc: "Personalized Quran sessions tailored to your pace and level.",
  },
  {
    icon: <FaUserGraduate className="text-4xl text-green-700" />,
    title: "Courses for Kids & Adults",
    desc: "Dedicated classes for both children and adults with flexible timings.",
  },
  {
    icon: <FaHeadset className="text-4xl text-green-700" />,
    title: "24/7 Support",
    desc: "Get continuous learning support and guidance from our team.",
  },
  {
    icon: <FaBookReader className="text-4xl text-green-700" />,
    title: "Islamic Studies",
    desc: "Explore essential topics in Hadith, Fiqh, and Islamic history.",
  },
];

export default function Activities() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-green-600 font-semibold uppercase tracking-wider">
            Our Offerings
          </p>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            What We Provide at Online Quran Academy
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activitiesData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-green-50 p-6 rounded-3xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
              <a
                href="#"
                className="inline-block text-green-600 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
