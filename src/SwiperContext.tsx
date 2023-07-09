import { createContext, useContext } from "react";
import { Swiper } from "swiper";

interface ISwiperContext {
  swiper: Swiper | null;
  setSwiper: (swiper: Swiper | null) => void;
}

export const SwiperContext = createContext<ISwiperContext | undefined>(
  undefined
);

export function useSwiper() {
  const context = useContext(SwiperContext);
  if (!context) {
    throw new Error(`useSwiper must be used within a SwiperProvider`);
  }
  return context;
}
