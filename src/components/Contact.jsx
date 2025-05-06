"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
      },
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.from(formRef.current, {
      x: -100,
      opacity: 0,
    }).from(
      mapRef.current,
      {
        x: 100,
        opacity: 0,
      },
      "<0.2"
    );
  }, []);

  return (
    <section id="contact" className="py-20 bg-white" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Form */}
          <div ref={formRef} className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[var(--bs-primary)] mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bs-secondary)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bs-secondary)]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bs-secondary)]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[var(--bs-primary)] text-white py-3 px-6 rounded-md hover:bg-[var(--bs-secondary)] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Google Map */}
          <div ref={mapRef} className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[var(--bs-primary)] mb-4">
              Our Location
            </h2>
            <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.365760797909!2d-122.40641708468113!3d37.78529727975856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d7740549d%3A0x5e71d8b7db6c1f9b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1664430573485!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
