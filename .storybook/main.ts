import type {StorybookConfig} from '@storybook/svelte-vite'
const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)',
        '../src/**/*.stories.svelte',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-svelte-csf',
    ],
    framework: {
        name: '@storybook/svelte-vite',
        options: {},
    },
    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },
    docs: {
        autodocs: 'tag',
    },
    features: {
        storyStoreV7: true,
    },
}
export default config
