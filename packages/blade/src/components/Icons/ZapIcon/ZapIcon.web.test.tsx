import ZapIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<ZapIcon />', () => {
  it('should render ZapIcon', () => {
    const { container } = renderWithTheme(
      <ZapIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
