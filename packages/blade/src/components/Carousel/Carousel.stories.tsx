import type { ComponentStory, Meta } from '@storybook/react';
import { Title as AddonTitle } from '@storybook/addon-docs';
import type { CarouselProps } from './types';
import { Carousel as CarouselComponent } from './Carousel';
import { CarouselItem } from './CarouselItem';
import { Box } from '~components/Box';
import { Code, Heading, Text } from '~components/Typography';
import { Card, CardBody } from '~components/Card';
import StoryPageWrapper from '~utils/storybook/StoryPageWrapper';
import { Sandbox } from '~utils/storybook/Sandbox';
import { Divider } from '~components/Divider';
import { useTheme } from '~utils';

const Page = (): React.ReactElement => {
  return (
    <StoryPageWrapper
      componentName="Carousel"
      componentDescription="Carousel is a UI component that allows the display and navigation of a set of content items, typically images or cards, within a limited space. It is often used to showcase multiple pieces of content in a visually appealing and interactive way."
      figmaURL={{
        paymentTheme:
          'https://www.figma.com/file/LSG77hEeVYDk7j7WV7OMJE/Blade-DSL---Components-Guideline?type=design&node-id=2115-975755&mode=design&t=5g2Lqj2ez02pxQfO-0',
        bankingTheme:
          'https://www.figma.com/file/LSG77hEeVYDk7j7WV7OMJE/Blade-DSL---Components-Guideline?type=design&node-id=2115-975755&mode=design&t=5g2Lqj2ez02pxQfO-0',
      }}
    >
      <AddonTitle>Usage</AddonTitle>
      <Sandbox editorHeight={500}>
        {`
        import {
          Carousel,
          CarouselItem,
          Text,
        } from '@razorpay/blade/components';

        function App() {
          return (
            <Carousel>
              <CarouselItem>
                <Text>Slide 1</Text>
              </CarouselItem>
              <CarouselItem>
                <Text>Slide 2</Text>
              </CarouselItem>
              <CarouselItem>
                <Text>Slide 3</Text>
              </CarouselItem>
              <CarouselItem>
                <Text>Slide 3</Text>
              </CarouselItem>
            </Carousel>
          )
        }

        export default App;
        `}
      </Sandbox>
    </StoryPageWrapper>
  );
};

const meta: Meta<CarouselProps> = {
  title: 'Components/Carousel',
  component: CarouselComponent,
  parameters: {
    docs: {
      page: Page,
    },
  },
};

type TestimonialData = {
  quote: string;
  longQuote: string;
  name: string;
  role: string;
  company: string;
};

const testimonialData: TestimonialData[] = [
  {
    quote: 'Acquire Customers From New Customer Segments',
    longQuote:
      'Creating No Cost EMI offers through the Razorpay dashboard was surprisingly easy and it has proved to be an important driver in making our subscriptions affordable to a wider audience. We saw ~3x increase of the EMI contribution in the overall sales, thereby unlocking a specific affordability sensitive segment for us.',
    name: 'Subham Kumar',
    role: 'Product Manager',
    company: 'Unacademy',
  },
  {
    quote: 'Improved The Bottom Line With Cash-Like Collection',
    longQuote:
      'Instant Settlements helps us capture last-minute EMI payments and let us make deposits with our financing partners within the requisite period. It leads to better money flow management and customer experience.',
    name: 'Saurav Goyal',
    role: 'Chief Finance Officer',
    company: 'Money View',
  },
  {
    quote: 'Readymade Closed Wallet Solution For Quick Refunds',
    longQuote:
      'We were looking for a closed wallet solution for one-step checkout once the money is loaded in the wallet. Razorpay, our online payment partner, built a white label closed wallet solution which enabled us to create & offer cashbacks and easily refund payments. This improved customer loyalty and the trust in our brand.',
    name: 'Ashish Somani',
    role: 'GM, Strategy and Planning',
    company: 'MedLife',
  },
  {
    quote: 'Single Flow To Collect And Disburse Payments',
    longQuote:
      'Razorpay has been an important partner for our business. We are currently using Smart collect and Route marketplace for collecting payments from users. Their innovative products and quick support has helped us scale our offering to our users. From onboarding documentation to technical integration, Razorpay has been a boon for Indian tech startups.',
    name: 'Pranay Bhardwaj',
    role: 'Product Manager',
    company: 'Slice',
  },
  {
    quote: 'Simplified Reconciliation Process For FinOps Teams',
    longQuote:
      '50% of our payments come via NEFT, RTGS and, IMPS bank transfers. Reconciliation of payments was a tedious and cumbersome process. Razorpay Smart Collect has helped us automate this end-to-end and simplified the process for Finance and Operations team.',
    name: 'Shailesh Gupta',
    role: 'Founder',
    company: 'innov8',
  },
  {
    quote: 'Finance Your Working Capital To Continue Growing',
    longQuote:
      "We experienced a 40% decline in demand due to Covid-19 lockdown but we couldn't afford to cut back on marketing and product development. Razorpay did a fine job of processing and disbursing Working Capital Loan quickly with great support throughout. With increased liquidity, we were able to bounce back to normality in no time.",
    name: 'Girish Khemnani',
    role: 'Owner',
    company: 'Market Insights',
  },
  {
    quote: 'Helped Us Reduce Outstandings By 18%',
    longQuote:
      'By using the card tokenization feature on Razorpay Subscriptions, we were able to eliminate up-front deposits for a majority of our customers. This helped us reduce outstandings by 18% and improved our retention numbers, as more customers were able to afford the product.',
    name: 'Aravind Radhakrishnan',
    role: 'Product Director',
    company: 'Zoomcar',
  },
];

