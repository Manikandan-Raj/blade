import type { Dispatch, SetStateAction } from 'react';
import type { BaseInputProps } from './BaseInput';
import type { FormInputHandleOnEvent } from '~components/Form';
import type { ActionStates } from '~tokens/theme/theme';
import type {
  FormInputHandleOnClickEvent,
  FormInputHandleOnKeyDownEvent,
} from '~components/Form/FormTypes';

export type BaseInputTagSlotProps = {
  tags?: BaseInputProps['tags'];
  showAllTags: BaseInputProps['showAllTags'];
  setFocusOnInput: () => void;
  setShouldIgnoreBlurAnimation: BaseInputProps['setShouldIgnoreBlurAnimation'];
  handleOnClick: StyledBaseInputProps['handleOnClick'];
  tagRows: BaseInputProps['tagRows'];
  visibleTagsCountRef: React.MutableRefObject<number>;
};

export type BaseInputWrapperProps = Pick<
  BaseInputProps,
  'isDisabled' | 'validationState' | 'showAllTags' | 'tagRows'
> & {
  isFocused?: boolean;
  isLabelLeftPositioned?: boolean;
  currentInteraction: keyof ActionStates;
  isTextArea?: boolean;
  setShowAllTagsWithAnimation: (showAllTagsWithAnimation: boolean) => void;
  children: React.ReactNode;
};

export type StyledBaseInputProps = {
  handleOnFocus?: FormInputHandleOnEvent;
  handleOnChange?: FormInputHandleOnEvent;
  handleOnBlur?: FormInputHandleOnEvent;
  handleOnSubmit?: FormInputHandleOnEvent;
  handleOnKeyDown?: FormInputHandleOnKeyDownEvent;
  handleOnInput?: FormInputHandleOnEvent;
  handleOnClick?: FormInputHandleOnClickEvent;
  hasLeadingIcon?: boolean;
  hasTrailingIcon?: boolean;
  accessibilityProps: Record<string, unknown>;
  currentInteraction: keyof ActionStates;
  setCurrentInteraction: Dispatch<SetStateAction<keyof ActionStates>>;
  isTextArea?: boolean;
  hasTags?: boolean;
} & Pick<
  BaseInputProps,
  | 'as'
  | 'numberOfLines'
  | 'id'
  | 'name'
  | 'type'
  | 'placeholder'
  | 'defaultValue'
  | 'value'
  | 'isDisabled'
  | 'isRequired'
  | 'validationState'
  | 'leadingIcon'
  | 'prefix'
  | 'interactionElement'
  | 'suffix'
  | 'trailingIcon'
  | 'maxCharacters'
  | 'textAlign'
  | 'autoFocus'
  | 'keyboardType'
  | 'keyboardReturnKeyType'
  | 'autoCompleteSuggestionType'
  | 'hasPopup'
  | 'popupId'
  | 'isPopupExpanded'
  | 'shouldIgnoreBlurAnimation'
  | 'autoCapitalize'
>;
export { StyledBaseInput } from './StyledBaseInput.web';
