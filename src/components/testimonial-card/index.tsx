import {
  AVATAR_BG_COLORS,
  ITestimonial,
  PROFILE_RECOMMENDATION_URL,
} from "@/constants/testimonials";
import { EmblaCarouselType } from "embla-carousel";
import { getInitials } from "@/utils";
import { FiArrowUpRight } from "react-icons/fi";

interface ITestimonialCard {
  avatarIndex: number;
  testimonialData: ITestimonial;
  emblaApi?: EmblaCarouselType | undefined;
}

const TestimonialCard = ({
  testimonialData,
  avatarIndex,
  emblaApi,
}: ITestimonialCard) => {
  const { data, name, profileUrl, company, designation } = testimonialData;
  return (
    <div
      className="embla__slide"
      onMouseEnter={() => emblaApi?.plugins()?.autoScroll?.stop?.()}
      onMouseLeave={() => emblaApi?.plugins()?.autoScroll?.play?.()}
    >
      <figure className="border-divider hover:border-primary-border rounded-[18px] border bg-[#0d0d0f] p-5 transition-all">
        <blockquote cite="" className="mb-3.5">
          <p className="font-dm-serif-display mb-1 line-clamp-5 text-lg leading-[1.7] text-[#c8c4bc] italic">
            {data}
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
          <a target="_blank" className="flex gap-2.5" href={profileUrl}>
            <div
              className="font-dm-mono flex h-10 w-10 shrink-0 items-center justify-center rounded-[50%] text-xs text-white uppercase"
              style={{ backgroundColor: AVATAR_BG_COLORS[avatarIndex] }}
              aria-hidden="true"
            >
              {getInitials(name)}
            </div>
            <div className="flex flex-col gap-1">
              <cite className="text-description font-outfit text-sm not-italic">
                {name}
              </cite>
              <span className="text-description font-outfit text-xs text-[#727272]">
                {designation} · {company}
              </span>
            </div>
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;