const QuoteSvg = (): React.ReactElement => {
  const { theme } = useTheme();
  return (
    <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.848 0L14.56 4.48C12.2453 6.944 10.6027 9.25867 9.632 11.424C8.66133 13.5893 8.176 15.8293 8.176 18.144L4.704 14.896H15.792V30.576H0V20.272C0 16.464 0.672 12.9547 2.016 9.744C3.36 6.53334 5.63733 3.28534 8.848 0ZM30.576 0L36.288 4.48C33.9733 6.944 32.3307 9.25867 31.36 11.424C30.3893 13.5893 29.904 15.8293 29.904 18.144L26.432 14.896H37.52V30.576H21.728V20.272C21.728 16.464 22.4 12.9547 23.744 9.744C25.088 6.53334 27.3653 3.28534 30.576 0Z"
        fill={theme.colors.brand.primary[300]}
      />
    </svg>
  );
};

const TestimonialCard = ({
  name,
  quote,
  longQuote,
  role,
  company,
}: TestimonialData): React.ReactElement => {
  return (
    <Card height="100%">
      <CardBody height="100%">
        <Box height="100%" display="flex" gap="spacing.4" flexDirection="column">
          <QuoteSvg />
          <Box>
            <Heading type="subtle" weight="bold" size="large">
              {quote}
            </Heading>
            <Text size="medium" type="subdued" marginTop="spacing.4">
              {longQuote}
            </Text>
          </Box>
          <Divider />
          <Box display="flex" alignItems="center" gap="spacing.4">
            <Box flexShrink={0} width="50px" height="50px" borderRadius="max" overflow="hidden">
              <img
                src={`https://api.dicebear.com/6.x/notionists/svg?seed=${name}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                alt={name}
              />
            </Box>
            <Box>
              <Text size="large" weight="bold">
                {name}
              </Text>
              <Text>
                <Text as="span" weight="bold" type="subdued">
                  {company}
                </Text>
                {', '}
                <Text as="span" type="muted">
                  {role}
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

const CarouselExample = (props: CarouselProps): React.ReactElement => {
  return (
    <CarouselComponent {...props} carouselItemAlignment="stretch">
      {testimonialData.map((testimonial) => (
        <CarouselItem key={testimonial.name}>
          <TestimonialCard {...testimonial} />
        </CarouselItem>
      ))}
    </CarouselComponent>
  );
};

const CarouselTestimonialTemplate: ComponentStory<typeof CarouselComponent> = (props) => {
  return (
    <Box margin="auto" width={{ base: '100%', m: '100%' }} padding="spacing.4">
      <CarouselExample {...props} />
    </Box>
  );
};

export const Default = CarouselTestimonialTemplate.bind({});

export const VisibleItems: ComponentStory<typeof CarouselComponent> = (props) => {
  return (
    <Box margin="auto" width={{ base: '100%', m: '100%' }} padding="spacing.4">
      <Text marginY="spacing.5">visibleItems: 1</Text>
      <CarouselExample {...props} visibleItems={1} />
      <Text marginY="spacing.5">visibleItems: 2</Text>
      <CarouselExample {...props} visibleItems={2} />
      <Text marginY="spacing.5">visibleItems: 3</Text>
      <CarouselExample {...props} visibleItems={3} />
    </Box>
  );
};

export const AutoBleed: ComponentStory<typeof CarouselComponent> = (props) => {
  return (
    <Box margin="auto" padding="spacing.4">
      <Box marginY="spacing.8">
        <Text>
          You can achive bleed by setting <Code size="medium">visibleItems</Code> to autofit &
          adding <Code size="medium">carouselItemWidth</Code> to be a fixed width (eg: 300px)
        </Text>
        <Text marginTop="spacing.2">
          If you want bleed on mobile, you can set{' '}
          <Code size="medium">{`carouselItemWidth={{ base: '90%', m: '300px' }}`}</Code> , this will
          give a 10% bleed on mobile screens
        </Text>
      </Box>

      <CarouselExample
        {...props}
        visibleItems="autofit"
        carouselItemWidth={{ base: '90%', m: '300px' }}
      />

      <Text marginY="spacing.8">
        If you want emphasis on 1 item with bleed you can set{' '}
        <Code size="medium">shouldAddStartEndSpacing</Code> to true
      </Text>
      <CarouselExample
        {...props}
        navigationButtonPosition="side"
        shouldAddStartEndSpacing
        visibleItems="autofit"
        carouselItemWidth={{ base: '90%', m: '300px' }}
        scrollOverlayColor="surface.background.level1.lowContrast"
      />
    </Box>
  );
};

export const ButtonPositions: ComponentStory<typeof CarouselComponent> = (props) => {
  return (
    <Box margin="auto" padding="spacing.4">
      <Text marginY="spacing.5">navigationButtonPosition: bottom</Text>
      <CarouselExample {...props} visibleItems={2} navigationButtonPosition="bottom" />
      <Text marginY="spacing.5">navigationButtonPosition: bottom</Text>
      <CarouselExample {...props} visibleItems={2} navigationButtonPosition="side" />
    </Box>
  );
};

export const AutoPlay: ComponentStory<typeof CarouselComponent> = (props) => {
  return (
    <Box margin="auto" padding="spacing.4">
      <Text marginY="spacing.5">
        Setting autoPlay prop will auto scroll the slides every 6s, if you hover or focus inside the
        Carousel it will pause
      </Text>
      <CarouselExample {...props} autoPlay visibleItems={2} />
    </Box>
  );
};

export default meta;
