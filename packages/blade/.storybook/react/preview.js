import styled, { createGlobalStyle } from 'styled-components';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { theme, toggleHiddenStoryStyle } from './manager';
import { global } from '@storybook/design-system';
import { BladeProvider } from '../../src/components/BladeProvider';
import { paymentTheme, bankingTheme } from '../../src/tokens/theme';
import ErrorBoundary from './ErrorBoundary';
import { H1, H2, Paragraph, H3, List } from './docs-components';
const { GlobalStyle } = global;

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': { index: 0 },
    canvas: { title: 'Stories', index: 1 },
  },
  // setting default view mode to story when development
  // otherwise while changing component code storybook resets view to story mode
  // which hampers productivity
  viewMode: process.env.NODE_ENV === 'development' ? 'story' : 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Guides',
        ['Intro', 'Installation', 'Usage', 'Local Development'],
        'Tokens',
        [
          'Colors',
          'Typography',
          'Breakpoints',
          'Border',
          'Spacing',
          'Shadows',
          'Motion',
          'CSS Variables',
        ],
        'Components',
        'Recipes',
      ],
    },
  },
  docs: {
    theme,
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      p: styled(Paragraph)`
        margin: 12px 0px;
      `,
      li: List,
      summary: styled.summary`
        font-family: ${theme.fontBase};
        font-weight: normal;
        cursor: pointer;
      `,
    },
    container: ({ children, context }) => {
      const shouldEnforcePaymentTheme = !context.kind.includes('Tokens');

      const getThemeTokens = () => {
        if (context.globals.themeTokenName === 'paymentTheme') {
          return paymentTheme;
        }
        if (context.globals.themeTokenName === 'bankingTheme') {
          return bankingTheme;
        }
        return null;
      };

      const themeTokens = getThemeTokens();

      const GlobalBackground = createGlobalStyle`
        .sbdocs-wrapper {
          background-color: ${
            themeTokens.colors[
              shouldEnforcePaymentTheme || context.globals.colorScheme === 'light'
                ? 'onLight'
                : 'onDark'
            ].surface.background.level3.lowContrast
          };
        }
      `;

      return (
        <DocsContainer context={context}>
          <GlobalBackground />
          <BladeProvider
            key={`${context.globals.themeTokenName}-${context.globals.colorScheme}`}
            themeTokens={shouldEnforcePaymentTheme ? paymentTheme : themeTokens}
            colorScheme={shouldEnforcePaymentTheme ? 'light' : context.globals.colorScheme}
          >
            {children}
          </BladeProvider>
        </DocsContainer>
      );
    },
  },
};

const StoryCanvas = styled.div(
  ({ theme, context }) =>
    `
      position: ${context.viewMode === 'story' ? 'absolute' : 'relative'};
      top: 0;
      left: 0;
      border-right: 'none';
      border: ${theme.border.width.thin}px solid ${theme.colors.surface.border.subtle.lowContrast};
      right: 0;
      width: 100%;
      height: 100%;
      bottom: 0;
      overflow: auto;
      padding: 2rem;
      border-radius: ${
        context.viewMode === 'story'
          ? `${theme.border.radius.none}px`
          : `${theme.border.radius.medium}px`
      };
      background: ${theme.colors.surface.background.level1.lowContrast};
    `,
);

export const decorators = [
  (Story, context) => {
    toggleHiddenStoryStyle(context.globals.showInternalComponents);
    const getThemeTokens = () => {
      if (context.globals.themeTokenName === 'paymentTheme') {
        return paymentTheme;
      }
      if (context.globals.themeTokenName === 'bankingTheme') {
        return bankingTheme;
      }
    };

    return (
      <ErrorBoundary>
        <GlobalStyle />
        <BladeProvider
          key={`${context.globals.themeTokenName}-${context.globals.colorScheme}`}
          themeTokens={getThemeTokens()}
          colorScheme={context.globals.colorScheme}
        >
          <StoryCanvas context={context}>
            <Story />
          </StoryCanvas>
        </BladeProvider>
      </ErrorBoundary>
    );
  },
];

export const globalTypes = {
  themeTokenName: {
    name: 'Theme Tokens',
    description: 'Theme Tokens for Blade',
    defaultValue: 'paymentTheme',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'paymentTheme', title: 'Payment' },
        { value: 'bankingTheme', title: 'Banking' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  colorScheme: {
    name: 'Color Scheme',
    description: 'Color Scheme for Blade',
    defaultValue: 'light',
    toolbar: {
      icon: 'eye',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
