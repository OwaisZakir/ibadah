"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const rightImgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(sectionRef.current, { opacity: 0, duration: 0.6 })
      .from(leftRef.current, { x: -100, opacity: 0 }, "<0.3")
      .from(headingRef.current, { y: 40, opacity: 0 }, "-=0.4")
      .from(paragraphRef.current, { y: 30, opacity: 0 }, "-=0.6")
      .from(buttonGroupRef.current, { y: 20, opacity: 0 }, "-=0.6")
      .from(
        rightImgRef.current,
        {
          x: 100,
          y: 20,
          scale: 0.9,
          opacity: 0,
        },
        "-=0.4"
      );

    // Parallax effect
    gsap.to(rightImgRef.current, {
      y: -50,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Floating animation loop
    gsap.to(rightImgRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative bg-cover bg-center bg-fixed py-16 md:py-28 min-h-screen flex items-center"
      style={{ backgroundImage: "url('/assets/hero/hero1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: "url('/assets/arts/hero-bg.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div
          ref={leftRef}
          className="w-full md:w-3/5 text-white space-y-6 text-center md:text-left"
        >
          <h5 className="text-base sm:text-lg font-semibold text-secondary tracking-widest uppercase">
            <Typewriter
              options={{
                strings: [
                  "Online Quran Academy",
                  "Learn From Anywhere",
                  "Qualified Tutors",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h5>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md"
          >
            Learn Quran <span className="text-secondary">Anywhere</span> with
            Qualified Teachers
          </h2>

          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Start your journey of Quran learning with expert instructors from
            around the world. Our courses are tailored for all age groups — from
            beginners to advanced learners.
          </p>

          <div
            ref={buttonGroupRef}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[var(--bs-secondary)] to-[var(--bs-primary)] text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:opacity-90 text-center"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="inline-block border border-[var(--bs-secondary)] text-[var(--bs-secondary)] py-3 px-6 rounded-xl font-medium hover:bg-[var(--bs-secondary)] hover:text-white text-center"
            >
              Free Trial
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-full md:w-2/5 justify-center md:justify-end">
          <img
            ref={rightImgRef}
            src="/assets/hero/hero-side-img-1.png"
            alt="Quran Learning"
            className="w-4/5 sm:w-3/4 md:w-[80%] max-w-md drop-shadow-2xl transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}
