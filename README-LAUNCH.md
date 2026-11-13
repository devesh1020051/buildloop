# Launching Buildloop on GitHub Pages (free, about 10 minutes)

## 1. Put it online
1. Sign in at github.com. Click New repository. Name it `buildloop` (or `YOUR-USERNAME.github.io` for a root address). Public. Create.
2. On the empty repo page click "uploading an existing file". Unzip this package and drag ALL the files in (index.html, analytics.js, robots.txt, sitemap.xml, .nojekyll, README-LAUNCH.md). Commit.
   If `.nojekyll` is hidden on your computer, skip it: the site still works.
3. Settings, Pages. Source: "Deploy from a branch". Branch: main, folder: / (root). Save.
4. After a minute your site is live at https://YOUR-USERNAME.github.io/buildloop/
5. Custom domain (optional): Settings, Pages, Custom domain, type it, and add the DNS records GitHub shows. Tick "Enforce HTTPS".

## 2. Turn on traffic monitoring (free, no cookies, no banner)
1. Make a site at goatcounter.com and pick a code such as `buildloop`.
2. On GitHub open `analytics.js`, click the pencil, set `GOATCOUNTER_CODE = 'buildloop'`, commit. The site updates in about a minute.
3. Your GoatCounter dashboard shows visitors, countries, devices and referrers. Each lab opened appears as `lab/<name>` and each sketch run as `run/<name>`.
4. GitHub also shows basic repo traffic (Insights, Traffic), but that counts repository views, not site visitors. Use GoatCounter for visitors.

## 3. Before you share the link
- Replace `YOUR-DOMAIN` in index.html, robots.txt and sitemap.xml with your real address, e.g. YOUR-USERNAME.github.io/buildloop (edit each file with the pencil icon).
- Set `FEEDBACK_URL` in index.html (search for `FEEDBACK_URL=''`) to a Google Form link. Use a project email, not a personal one.
- Check the name Buildloop: domain and trademark search.
- Submit the site at search.google.com/search-console.

## Updating later
Edit or re-upload a file in the repo and commit. GitHub Pages republishes automatically.
