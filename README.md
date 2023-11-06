## Next.js with custom cache handler fails to serve pre-rendered static HTML (uses getStaticProps) and incremental static regeneration

Because in the examples, there is a lack of reading static HTML from the disk, and the cache is empty, the app fails to serve such pages and shows 404 page.

### Steps to reproduce

1. Build and start the app with `npm run build && npm run start`.
2. Open http://localhost:3000/should-work in the browser.

### Expected behavior

The page is loaded with content and status code 200.

### Actual behavior

404 page is shown.