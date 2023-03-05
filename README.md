```bash
npm create vite mantine-vite --template react-ts

npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/prism @mantine/dropzone @mantine/carousel embla-carousel-react @mantine/spotlight @mantine/modals @mantine/nprogress @emotion/react

rm src/App.css
rm src/index.css
```

Replace `App.tsx` with:

```tsx
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
```

```bash
npm run dev
```