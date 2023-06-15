import React from 'react';
import { webFontFamily } from './fonts';

export const typography = {
  headings: {
    h1: {
      // fontFamily:webFontFamily["PlusJakartaSans-Bold"],
      // fontStyle: "normal",
      // fontWeight: 700,
      // fontSize: "80px",
      // lineHeight: "63px",

      fontFamily: 'Averia Libre',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '35px',
      lineHeight: '51px',
    },
    h2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '25px',
      lineHeight: '30px',
    },
    h3: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
    },
    h4: {
      FontFamily: 'Inter',
      FontStyle: 'Semi Bold',
      FontSize: '20px',
      LineHeight: '24px',
      fontWeight: 600,
    },
    h5: {
      FontFamily: 'Inter',
      FontStyle: 'Bold',
      FontSize: '20px',
      LineHeight: '24px',
      fontWeight: 700,
    },
    h6: {
      FontFamily: 'Inter',
      FontStyle: 'Semi Bold',
      FontSize: '18px',
      LineHeight: '22px',
      fontWeight: 600,
    },
  } as React.CSSProperties,
  Paragraph: {
    p1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '15px',
    },
    p2: {
      FontFamily: 'Inter',
      FontStyle: 'Regular',
      FontSize: '15px',
      LineHeight: '24px',
      fontWeight: 400,
    },
    p3: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
    },
    p4: {
      FontFamily: 'Inter',
      FontStyle: 'Regular',
      FontSize: '14px',
      LineHeight: '27px',
      fontWeight: 400,
    },
  } as React.CSSProperties,
  buttonText: {
    b1: {
      FontFamily: 'Inter',
      FontStyle: 'Semi Bold',
      FontSize: '14px',
      fontWeight: 600,
      LineHeight: '17px',
    },
    b2: {
      FontFamily: 'Inter',
      FontStyle: 'Medium',
      FontSize: '16px',
      fontWeight: 500,
      LineHeight: '15px',
    },
    b3: {
      FontFamily: 'Inter',
      FontStyle: 'Regular',
      FontSize: '14px',
      LineHeight: '17px',
      fontWeight: 400,
    },
  } as React.CSSProperties,
  Label: {
    l1: {
      FontFamily: 'Inter',
      FontStyle: 'Regular',
      FontSize: '14px',
      LineHeight: '17px',
      fontWeight: 400,
    },
    l2: {
      FontFamily: 'Inter',
      FontStyle: 'Mixed',
      FontSize: '16px',
      LineHeight: '15px',
      fontWeight: 400,
    },
    l3: {
      FontFamily: 'Inter',
      FontStyle: 'Medium',
      FontSize: '16px',
      LineHeight: '19px',
      fontWeight: 500,
    },
    l4: {
      FontFamily: 'Inter',
      FontStyle: 'Semi Bold',
      FontSize: '16px',
      LineHeight: '19px',
      fontWeight: 600,
    },
  } as React.CSSProperties,
  InputfieldText: {
    i1: {
      FontFamily: 'Inter',
      FontStyle: 'Medium',
      FontSize: '15px',
      LineHeight: '18px',
      fontWeight: 500,
    },
    i2: {
      FontFamily: 'Inter',
      FontStyle: 'Regular',
      FontSize: '15px',
      LineHeight: '18px',
      fontWeight: 400,
    },
  } as React.CSSProperties,
};
