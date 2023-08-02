/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-useless-fragment */
import styled from 'styled-components';
import React from 'react';
import { Indicators } from './Indicators/Indicators';
import { NavigationButton } from './NavigationButton';
import type { CarouselProps } from './types';
import type { CarouselContextProps } from './CarouselContext';
import { CarouselContext } from './CarouselContext';
import { Box } from '~components/Box';
import BaseBox from '~components/Box/BaseBox';
import { useInterval, useTheme } from '~utils';
import { useId } from '~utils/useId';

type ControlsProp = {
  showIndicators?: boolean;
  navigationButtonPosition?: 'bottom' | 'side';
  activeIndicator: number;
  totalSlides: number;
  onIndicatorButtonClick: (index: number) => void;
  onNextButtonClick: () => void;
  onPreviousButtonClick: () => void;
};

const Controls = ({
  showIndicators,
  navigationButtonPosition,
  activeIndicator,
  totalSlides,
  onIndicatorButtonClick,
  onNextButtonClick,
  onPreviousButtonClick,
}: ControlsProp): React.ReactElement => {
  // 1. buttons or indicators side by side on bottom
  // 3. only indicators on bottom and buttons will be on side
  const isNavButtonsOnBottom = navigationButtonPosition === 'bottom';
  const case3 = showIndicators && navigationButtonPosition === 'side';

  if (isNavButtonsOnBottom) {
    return (
      <Box marginTop="spacing.7" display="flex" alignItems="center" gap="spacing.4">
        <NavigationButton type="previous" variant="filled" onClick={onPreviousButtonClick} />
        {showIndicators ? (
          <Indicators
            onIndicatorButtonClick={onIndicatorButtonClick}
            activeIndex={activeIndicator}
            totalItems={totalSlides}
            variant="blue"
          />
        ) : null}
        <NavigationButton onClick={onNextButtonClick} type="next" variant="filled" />
      </Box>
    );
  }

  if (case3) {
    return (
      <Box marginTop="spacing.7">
        <Indicators
          onIndicatorButtonClick={onIndicatorButtonClick}
          activeIndex={activeIndicator}
          totalItems={totalSlides}
          variant="blue"
        />
      </Box>
    );
  }

  return <></>;
};

const CarouselContainer = styled(BaseBox)(() => {
  return {
    width: '100%',
    overflowX: 'scroll',
    display: 'flex',
    flexWrap: 'nowrap',
    scrollSnapType: 'x mandatory',
    scrollSnapPointsY: `repeat(100%)`,
    scrollBehavior: 'smooth',
    msOverflowStyle: 'none' /* IE and Edge */,
    scrollbarWidth: 'none' /* Firefox */,
    /* Needed to work on iOS Safari */
    webkitOverflowScrolling: 'touch',
    msScrollSnapType: 'mandatory',
    scrollSnapPointsX: 'repeat(100%)',
    msScrollSnapPointsX: 'repeat(100%)',
    // gap: makeSpace(theme.spacing[5]),
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
});

type CarouselBodyProps = {
  children: React.ReactNode;
  totalSlides: number;
  shouldAddStartEndSpacing?: boolean;
  idPrefix: string;
};
const CarouselBody = React.forwardRef<HTMLDivElement, CarouselBodyProps>(
  ({ children, totalSlides, shouldAddStartEndSpacing, idPrefix }, ref) => {
    return (
      <CarouselContainer ref={ref} gap={{ base: 'spacing.4', m: 'spacing.5' }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            index,
            id: `${idPrefix}-carousel-item-${index}`,
            shouldHaveStartSpacing: shouldAddStartEndSpacing && index === 0,
            shouldHaveEndSpacing: shouldAddStartEndSpacing && index === totalSlides - 1,
          });
        })}
      </CarouselContainer>
    );
  },
);

