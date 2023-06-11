import React from "react"
import { webFontFamily } from "./fonts"

export const typography={
    headings:{
        h1:{
            fontFamily:webFontFamily["PlusJakartaSans-Bold"],
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "80px",
            lineHeight: "63px",
        } as React.CSSProperties
    }
}