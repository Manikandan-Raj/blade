import UnlockIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<UnlockIcon />', () => {
  it('should render UnlockIcon', () => {
    const renderTree = renderWithTheme(
      <UnlockIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
