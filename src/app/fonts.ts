import localFont from 'next/font/local';

// Define the custom Jawbreak-Sans font
export const jawbreakSans = localFont({
  src: [
    {
      path: '../../public/fonts/Jawbreak-Sans.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-jawbreak',
});

// Export the primary font for backward compatibility
export const primaryFont = jawbreakSans;

// Define Inter-Regular font (using the available font file)
export const interRegular = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

// Alias inter to interRegular since they're the same font
export const inter = interRegular;
