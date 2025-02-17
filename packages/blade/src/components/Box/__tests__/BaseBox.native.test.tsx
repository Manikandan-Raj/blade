import BaseBox from '../BaseBox';
import renderWithTheme from '~utils/testing/renderWithTheme.native';
import { metaAttribute, MetaConstants } from '~utils/metaAttribute';
import { Text } from '~components/Typography';

describe('<BaseBox />', () => {
  it('should render BaseBox component with the correct styles', () => {
    const renderTree = renderWithTheme(
      <BaseBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        paddingTop="spacing.3"
        paddingBottom="spacing.4"
        paddingLeft="spacing.5"
        paddingRight="spacing.6"
        minHeight="48px"
        maxHeight="56px"
        minWidth="48px"
        maxWidth="56px"
        position="absolute"
        top="0px"
        right="0px"
        bottom="0px"
        left="0px"
        overflow="hidden"
        height="auto"
        width="auto"
      />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });

  it('should render BaseBox component with elevation', () => {
    const renderTree = renderWithTheme(
      <BaseBox
        width="200px"
        height="200px"
        backgroundColor="surface.background.level1.lowContrast"
        elevation="highRaised"
      >
        <Text>Should only have 1 View wrapper</Text>
      </BaseBox>,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });

  it('should have proper meta attributes', () => {
    const { getByTestId } = renderWithTheme(<BaseBox testID="hello" />);
    expect(getByTestId('hello')).toHaveProp('data-blade-component', MetaConstants.BaseBox);
  });

  it('passed in metaAttribute should override default one', () => {
    const { getByTestId } = renderWithTheme(
      <BaseBox {...metaAttribute({ name: 'test' })} testID="hello" />,
    );
    expect(getByTestId('hello')).toHaveProp('data-blade-component', 'test');
  });
});
