import sys

with open('src/pages/ContactPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_stmt = "import LogoWatermark from '../components/LogoWatermark';\n"
if import_stmt not in content:
    content = content.replace("import { Plus, Minus, ArrowRight } from 'lucide-react';", "import { Plus, Minus, ArrowRight } from 'lucide-react';\n" + import_stmt)

replacements = [
    (
        '{/* 02 — Contact Form + Details */}\n      <section className="py-24 bg-brand-light">',
        '{/* 02 — Contact Form + Details */}\n      <section className="py-24 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 03 — Prefer WhatsApp? */}\n      <section className="py-24 bg-brand-light border-y border-brand-border text-center">',
        '{/* 03 — Prefer WhatsApp? */}\n      <section className="py-24 bg-brand-light border-y border-brand-border text-center relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 05 — FAQ */}\n      <section className="py-32 bg-brand-light">',
        '{/* 05 — FAQ */}\n      <section className="py-32 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 06 — Final Brand Statement */}\n      <section className="py-40 bg-brand-light text-center border-t border-brand-border flex flex-col items-center">',
        '{/* 06 — Final Brand Statement */}\n      <section className="py-40 bg-brand-light text-center border-t border-brand-border flex flex-col items-center relative overflow-hidden">\n        <LogoWatermark />'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

content = content.replace(
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section">',
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-3xl mx-auto px-6 animate-section">',
    '<div className="max-w-3xl mx-auto px-6 animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-4xl mx-auto px-6 lg:px-12 animate-section">',
    '<div className="max-w-4xl mx-auto px-6 lg:px-12 animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-4xl mx-auto px-6 animate-section flex flex-col items-center">',
    '<div className="max-w-4xl mx-auto px-6 animate-section flex flex-col items-center relative z-10">'
)

with open('src/pages/ContactPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("ContactPage patched")
