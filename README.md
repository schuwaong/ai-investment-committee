# Telegram AI Investment Committee Demo

This is a public-facing demo repo for a Telegram-based AI investment committee workflow.

The landing page is served from `index.html` at the repo root, so it can be
published directly with GitHub Pages.

The production bot is private. This repo contains only safe sample materials:

- fake portfolio CSV
- sample cached report
- sample premium portfolio debate
- command list
- architecture overview

## What It Does

The bot turns market context into structured research reports:

- market scan
- options and volatility context
- IPO and industry bottleneck scans
- portfolio risk review
- multi-agent bull/bear committee debate

## Tiers

Free users:

- receive cached example reports
- do not start AI jobs
- do not use AI tokens

Premium users:

- upload a private portfolio
- run quota-limited portfolio-aware debates
- access options/risk/review scans within quota

## Important

This is research support only. It is not financial advice, trade execution, or a promise of returns.

Do not put private bot code, account IDs, access tokens, or real user portfolios in this repo.

## Publish The Landing Page

After signing in to GitHub CLI:

```powershell
gh auth login
gh repo create ai-investment-committee --public --source . --remote origin --push
gh api -X POST repos/:owner/ai-investment-committee/pages -f source.branch=master -f source.path=/
```

The free GitHub Pages URL will be:

```text
https://<your-github-username>.github.io/ai-investment-committee/
```

For a custom domain, add a `CNAME` file containing only the domain name, then
point the domain DNS to GitHub Pages.

## Commands

```text
/pricing
/subscribe
/myplan
/scan
/report
/debate
/addportfolio
/portfolio
/options
/risk
/review
```

## Suggested Pricing

- Free: cached reports only
- Premium beta: USD 29/month, cancel anytime
- Founder beta: USD 99 for 6 months, first 20 users

## Payment Links

Subscription buttons use `main.js`:

- `paymentLink`: monthly premium checkout
- `founderPaymentLink`: founder beta checkout

Replace the placeholder Gumroad URLs with the live Stripe or Gumroad payment
links before sending paid traffic. `/subscribe` should return the same monthly
payment link, and `/cancel` should show the payment provider cancellation path
or admin support flow.
