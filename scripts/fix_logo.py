import os

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_content = f.read()

if 'LogoWatermark' not in app_content:
    app_content = app_content.replace("import Navbar from './components/Navbar';", "import Navbar from './components/Navbar';\nimport LogoWatermark from './components/LogoWatermark';")
    app_content = app_content.replace("<Navbar />", "<LogoWatermark />\n      <Navbar />")
    
with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_content)

# Now find and remove <LogoWatermark /> and its import from all files
def remove_watermark(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove import
    lines = content.split('\n')
    lines = [line for line in lines if 'LogoWatermark' not in line]
    content = '\n'.join(lines)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') and file != 'LogoWatermark.tsx' and file != 'App.tsx':
            remove_watermark(os.path.join(root, file))

print('LogoWatermark refactored.')
