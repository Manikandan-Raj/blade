import type { BoxProps } from '~components/Box';
import type { SpacingValueType } from '~components/Box/BaseBox';
import type { DotNotationSpacingStringToken } from '~utils/types';

type OverlayColor = BoxProps['backgroundColor'];

type CarouselProps = {
  children: React.ReactNode;
  visibleItems?: 1 | 2 | 3 | undefined;
  shouldAddStartEndSpacing?: boolean;
  autoPlay?: boolean;
  showIndicators?: boolean;
  showOverlay?: boolean;
  overlayColor?: OverlayColor;
  navigationButtonPosition?: 'bottom' | 'side';
  navigationButtonSpacing?: DotNotationSpacingStringToken;
  navigationButtonVariant?: 'filled' | 'stroke';
  indicatorVariant?: 'gray' | 'white' | 'blue';
  carouselItemWidth?: SpacingValueType;
  onChange: (slideIndex: number) => void;
};

export type { CarouselProps };