const Carousel = ({
  autoPlay,
  visibleItems,
  showIndicators = true,
  navigationButtonPosition = 'bottom',
  children,
  shouldAddStartEndSpacing,
  carouselItemWidth,
}: CarouselProps): React.ReactElement => {
  const { platform } = useTheme();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [activeIndicator, setActiveIndicator] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const id = useId('carousel');

  const isMobile = platform === 'onMobile';
  let _visibleItems = visibleItems;

  if (isMobile) {
    _visibleItems = visibleItems === undefined ? undefined : 1;
    navigationButtonPosition = 'bottom';
  }

  const isResponsive = visibleItems === undefined;
  const isNavButtonsOnSide = !isResponsive && navigationButtonPosition === 'side';
  const shouldNavButtonsFloat = isResponsive && navigationButtonPosition === 'side';
  const totalNumberOfSlides = React.Children.count(children);
  const numberOfIndicators = Math.ceil(totalNumberOfSlides / (_visibleItems ?? 1));

  // TODO: sync active slide indicator with scroll
  // Add autoplay
  // Add overlay
  // Add accessibility

  // Sync the active slide state with indicator state
  // Because when user scrolls the carousel via touch-and-drag
  // We need to keep the activeSlide state updated
  React.useEffect(() => {
    setActiveSlide(activeIndicator);
  }, [activeIndicator]);

  const goToSlideIndex = (slideIndex: number) => {
    if (!containerRef.current) return;

    const carouselItemId = `#${id}-carousel-item-${slideIndex * (_visibleItems ?? 1)}`;
    const carouselItem = containerRef.current.querySelector(carouselItemId);
    if (!carouselItem) return;

    const carouselItemLeft = carouselItem.getBoundingClientRect().left ?? 0;
    const left = containerRef.current.scrollLeft + carouselItemLeft;
    containerRef.current.scroll({
      left,
      behavior: 'smooth',
    });
    setActiveSlide(slideIndex);
  };

  const goToNextSlide = () => {
    let slideIndex = activeSlide + 1;
    if (slideIndex >= numberOfIndicators) {
      slideIndex = 0;
    }
    goToSlideIndex(slideIndex);
  };

  const goToPreviousSlide = () => {
    let slideIndex = activeSlide - 1;
    if (activeSlide <= 0) {
      slideIndex = numberOfIndicators - 1;
    }
    goToSlideIndex(slideIndex);
  };

  useInterval(
    () => {
      goToNextSlide();
    },
    { delay: 5000, enable: autoPlay },
  );

  const carouselContext = React.useMemo<CarouselContextProps>(() => {
    return {
      visibleItems: _visibleItems,
      carouselItemWidth,
      carouselContainerRef: containerRef,
      setActiveIndicator,
    };
  }, [_visibleItems, carouselItemWidth]);

  return (
    <CarouselContext.Provider value={carouselContext}>
      <BaseBox display="flex" alignItems="center" flexDirection="column">
        <BaseBox
          width="100%"
          position="relative"
          display="flex"
          alignItems="center"
          gap="spacing.4"
          flexDirection="row"
        >
          {shouldNavButtonsFloat ? (
            <BaseBox position="absolute" left="spacing.11">
              <NavigationButton type="previous" variant="filled" onClick={goToPreviousSlide} />
            </BaseBox>
          ) : null}
          {isNavButtonsOnSide ? (
            <NavigationButton type="previous" variant="filled" onClick={goToPreviousSlide} />
          ) : null}
          <CarouselBody
            idPrefix={id}
            totalSlides={totalNumberOfSlides}
            shouldAddStartEndSpacing={shouldAddStartEndSpacing}
            ref={containerRef}
          >
            {children}
          </CarouselBody>
          {shouldNavButtonsFloat ? (
            <BaseBox position="absolute" right="spacing.11">
              <NavigationButton onClick={goToNextSlide} type="next" variant="filled" />
            </BaseBox>
          ) : null}
          {isNavButtonsOnSide ? (
            <NavigationButton onClick={goToNextSlide} type="next" variant="filled" />
          ) : null}
        </BaseBox>
        <Controls
          totalSlides={numberOfIndicators}
          activeIndicator={activeIndicator}
          showIndicators={showIndicators}
          navigationButtonPosition={navigationButtonPosition}
          onIndicatorButtonClick={goToSlideIndex}
          onNextButtonClick={goToNextSlide}
          onPreviousButtonClick={goToPreviousSlide}
        />
      </BaseBox>
    </CarouselContext.Provider>
  );
};

export { Carousel };
