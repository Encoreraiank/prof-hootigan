import os
import shutil
from PIL import Image

workspace = r'e:\THE COMIC SERIES!'
app_public = os.path.join(workspace, 'prof-hootigan', 'public', 'assets')

# Directories
branding_dir = os.path.join(app_public, 'branding')
banners_dir = os.path.join(app_public, 'banners')
chars_dir = os.path.join(app_public, 'characters')
comics_dir = os.path.join(app_public, 'comics', 'catastrophe-club')
store_dir = os.path.join(app_public, 'store')

for d in [branding_dir, banners_dir, chars_dir, comics_dir, store_dir]:
    os.makedirs(d, exist_ok=True)

for i in range(1, 7):
    os.makedirs(os.path.join(comics_dir, f'ep-0{i}'), exist_ok=True)

# Load source images
home_mockup = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 21, 2026, 01_26_27 AM.png'))
comics_mockup = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 21, 2026, 01_26_41 AM.png'))
about_mockup = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 21, 2026, 01_26_48 AM.png'))

wide_river = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 19, 2026, 10_29_41 PM.png'))
wide_stairs = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 20, 2026, 03_50_03 AM.png'))
wide_desk = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 20, 2026, 03_24_38 AM.png'))
prof_desk = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 19, 2026, 09_52_51 PM.png'))
prof_running = Image.open(os.path.join(workspace, 'ChatGPT Image Sep 19, 2026, 09_54_49 PM.png'))

poster = Image.open(os.path.join(workspace, "Catastrophe Club' poster.png"))
ep01_full = Image.open(os.path.join(workspace, 'EP01.png'))
ep02_full = Image.open(os.path.join(workspace, 'EP02.png'))
ep03_full = Image.open(os.path.join(workspace, 'EP03.png'))

# 1. Branding: Logo, Icon, Favicon
logo_full = comics_mockup.crop((38, 14, 255, 90))
logo_full.save(os.path.join(branding_dir, 'prof-hootigan-logo.png'), 'PNG')

logo_icon = comics_mockup.crop((40, 16, 115, 88))
logo_icon.save(os.path.join(branding_dir, 'logo-icon.png'), 'PNG')
logo_icon.resize((64, 64), Image.Resampling.LANCZOS).save(os.path.join(branding_dir, 'favicon.png'), 'PNG')
logo_icon.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(workspace, 'prof-hootigan', 'public', 'favicon.png'), 'PNG')

# 2. Banners
# Home banner from home mockup
home_hero = home_mockup.crop((22, 90, 920, 442))
home_hero.save(os.path.join(banners_dir, 'home-hero.png'), 'PNG')
wide_stairs.save(os.path.join(banners_dir, 'home-hero-wide.png'), 'PNG')

# Comics banner from comics mockup
comics_banner = comics_mockup.crop((22, 95, 920, 256))
comics_banner.save(os.path.join(banners_dir, 'comics-banner.png'), 'PNG')
wide_river.save(os.path.join(banners_dir, 'comics-banner-wide.png'), 'PNG')
wide_desk.save(os.path.join(banners_dir, 'desk-banner-wide.png'), 'PNG')

# Ideas take flight banner
ideas_banner = home_mockup.crop((32, 735, 908, 830))
# Let's check coordinates on home mockup for ideas banner
# Actually in comics mockup it is at (32, 1340, 908, 1450)
ideas_banner = comics_mockup.crop((32, 1340, 908, 1450))
ideas_banner.save(os.path.join(banners_dir, 'ideas-take-flight.png'), 'PNG')

# Prof Hootigan desk banner
prof_desk.save(os.path.join(banners_dir, 'prof-hootigan-desk.png'), 'PNG')
prof_running.save(os.path.join(banners_dir, 'prof-hootigan-running.png'), 'PNG')

# 3. Characters & About assets
about_hero = about_mockup.crop((410, 100, 940, 580))
about_hero.save(os.path.join(banners_dir, 'about-hero.png'), 'PNG')

polaroid = about_mockup.crop((60, 630, 420, 1000))
polaroid.save(os.path.join(chars_dir, 'prof-hootigan-polaroid.png'), 'PNG')

feed_seeds = about_mockup.crop((480, 1055, 925, 1370))
feed_seeds.save(os.path.join(chars_dir, 'feed-the-hootigan.png'), 'PNG')

# 4. Comics covers & full strips
poster.save(os.path.join(comics_dir, 'cover.png'), 'PNG')

# Episode thumbnails from comics mockup
cm = comics_mockup
ep_thumbs = [
    cm.crop((46, 642, 316, 822)),   # EP 01
    cm.crop((344, 642, 604, 822)),  # EP 02
    cm.crop((632, 642, 892, 822)),  # EP 03
    cm.crop((46, 930, 316, 1110)),  # EP 04
    cm.crop((344, 930, 604, 1110)), # EP 05
    cm.crop((632, 930, 892, 1110))  # EP 06
]

for idx, thumb in enumerate(ep_thumbs, 1):
    thumb.save(os.path.join(comics_dir, f'ep-0{idx}', 'cover.png'), 'PNG')

# Full strips
ep01_full.save(os.path.join(comics_dir, 'ep-01', 'strip.png'), 'PNG')
ep02_full.save(os.path.join(comics_dir, 'ep-02', 'strip.png'), 'PNG')
ep03_full.save(os.path.join(comics_dir, 'ep-03', 'strip.png'), 'PNG')
# For 4, 5, 6 preview strips:
ep_thumbs[3].save(os.path.join(comics_dir, 'ep-04', 'strip.png'), 'PNG')
ep_thumbs[4].save(os.path.join(comics_dir, 'ep-05', 'strip.png'), 'PNG')
ep_thumbs[5].save(os.path.join(comics_dir, 'ep-06', 'strip.png'), 'PNG')

# 5. Store Merchandise assets
# High quality crops for products
# Product 1: Season 1 Poster Print
poster_thumb = poster.resize((400, int(400 * poster.height / poster.width)), Image.Resampling.LANCZOS)
poster_thumb.save(os.path.join(store_dir, 'product-poster.png'), 'PNG')

# Product 2: "Paws. Pause. Recharge." Mug illustration (from EP01 crop)
mug_crop = ep01_full.crop((610, 280, 845, 520))
mug_crop.save(os.path.join(store_dir, 'product-mug.png'), 'PNG')

# Product 3: Sticker Pack (cats cuddle)
sticker_crop = ep01_full.crop((210, 940, 780, 1370))
sticker_crop.save(os.path.join(store_dir, 'product-stickers.png'), 'PNG')

# Product 4: Robot Friend Mini Print
robot_crop = ep02_full.crop((120, 1020, 430, 1350))
robot_crop.save(os.path.join(store_dir, 'product-robot.png'), 'PNG')

# Product 5: Prof Hootigan Enamel Pin (from running owl)
owl_pin = prof_running.crop((440, 280, 830, 680))
owl_pin.save(os.path.join(store_dir, 'product-pin.png'), 'PNG')

# Product 6: Pumpkin Seeds Support Pouch
seeds_crop = feed_seeds.crop((10, 80, 420, 310))
seeds_crop.save(os.path.join(store_dir, 'product-seeds.png'), 'PNG')

print('All assets extracted and organized successfully!')
