import os

def fix_gsap(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the useGSAP block
    if 'useGSAP(() => {' not in content:
        return
        
    new_gsap = """  useGSAP(() => {
    gsap.fromTo('.animate-hero', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: pageRef });"""

    import re
    # Replace the old useGSAP block
    content = re.sub(r'  useGSAP\(\(\) => \{.*?\},\s*\{\s*scope:\s*pageRef\s*\}\);', new_gsap, content, flags=re.DOTALL)
    
    # Change first occurrence of 'animate-section' to 'animate-hero'
    content = content.replace('animate-section', 'animate-hero', 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_gsap('src/pages/AboutPage.tsx')
fix_gsap('src/pages/ServicesPage.tsx')
fix_gsap('src/pages/ContactPage.tsx')
print('GSAP fixed.')
