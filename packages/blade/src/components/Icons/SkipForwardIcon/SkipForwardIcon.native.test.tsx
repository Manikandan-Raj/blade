import SkipForwardIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<SkipForwardIcon />', () => {
  it('should render SkipForwardIcon', () => {
    const renderTree = renderWithTheme(
      <SkipForwardIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
