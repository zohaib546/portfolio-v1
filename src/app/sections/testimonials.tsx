"use client";
import useEmblaCarousel from "embla-carousel-react";
import autoScroll from "embla-carousel-auto-scroll";
import DotButton from "@/components/dot-button";
import TestimonialCard from "@/components/testimonial-card";
import { TESTIMONIAL_DATA } from "@/constants/testimonials";
import { useDotButton } from "@/hooks/useDotButton";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      autoScroll({
        speed: 0.4,
      }),
    ],
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section id="testimonials" className="flex flex-col gap-5 px-0">
      <div className="px-[40px]">
        <p className="subtitle">Social proof</p>
        <h3>What colleagues say</h3>
      </div>

      <div className="relative">
        <div className="embla__side embla__side--left" aria-hidden="true"></div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {TESTIMONIAL_DATA.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonialData={testimonial}
                  avatarIndex={index}
                  emblaApi={emblaApi}
                />
              ))}
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
              />
            ))}
          </div>
        </div>
        <div
          className="embla__side embla__side--right"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;
