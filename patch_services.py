import sys

with open('src/pages/ServicesPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_stmt = "import LogoWatermark from '../components/LogoWatermark';\n"
if import_stmt not in content:
    content = content.replace("import CtaSection from '../components/CtaSection';", "import CtaSection from '../components/CtaSection';\n" + import_stmt)

replacements = [
    (
        '{/* 02 — Service Philosophy */}\n      <section className="py-24 bg-brand-light text-center">',
        '{/* 02 — Service Philosophy */}\n      <section className="py-24 bg-brand-light text-center relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 03 — Main Services */}\n      <section className="py-24 bg-brand-light">',
        '{/* 03 — Main Services */}\n      <section className="py-24 bg-brand-light relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '<section key={service.id} className="py-24 md:py-32 bg-brand-light border-t border-brand-border">',
        '<section key={service.id} className="py-24 md:py-32 bg-brand-light border-t border-brand-border relative overflow-hidden">\n            <LogoWatermark />'
    ),
    (
        '{/* 05 — Who We Support */}\n      <section className="py-32 bg-brand-light border-t border-brand-border">',
        '{/* 05 — Who We Support */}\n      <section className="py-32 bg-brand-light border-t border-brand-border relative overflow-hidden">\n        <LogoWatermark />'
    ),
    (
        '{/* 07 — Online Guidance */}\n      <section className="py-32 bg-brand-light relative overflow-hidden text-center">',
        '{/* 07 — Online Guidance */}\n      <section className="py-32 bg-brand-light relative overflow-hidden text-center">\n        <LogoWatermark />'
    ),
    (
        '{/* 08 — How It Works */}\n      <section className="py-32 bg-brand-light border-t border-brand-border text-center">',
        '{/* 08 — How It Works */}\n      <section className="py-32 bg-brand-light border-t border-brand-border text-center relative overflow-hidden">\n        <LogoWatermark />'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

# Fix inner divs
content = content.replace(
    '<div className="animate-section max-w-4xl mx-auto px-6">',
    '<div className="animate-section max-w-4xl mx-auto px-6 relative z-10">'
)
content = content.replace(
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section">',
    '<div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section relative z-10">'
)
content = content.replace(
    '<div className="max-w-5xl mx-auto px-6 animate-section">',
    '<div className="max-w-5xl mx-auto px-6 animate-section relative z-10">'
)
# We don't touch the Hero section's max-w-4xl because it's first, actually the first animate-section max-w-4xl is in Hero! 
# Let's fix that. In hero, we should remove the z-10 or just leave it. Leaving z-10 in Hero is harmless since it doesn't have a watermark but it won't break anything.

with open('src/pages/ServicesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("ServicesPage patched")
