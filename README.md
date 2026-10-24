# Alina Furs: Next.js site with an admin panel

A static Next.js site (the build produces plain files, so hosting on Cloudflare is free).
Everything editable lives in `content/*.json` and `public/uploads/`. The admin panel at `/admin`
edits those files through GitHub, and Cloudflare rebuilds the site after each save.

## How it fits together

| Part | Where |
|---|---|
| Page blocks (text, images, order) | `content/home.json`, edited in admin as "Главная страница (блоки)" |
| Colors | `content/theme.json`, admin: "Цвета и внешний вид" |
| Menu, logo, footer | `content/site.json`, admin: "Меню, логотип, подвал" |
| Uploaded images | `public/uploads/` |
| Admin panel | `public/admin/` (`config.yml` describes the editable fields) |
| Block designs | `components/*.jsx`, original `main.css` in `app/` |

## Try it on your computer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # creates the static site in ./out
```

## Publish for free

1. Create a GitHub repository and push this project to it.
2. In Cloudflare: Workers & Pages, then create an application from your GitHub repo.
   Build command: `npm run build`. Output directory: `out`.
3. Open `public/admin/config.yml` and replace `YOUR-GITHUB-USER/YOUR-REPO`.

## Admin login (one-time setup)

Decap CMS logs in with GitHub and needs a tiny helper service for that login.
Deploy a free Cloudflare Worker that does the GitHub OAuth exchange
(search for "decap cms cloudflare worker oauth"; several open-source templates exist),
then put its address in `base_url` in `config.yml`. Create a GitHub OAuth App for it.
Each person who edits needs a GitHub account with access to the repository.

## Things to know

- A saved change appears on the live site after the rebuild finishes (usually 1-3 minutes).
- Heavy files: `public/img/bg1.png` is about 3 MB. Compress it for faster loading.
- The "buy" buttons in the Pricing block link to `#`: put your payment links there in the admin.
- `public/vendor/` holds the template's CSS libraries copied as they were.
- The other template pages (blog.html, etc.) were not part of the navigation and were not converted.
