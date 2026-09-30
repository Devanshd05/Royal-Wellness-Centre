import sys

with open('src/pages/HomePage.tsx', 'r') as f:
    content = f.read()

content = content.replace("import EditorialSection from '../components/EditorialSection';", "import EditorialSection from '../components/EditorialSection';\nimport TransformationSection from '../components/TransformationSection';")
content = content.replace("<EditorialSection />", "<EditorialSection />\n      <TransformationSection />")

with open('src/pages/HomePage.tsx', 'w') as f:
    f.write(content)
