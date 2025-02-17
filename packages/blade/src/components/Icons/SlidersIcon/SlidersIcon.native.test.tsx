import SlidersIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<SlidersIcon />', () => {
  it('should render SlidersIcon', () => {
    const renderTree = renderWithTheme(
      <SlidersIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
