import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import type { SelectChevronIconProps } from './types';

const StyledChevronIconContainer = styled(TouchableOpacity)((_props) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const SelectChevronIcon = (props: SelectChevronIconProps): React.ReactElement => {
  const Icon = props.icon;
  return (
    <StyledChevronIconContainer accessibilityLabel="Chevron Icon" onPress={props.onClick}>
      <Icon color="surface.text.normal.lowContrast" size="medium" />
    </StyledChevronIconContainer>
  );
};

export { SelectChevronIcon };
