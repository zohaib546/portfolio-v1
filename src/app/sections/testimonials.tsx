"use client";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  AVATAR_BG_COLORS,
  PROFILE_RECOMMENDATION_URL,
  TESTIMONIAL_DATA,
} from "./../../constants/testimonials";
import { FiArrowUpRight } from "react-icons/fi";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section id="testimonials" className="flex flex-col gap-5 px-0">
      <div className="px-[40px]">
        <p className="subtitle">Social proof</p>
        <h3>What colleagues say</h3>
      </div>

      <div className="relative">
        <div className="embla__side embla__side--left"></div>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {TESTIMONIAL_DATA.map((testimonial, index) => (
                <div key={index} className="embla__slide">
                  <figure className="border-divider rounded-[18px] border bg-[#0d0d0f] p-5">
                    <blockquote cite="" className="mb-3.5">
                      <p className="font-dm-serif-display mb-1 line-clamp-5 text-lg leading-[1.7] text-[#c8c4bc] italic">
                        {testimonial.data}
                      </p>
                      <a
                        target="_blank"
                        href={PROFILE_RECOMMENDATION_URL}
                        className="text-primary font-dm-serif-display flex items-center"
                      >
                        Read More <FiArrowUpRight fontSize={18} />
                      </a>
                    </blockquote>
                    <figcaption>
                      <a
                        target="_blank"
                        className="flex gap-2.5"
                        href={testimonial.profileUrl}
                      >
                        <div
                          className="font-dm-mono flex h-10 w-10 shrink-0 items-center justify-center rounded-[50%] text-xs text-white uppercase"
                          style={{ backgroundColor: AVATAR_BG_COLORS[index] }}
                          aria-hidden="true"
                        >
                          {getInitials(testimonial.name)}
                        </div>
                        <div className="flex flex-col gap-1">
                          <cite className="text-description font-outfit text-sm not-italic">
                            {testimonial.name}
                          </cite>
                          <span className="text-description font-outfit text-xs text-[#727272]">
                            {testimonial.designation} · {testimonial.company}
                          </span>
                        </div>
                      </a>
                    </figcaption>
                  </figure>
                </div>
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
        <div className="embla__side embla__side--right"></div>
      </div>
    </section>
  );
};

const getInitials = (name) => {
  const splittedName = name.split(" ");
  return `${splittedName[0].split("")[0]}${splittedName[1].split("")[0]}`;
};

const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export default Testimonials;
