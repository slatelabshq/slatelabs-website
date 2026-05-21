## Goal
Add **Morgan Oxford Education — Custom CRM** as a fourth project on `/work` (Intelligent Systems category) with a full case study page at `/work/morgan-oxford`, matching the depth/structure of the 44DB and Vida Rosa studies.

## Approach
Extend `src/lib/work-data.ts` with a new `Project` entry (slug `morgan-oxford`) including a fully fleshed `CaseStudyDetail`. The existing dynamic route `src/routes/work.$slug.tsx` and the `/work` listing already iterate over `projects`, so no route or component code needs to change — the new entry will render automatically.

Generate one new hero image in the same warm, soft-lit, premium aesthetic as the existing project covers.

## Changes

### 1. New asset: `src/assets/work-morgan-oxford.jpg`
- Generated via `imagegen` (standard quality, 1280x960, warm tones).
- Prompt direction: a clean, modern CRM dashboard on a laptop in a sunlit education setting (books, soft beige + sage palette to fit the existing portfolio without duplicating Ile Eko's laptop shot). Education-sector cues without literal school iconography.

### 2. `src/lib/work-data.ts`
Add a new `Project` to the `projects` array (positioned after Ile Eko so Intelligent Systems is represented):

- **slug**: `"morgan-oxford"`
- **client**: `"Morgan Oxford Education"`
- **title**: `"Morgan Oxford — Education CRM"`
- **category**: `"Intelligent Systems"`
- **oneLiner**: `"A custom CRM built around how their staff actually work."`
- **image**: imported `workMorganOxford`
- **tags**: `["Custom CRM", "Workflow Automation", "Internal Tools"]`
- **detail** (CaseStudyDetail):
  - **industry**: Education
  - **date**: Ongoing
  - **services**: Discovery & Workflow Mapping, Product Design, Custom CRM Build, Staff Onboarding
  - **metrics**: three plausible, conservative outcomes framed as workflow wins (e.g. "1" unified system replacing scattered tools, "<2 wks" staff onboarding, "100%" coverage of their actual workflow). Phrased as labels, not invented hard numbers.
  - **challenge**: Off-the-shelf CRMs forced Morgan Oxford's team to bend their education-specific workflow (student enquiries, advisor handoffs, application tracking) around generic sales pipelines. Data lived in spreadsheets, email threads, and disconnected tools — slowing the team and creating blind spots.
  - **solution** (4 cards):
    - *Workflow Discovery* — shadowed advisors and admin staff to map the real journey from enquiry to enrolment.
    - *Custom Data Model* — built the CRM around students, programmes, and advisor relationships instead of generic "leads/deals".
    - *Tailored Interface* — every screen designed for a specific staff role: no clutter, no unused fields.
    - *Automation Layer* — automated reminders, status changes, and handoffs so nothing slips between teams.
  - **results**: One source of truth for the whole team — advisors spend less time on admin and more time with students, and leadership finally has visibility into the full pipeline.
  - **numbers**: a handful of qualitative wins (unified system, faster onboarding, role-based views, automated handoffs, audit trail).
  - **deliverables**: Workflow audit, data model, custom CRM application, role-based dashboards, automation rules, staff training & documentation.
- Add the matching `import workMorganOxford from "@/assets/work-morgan-oxford.jpg"` at the top of the file.

## Routing note
- `src/routes/work.$slug.tsx` already throws `notFound()` unless `detail` is set, so a full detail page works out of the box at `/work/morgan-oxford`.
- The `/work` listing's special-case for `ile-eko` (linking to `/ile-eko`) is unchanged — Morgan Oxford uses the standard `/work/$slug` path.

## Out of Scope
- No route file changes, no header/nav changes, no new components.
- No hard performance numbers invented — copy stays qualitative and credible. If you want specific stats, send them and I'll swap them in.

## Risk
- Hero image style needs to feel consistent with the other three covers. If the generated image doesn't match, regenerating with a tighter style prompt is cheap.
- Copy is written from the brief you provided (custom CRM, education sector, built around their workflow and staff). Easy to revise once live.
