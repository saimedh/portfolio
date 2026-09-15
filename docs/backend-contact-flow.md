# Portfolio Contact Feature — Architecture & Backend Documentation

**Author / Candidate:** Sai Medh  
**Specialization:** AI Software Engineer / CSE (AI & ML)  
**System:** Portfolio Contact Delivery Pipeline  
**Delivery Engine:** Resend API via Serverless Endpoint (`/api/contact`)  
**Target Recipient:** `saimedhp@gmail.com`  

---

## 1. What a Backend Is

A **backend** is the data access, business logic, and security layer of a software system that runs on a private, controlled server environment rather than inside the user's web browser (the frontend / client). 

In modern cloud architectures, a backend does not require maintaining a 24/7 dedicated physical server. Instead, it is commonly built using **serverless functions** (such as Vercel Functions or AWS Lambda). These are lightweight, isolated Node.js execution environments that spin up on-demand in milliseconds when an HTTP request arrives, execute the business logic, communicate with third-party APIs or databases securely, and immediately shut down once the response is returned.

The client-side browser is completely untrusted because anyone can open DevTools, view and tamper with JavaScript code, extract memory values, or modify outgoing HTTP requests. The backend acts as the trusted gatekeeper that enforces validation rules and protects secret credentials.

---

## 2. What This Contact Feature Does

The **Portfolio Contact Feature** is a secure, dynamic communication pipeline embedded natively into the portfolio at `/contact`. 

Instead of forcing visitors to open a separate desktop email client (such as Outlook, Apple Mail, or Thunderbird) via an outdated `mailto:` link, this feature enables visitors, recruiters, and engineering collaborators to submit inquiries directly within the web page.

### Key Capabilities:
- **Interactive Form:** Fields for Visitor Name, Work/Personal Email, and Message.
- **Client-Side Validation:** Instant input sanity checks for empty values, malformed email addresses, and short messages.
- **Serverless API Delivery:** Asynchronous POST request to `/api/contact`.
- **Server-Side Validation:** Deep input sanitization, character length caps, and payload verification.
- **Transactional Delivery:** Integrates directly with Resend's transactional email infrastructure to dispatch messages directly into Sai Medh's primary inbox (`saimedhp@gmail.com`).
- **Real-Time User Feedback:** Displays clear success and failure notifications while preventing duplicate submissions through request locking.

---

## 3. How Data Flows from Visitor to My Inbox

The end-to-end data flow operates in five sequential stages:

```
[ Visitor Browser ]
        │
        ▼ 1. Visitor fills: Name, Email, Message
[ Client Validation ]  ──(Invalid)──► Show inline red error banners; abort submission
        │
        ▼ 2. (Valid) Disables submit button (shows loading spinner)
[ HTTP POST /api/contact ]  ──(JSON payload: { name, email, message })──►
        │
        ▼
[ Vercel Serverless Function (Node.js) ]
        ├── A. Validates HTTP method (POST only, returns 405 otherwise)
        ├── B. Validates input integrity (Name <= 100, Email <= 254 + RFC 5322, Message 10..2000 chars)
        ├── C. Ingests RESEND_API_KEY from secure process.env
        │
        ▼ 3. Dispatches HTTPS request to Resend API
[ Resend Transactional Engine (api.resend.com) ]
        ├── Sends email from verified domain (onboarding@resend.dev)
        ├── Sets "Reply-To" header to visitor's email address
        │
        ▼ 4. SMTP Relay over TLS
[ Sai Medh's Inbox (saimedhp@gmail.com) ]
        │
        ▼ 5. Serverless function returns JSON response
[ Frontend UI ]
        ├── 200 OK  ──► Clears inputs; displays "Message sent successfully."
        └── 500/400 ──► Re-enables button; displays "Could not send message. Please try again."
```

---

## 4. Why the API Key Stays on the Backend

The `RESEND_API_KEY` is an administrative credential with permissions to dispatch emails from your account. It must **never** be included in client-side HTML, JavaScript, or frontend Git repositories for three critical reasons:

1. **Total Visibility of Frontend Code:** Any code executed in the browser is publicly accessible. Anyone can right-click "Inspect" → "Sources" or monitor the "Network" tab to extract API keys placed in React components or `.env` files prefixed with `VITE_`.
2. **Quota & Financial Theft:** A compromised API key can be weaponized by spammers and bots to send thousands of phishing or spam emails, instantly exhausting your free/paid tier limits and triggering domain blacklisting.
3. **Identity Spoofing:** With access to your API key, an attacker could forge outgoing emails pretending to be sent from your domain or portfolio.

By storing `RESEND_API_KEY` exclusively as a server-side environment variable (`process.env.RESEND_API_KEY`), the key stays strictly within Vercel's secure backend runtime. The browser only ever interacts with `/api/contact`, never seeing or having access to the upstream credentials.

---

## 5. What Happens When a Request Succeeds or Fails

### When the Request Succeeds (HTTP 200 OK)
1. The backend completes server-side validation and Resend confirms email queuing.
2. The endpoint responds with `{ "success": true, "message": "Message sent successfully." }`.
3. The frontend `ContactForm` receives the 200 response:
   - Form inputs (`name`, `email`, `message`) are cleared to prevent accidental re-sending.
   - An emerald-green alert banner appears: **"Message sent successfully."**
   - The submit button re-enables to allow future messages.
   - An email arrives in `saimedhp@gmail.com` with the visitor's message and their email set as the `reply-to` address.

### When the Request Fails (HTTP 400 Client Error or HTTP 500 Server Error)
1. **Invalid Input (HTTP 400):** If someone bypasses client validation or sends an invalid payload, the backend rejects it with `{ "success": false, "error": "Validation message" }`.
2. **Upstream API / Network Failure (HTTP 500):** If Resend experiences an outage, rate limiting occurs, or network connectivity drops, the serverless function catches the exception and returns:
   ```json
   {
     "success": false,
     "error": "Could not send message. Please try again."
   }
   ```
3. The frontend displays a high-contrast red alert banner: **"Could not send message. Please try again."**
4. **Form data is preserved**: The visitor's draft message remains in the input fields so they do not lose what they typed.
5. The submit button is restored from its loading state so the visitor can retry.
