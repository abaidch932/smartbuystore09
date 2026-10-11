# Smart Buy Store (GitHub version)

Is version mein **koi database nahi hai**. Tumhara saara data (products) GitHub repo ke andar `data/products.json` mein store hota hai, aur images `public/products/` folder mein. GitHub par file edit karte hi Vercel site ko khud dobara deploy kar deta hai (1-2 minute).

## Pehli baar setup (sirf ek dafa)
1. github.com par naya repository banao (jaise `smart-buy-store`).
2. Is folder ki saari files repo mein upload karo (GitHub > Add file > Upload files), ya computer se `git push` karo.
3. vercel.com par GitHub se login karo > **Add New Project** > apna repo choose karo > **Deploy**.
4. Vercel > Settings > Environment Variables mein dalo: `NEXT_PUBLIC_SITE_URL` (apni site ka https link) aur `NEXT_PUBLIC_CONTACT_EMAIL`. Phir Redeploy karo.

## Naya product add karna (roz ka kaam)
1. **Image upload:** GitHub repo mein `public/products` folder kholo > Add file > Upload files > product ki photo (jpg/png/webp, chhoti size, jaise `blender.jpg`) > Commit.
2. **Product likho:** `data/products.json` kholo > pencil (Edit) icon > list ke andar naya block add karo (pichle block ke baad comma `,` lagana na bhoolo):

```json
{
  "slug": "portable-blender",
  "title": "Portable Blender",
  "description": "Short, honest description.",
  "category": "kitchen-gadgets",
  "image": "/products/blender.jpg",
  "price": 24.75,
  "originalPrice": 35.00,
  "affiliateUrl": "https://s.click.aliexpress.com/e/_xxxxx",
  "featured": false,
  "published": true,
  "addedAt": "2026-10-11"
}
```
3. **Commit changes** dabao. 1-2 minute mein site par product aa jayega.

Fields: `category` in mein se ek: `home-bedroom`, `kitchen-gadgets`, `beauty-personal-care`, `storage-organization`, `electronics`, `trending-deals`. `price` sirf number ho (quotes ya $ nahi). `originalPrice` optional hai, aur sirf tab dalo jab sach mein pehle wali price thi. `affiliateUrl` https se shuru ho. Product chhupane ke liye `"published": false`, hatane ke liye block delete kar do. `image` ka link `https://...` bhi ho sakta hai.

## Galti ho jaye to?
Build validation galat data (comma bhoolna, galat category, http link, wagera) pakar leta hai. Vercel deploy **fail** ho jata hai aur **purani sahi site chalti rehti hai**. Vercel > Deployments mein error message batata hai kaunse product mein kya galat hai. File theek karo, commit karo.

## Clicks ka data
Shop Now `/go/<slug>` se guzar kar affiliate link par jata hai (sirf `products.json` mein likha link, koi aur nahi, to open-redirect ka khatra nahi). Har click Vercel > Logs mein ek JSON line ban kar dikhta hai (`affiliate_click`, product slug, time, country agar mile). **Yeh logs Vercel par limited muddat ke liye rehte hain**, GitHub mein store nahi hote, aur koi dashboard ya CSV nahi hai. Lambi muddat ki analytics ya dashboard chahiye ho to pichla Supabase wala version use karo, ya Vercel Analytics on karo.

## Local par chalana (optional)
```bash
npm install
npm run dev
```

## Abhi baki / dhyan do
- Yeh code bina internet ke likha gaya, is liye `npm install` aur `npm run build` abhi chalaye nahi gaye. Validation logic test ho chuka hai. Pehle deploy par chhoti-moti error aa sakti hai.
- Sample products `published: false` hain. Preview ke liye `true` karo, phir delete karke apne products dalo.
- Privacy Policy aur Terms ke `[DATE]` aur bracket wale hisse bharo aur launch se pehle review karwao.
- Apne AliExpress affiliate program ke terms check karo (images, prices ka istemal).
- Yeh sirf clicks hain, sales ya commission track nahi hota.
- Repo **private** rakho agar affiliate links public nahi dikhane, lekin site khud links `/go/...` se hi use karti hai.
