import os, re

files = [
    'src/App.tsx',
    'src/components/ApproachSection.tsx',
    'src/components/Footer.tsx',
    'src/components/FoundersSection.tsx',
    'src/components/LogoWatermark.tsx',
    'src/components/Navbar.tsx',
    'src/components/PhilosophySection.tsx',
    'src/components/ServicesSection.tsx',
    'src/pages/AboutPage.tsx',
    'src/pages/HomePage.tsx',
    'src/pages/ServicesPage.tsx',
    'src/pages/ContactPage.tsx'
]

for fp in files:
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'import\s+React\s*,\s*\{', 'import {', content)
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"];?\s*\n?', '', content)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)

print('Cleaned up React imports successfully.')
