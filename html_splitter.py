import os
import sys
HTML = './src/assets/war.html'
THEMES = './src/assets/test_html'

# Read in the HTML file
with open('./src/assets/war.html', 'r', encoding='utf-8') as file:
    html = file.read()

# Split the HTML file by the specified words
split_html = html.split('<h1 ')

# Save each split section to a separate file
for i, section in enumerate(split_html):
    print(section[:30])
    # Determine the split word
    if 'style' != section[:5]:
        continue

    # Save the section to a file with the split word in the content
    with open(f'./src/assets/test_html/{i}_theme.html', 'w', encoding='utf-8') as file:
        file.write('<h1 ' + section)


# import os
# import re
# from pathlib import Path

# from bs4 import BeautifulSoup

# HTML = './src/assets/war.html'
# FOLDER = './src/assets/test_html'

# # Read the input HTML file
# with open(HTML, "r", encoding="utf-8") as f:
#     html = f.read()

# # Parse the HTML using BeautifulSoup
# soup = BeautifulSoup(html, "html.parser")

# # Find all h2 tags
# h2_tags = soup.find_all("h2")

# # Iterate over each h2 tag
# for i, h2_tag in enumerate(h2_tags):
#     # Create a new HTML file with a numbered filename
#     with open(FOLDER + f"/{i+1}.html", "w", encoding="utf-8") as f:
#         # Write the HTML contents before the h2 tag to the new file
#         f.write(str(h2_tag.))