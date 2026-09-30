import sys

with open('src/pages/ApproachPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_stmt = "import LogoWatermark from '../components/LogoWatermark';\n"
if import_stmt not in content:
    content = content.replace("import CtaSection from '../components/CtaSection';", "import CtaSection from '../components/CtaSection';\n" + import_stmt)

replacements = [
    (
        '{/* 02 — The Philosophy */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 02 — The Philosophy */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 03 — The Four Steps Timeline */}\n      <section ref={timelineRef} className="py-32 bg-brand-light border-y border-brand-border overflow-hidden">',
        '{/* 03 — The Four Steps Timeline */}\n      <section ref={timelineRef} className="py-32 bg-brand-light border-y border-brand-border overflow-hidden relative">\n        <LogoWatermark />'
    ),
    (
        '{/* 04 — Understand (Text | Image) */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 04 — Understand (Text | Image) */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 05 — Plan (Image | Text) */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 05 — Plan (Image | Text) */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 07 — Sustain (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light">',
        '{/* 07 — Sustain (Cream) */}\n      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 08 — Personalisation / Goals */}\n      <section className="py-32 bg-brand-light border-t border-brand-border">',
        '{/* 08 — Personalisation / Goals */}\n      <section className="py-32 bg-brand-light border-t border-brand-border relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 10 — Online Guidance */}\n      <section className="py-32 bg-brand-light relative overflow-hidden text-center">',
        '{/* 10 — Online Guidance */}\n      <section className="py-32 bg-brand-light relative overflow-hidden text-center">\n        <LogoWatermark />'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

content = content.replace(
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section">',
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-6xl mx-auto px-6 lg:px-12">',
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">'
)
content = content.replace(
    '<div className="max-w-4xl mx-auto px-6 text-center animate-section">',
    '<div className="max-w-4xl mx-auto px-6 text-center animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section text-center md:text-left">',
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section text-center md:text-left relative z-10">'
)

with open('src/pages/ApproachPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("ApproachPage patched")
