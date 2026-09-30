import sys

with open('src/pages/AboutPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_stmt = "import LogoWatermark from '../components/LogoWatermark';\n"
if import_stmt not in content:
    content = content.replace("import CtaSection from '../components/CtaSection';", "import CtaSection from '../components/CtaSection';\n" + import_stmt)

replacements = [
    (
        '{/* 02 — Our Story (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 02 — Our Story (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 04 — Mission & Vision (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 04 — Mission & Vision (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 06 — Personalised Wellness (Cream) */}\n      <section className="py-32 md:py-40 bg-brand-light">',
        '{/* 06 — Personalised Wellness (Cream) */}\n      <section className="py-32 md:py-40 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 07 — India & Beyond (Cream) */}\n      <section className="py-32 bg-brand-light relative overflow-hidden">',
        '{/* 07 — India & Beyond (Cream) */}\n      <section className="py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 08 — Brand Statement (Cream) */}\n      <section className="py-32 md:py-48 bg-brand-light text-center border-b border-brand-border flex flex-col items-center">',
        '{/* 08 — Brand Statement (Cream) */}\n      <section className="py-32 md:py-48 bg-brand-light text-center border-b border-brand-border flex flex-col items-center relative overflow-hidden">\n        <LogoWatermark />'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

# Also fix the inner divs to be relative z-10 for the replaced sections
# Our story inner:
content = content.replace(
    '        <div className="max-w-4xl mx-auto px-6 text-center animate-section">',
    '        <div className="max-w-4xl mx-auto px-6 text-center animate-section relative z-10">'
)
# Mission & Vision inner:
content = content.replace(
    '        <div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section">',
    '        <div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section relative z-10">'
)
# Brand Statement inner:
content = content.replace(
    '        <div className="max-w-4xl mx-auto px-6 animate-section flex flex-col items-center">',
    '        <div className="max-w-4xl mx-auto px-6 animate-section flex flex-col items-center relative z-10">'
)

# India & Beyond inner (has z-10 already for the content, but the svg is z-0)
# We can leave India & beyond inner as is, since its content has relative z-10 already.

with open('src/pages/AboutPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("AboutPage patched")
