import ConnnectModal from '../components/ConnectModal'

export default {
  title: 'ConnnectModal',
  component: ConnnectModal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  }
}

const Template = () => <ConnnectModal />

export const Page = Template.bind({})
