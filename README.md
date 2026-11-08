# discovertaif.armadaresidence.com → the Armada Residence website's Discover Taif guide

The «اكتشف الطائف» guide moved into the Armada Residence website on 9 Oct 2026 (`/discover-taif/`, 17 places from
`content/taif-guide.json`). This repository only keeps the old address working: GitHub Pages serves `index.html` (and
`404.html` for any other path) on `discovertaif.armadaresidence.com`, which redirects to
`https://armadaresidence.com/discover-taif/` keeping the whole query string and hash; `?lang=en` opens the English page.
Without JavaScript a meta refresh and a plain link go to the guide. GitHub Pages cannot answer a server-side 301: like
`club.armadaresidence.com` (ArmadaResidence/armada-club), this is a `location.replace` + meta refresh with a canonical
to the guide, which search engines treat as a permanent redirect.

DNS (Hostinger): `discovertaif` CNAME `armadaresidence.github.io`. Keep `CNAME` and the custom domain with HTTPS enforced.
