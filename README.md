# Erdem Sports Agent

Stay-fit coach for **Rifat Erdem Sahin** (b. 17 Apr 1980, 183 cm, 96 kg, hypoglycaemic).

- Home: **CB1 1BB**, Cambridge
- **Better** membership — all Cambridge sites. **Parkside:** Mon–Fri 6.30am–10.00pm, Sat–Sun 8.00am–5.30pm ([better.org.uk/parksidepools](https://www.better.org.uk/parksidepools)).
- Tennis: **Christ’s Pieces** (book ClubSpark)
- **Thursday**: Reading travel (no early Cambridge gym)
- London work days: walk before work

Pages: Home · Schedule · 75 Strong · Better · Locations · Supplements · Sleep · Hypos · Sanity Check. Shared menu has site search.

## Schedule (Europe/London)

| Day | Session |
|-----|---------|
| Mon | 06:35 gym strength (Parkside/Abbey) |
| Tue | 06:35 spin class |
| Wed | 18:00 tennis Christ’s Pieces |
| Thu | Reading: 06:45 walk + mobility |
| Fri | 06:35 swim; optional evening table tennis |
| Sat | 10:00 tennis Christ’s Pieces |
| Sun | 09:00 recovery walk |

Recurring events live on the **Pexabo** Google Calendar.

Live: https://sports-agent.polished-boat-17b2.workers.dev

## Deploy

`az login` is used to pull Cloudflare credentials from Key Vault (`dp-kv-deliverypilot`: `cloudflare-api-token`, `cloudflare-account-id`). The token can deploy **Workers**, not Pages.

```bash
az login   # if needed
export CLOUDFLARE_API_TOKEN=$(az keyvault secret show --vault-name dp-kv-deliverypilot --name cloudflare-api-token --query value -o tsv)
export CLOUDFLARE_ACCOUNT_ID=$(az keyvault secret show --vault-name dp-kv-deliverypilot --name cloudflare-account-id --query value -o tsv)
npx wrangler@4 deploy
```
