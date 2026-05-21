## Replace 44DB hero cover image with uploaded logo

### What
Replace the current 16:9 cover photo hero on the 44DB case study page with the uploaded 44DB logo displayed as a centered icon badge, matching the Morgan Oxford Education case study pattern.

### Changes
1. **Copy uploaded logo** into `src/assets/44db-logo.png`
2. **Update `src/routes/work.44db.tsx`:**
   - Import the logo asset
   - Restyle the hero from a wide image layout to a centered text layout:
     - Remove the large `aspect-[16/9]` `<img>` block
     - Add a centered logo container (rounded dark tile ~112×144px, similar to MOE's `w-28 h-32 rounded-3xl`)
     - Keep "Music Collective" category tag
     - Keep the H1 title below the logo
     - Center-align everything in a `max-w-5xl mx-auto text-center` container

### Layout reference (from `work.morgan-oxford.tsx`)
```
<header className="px-6 pt-32 pb-12">
  <div className="max-w-5xl mx-auto text-center">
    <Link to="/work">← All work</Link>
    <div className="mt-12 flex justify-center">
      <div className="w-28 h-32 rounded-3xl ...">
        <Logo />
      </div>
    </div>
    <div className="mt-8 text-xs ... uppercase">Category</div>
    <h1 className="mt-6 text-5xl md:text-7xl ...">Title</h1>
  </div>
</header>
```

The rest of the case study (Brief, Palette, Deliverables, Results, CTA) stays unchanged.