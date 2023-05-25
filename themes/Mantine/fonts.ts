import localFont from 'next/font/local';

export const PlusJakartaSansBold = localFont({
    src: [
        {
            path: './WebFonts/PlusJakartaSans-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: './WebFonts/PlusJakartaSans-Bold.woff',
            weight: 'bold',
            style: 'normal',
        },
    ],
    display: 'swap'
})

export const PlusJakartaSansBoldItalic = localFont({
    src: [
        {
            path: './WebFonts/PlusJakartaSans-BoldItalic.woff2',
            weight: 'bold',
            style: 'italic',
        },
        {
            path: './WebFonts/PlusJakartaSans-BoldItalic.woff',
            weight: 'bold',
            style: 'italic',
        },
    ],
    display: 'swap'
})

