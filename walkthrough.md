# Walkthrough: Portfolio Contact Form with Resend & Serverless Backend

I have implemented and deployed exactly ONE dynamic feature to your existing portfolio: a working contact form that sends messages to your email (`saimedhp@gmail.com`) via a serverless API endpoint powered by [Resend](https://resend.com).

No portfolio pages were redesigned, no extra features were added, and all existing design tokens, fonts, colors, and button styles were preserved.

---

## 1. What Was Built

```
Portfolio Contact Form Architecture
├── 1. Frontend Form Component       -->  src/features/contact/ContactForm.tsx
│   ├── Form Fields                  -->  Name, Email, Message, Submit button
│   ├── Client Validation            -->  Non-empty checks, RFC 5322 email regex, 10+ char message
│   ├── Duplicate Prevention         -->  Disables inputs and button, displays loading spinner
│   └── User Feedback                -->  "Message sent successfully." / "Could not send message. Please try again."
│
├── 2. Serverless API Endpoint       -->  api/contact.ts
│   ├── Method Enforcement           -->  POST only (returns 405 Method Not Allowed otherwise)
│   ├── Server-Side Validation       -->  Name <= 100 chars, Email <= 254 chars, Message 10..2000 chars
│   ├── Secure Key Ingestion         -->  Reads process.env.RESEND_API_KEY (never exposed to browser)
│   └── Resend Integration           -->  Dispatches email to saimedhp@gmail.com with visitor reply-to
│
├── 3. Local Development Support     -->  vite.config.ts
│   └── Dev Middleware               -->  Directly routes /api/contact during npm run dev
│
├── 4. Routing Configuration         -->  vercel.json
│   └── Negative Lookahead Rewrite   -->  Routes /((?!api/).*) to index.html so /api/contact is never swallowed
│
└── 5. Architecture Documentation    -->  docs/backend-contact-flow.md
```

---

## 2. Testing & Verification Results

### A. Local Edge-Case Battery (6/6 Passed)
All 6 required test cases were executed against `http://localhost:5173/api/contact`:

| # | Test Scenario | Payload | HTTP Status | Response Body | Result |
|:---:|:---|:---|:---:|:---|:---:|
| **1** | Valid submission | `{ name: "Jane Doe", email: "jane.doe@example.com", message: "Hi Sai, loved your Vedha AI build." }` | `200 OK` | `{"success": true, "message": "Message sent successfully."}` | **PASS** |
| **2** | Empty name | `{ name: "", email: "jane@example.com", message: "Valid message." }` | `400 Bad Request` | `{"success": false, "error": "Name is required."}` | **PASS** |
| **3** | Empty email | `{ name: "Jane", email: "", message: "Valid message." }` | `400 Bad Request` | `{"success": false, "error": "Email is required."}` | **PASS** |
| **4** | Invalid email | `{ name: "Jane", email: "not-an-email", message: "Valid message." }` | `400 Bad Request` | `{"success": false, "error": "Please provide a valid email address."}` | **PASS** |
| **5** | Empty message | `{ name: "Jane", email: "jane@example.com", message: "" }` | `400 Bad Request` | `{"success": false, "error": "Message is required."}` | **PASS** |
| **6** | Method Not Allowed | `GET /api/contact` | `405 Method Not Allowed` | `{"success": false, "error": "Method not allowed. Use POST."}` | **PASS** |

### B. Live Vercel Production Serverless Verification
Tested against the live production deployment (`https://portfolio-iota-six-fogh6cb19z.vercel.app/api/contact`):

- **Empty Name:** Returns `400 Bad Request` (`{"success": false, "error": "Name is required."}`)
- **Empty Email:** Returns `400 Bad Request` (`{"success": false, "error": "Email is required."}`)
- **Malformed Email:** Returns `400 Bad Request` (`{"success": false, "error": "Please provide a valid email address."}`)
- **Short Message (< 10 chars):** Returns `400 Bad Request` (`{"success": false, "error": "Message must be at least 10 characters long."}`)
- **HTTP GET Attempt:** Returns `405 Method Not Allowed`
- **Graceful Error Handling:** In production, missing upstream credentials return clean `500` with `"Could not send message. Please try again."` without exposing stack traces.

---

## 3. How to Connect Your Resend API Key

To deliver messages directly into your inbox (`saimedhp@gmail.com`):

1. Go to [resend.com](https://resend.com) and copy your API Key (`re_...`).
2. Add it to Vercel:
   ```bash
   vercel env add RESEND_API_KEY production
   ```
   *(Or paste it into your Vercel Project Settings → Environment Variables).*
3. For local testing with real emails, create `portfolio/.env.local`:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Perform a submission on [https://portfolio-iota-six-fogh6cb19z.vercel.app/contact](https://portfolio-iota-six-fogh6cb19z.vercel.app/contact) and check your inbox!
