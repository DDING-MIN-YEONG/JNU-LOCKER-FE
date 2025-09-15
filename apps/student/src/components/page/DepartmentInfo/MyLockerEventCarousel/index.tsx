import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { MyEventType } from "@/types/department-info";
import MyLockerEvent from "../MyLockerEvent";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface MyLockerEventCarouselProps {
  myEventList: MyEventType[];
  options?: EmblaOptionsType;
}

export default function MyLockerEventCarousel({ myEventList, options }: MyLockerEventCarouselProps) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className={cn("embla")}>
      <div className={cn("embla__viewport")} ref={emblaRef}>
        <div className={cn("embla__container")}>
          {myEventList.map(({ availableLockerCount, endAt, id, startAt, title }) => (
            <MyLockerEvent
              id={id}
              key={id}
              availableLockerCount={availableLockerCount}
              endAt={endAt}
              startAt={startAt}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
