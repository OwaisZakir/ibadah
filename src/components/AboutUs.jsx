"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const imagesRef = useRef([]);
  const contentRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate images
      ScrollTrigger.batch(imagesRef.current, {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        },
        start: "top 90%",
        toggleActions: "play none none none",
      });

      // Animate content text (title, paragraph, vision, etc.)
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="pt-28 pb-20 relative bg-white text-gray-900 font-sans"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: "url('/assets/arts/hero-bg.png')" }}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            {[
              {
                src: "/assets/about/teach-1.jpg",
                alt: "Instructor teaching on an online learning platform",
              },
              {
                src: "/assets/about/teach-2.jpg",
                alt: "Virtual class in session with engaged students",
              },
              {
                src: "/assets/about/teach-3.jpg",
                alt: "Student participating in an interactive e-learning session",
              },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0 ? "row-span-2" : ""
                } rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300`}
                ref={(el) => (imagesRef.current[idx] = el)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={idx === 0 ? 600 : 500}
                  height={idx === 0 ? 700 : 300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:w-1/2 space-y-6">
            <p className="text-yellow-500 font-semibold uppercase tracking-wide">
              About Us
            </p>
            <h2 className="text-4xl font-bold leading-tight font-poppins">
              Elevating Online Learning Experiences
            </h2>
            <p className="text-base leading-relaxed">
              Our platform connects students and expert instructors around the
              world. With a focus on practical skills, mentorship, and
              interactive content, we aim to create the most impactful digital
              learning environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaLaptopCode className="text-yellow-600 text-xl" />,
                  title: "Our Vision",
                  desc: "To empower learners with accessible, tech-driven education.",
                },
                {
                  icon: (
                    <FaChalkboardTeacher className="text-yellow-600 text-xl" />
                  ),
                  title: "Our Mission",
                  desc: "Deliver personalized and engaging online learning experiences.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-yellow-100 text-yellow-600 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 border rounded-xl p-4 shadow-sm">
              <Image
                src="/assets/about/student.jpg"
                alt="Happy student sharing success story"
                width={70}
                height={70}
                className="rounded-lg"
              />
              <div className="flex-1">
                <p className="text-sm">
                  “This platform helped me land my first job as a developer —
                  the live projects and mentorship made all the difference.”
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-yellow-500">95%</h3>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Real-Time Projects",
                "Expert Instructors",
                "1-on-1 Mentorship",
                "Flexible Learning",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
