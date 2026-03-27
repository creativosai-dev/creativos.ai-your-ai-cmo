import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl px-4 py-16">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold font-heading mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026 · Effective immediately</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              creativOS AI ("we", "our", "the platform") is an AI-powered marketing intelligence tool built for D2C brands. We help brands analyse their advertising performance across Meta Ads and Google Ads.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related queries, contact us at: <a href="mailto:privacy@creativos.in" className="text-primary hover:underline">privacy@creativos.in</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">2. What Data We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Account information</strong> — When you sign in with Google, we receive your name, email address, and profile picture from Google. We use this to create and identify your account.</p>
              <p><strong className="text-foreground">Ad performance data</strong> — When you connect Meta Ads or Google Ads, we fetch aggregated campaign performance metrics: spend, impressions, clicks, conversions, and ROAS. We fetch only what is necessary to generate your analysis report. We do not access your creative assets, audience data, or personal information about your customers.</p>
              <p><strong className="text-foreground">CSV uploads</strong> — If you upload a CSV file, the data is processed in memory to generate your report and stored in our database linked to your account. Raw CSV files are not permanently stored.</p>
              <p><strong className="text-foreground">Usage data</strong> — We track product events (e.g. reports generated, actions taken) to understand how brands use the platform and improve the product. No personally identifiable information is attached to these events.</p>
              <p><strong className="text-foreground">Feedback</strong> — When you mark a recommendation as done or rate its outcome, we store that feedback to improve our AI recommendations over time.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">3. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use your data for the following purposes only:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Generating your AI-powered ad performance analysis</li>
              <li>Improving the quality and accuracy of recommendations over time</li>
              <li>Maintaining your account and connected platform integrations</li>
              <li>Sending product-related communications (you can opt out at any time)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">We do not sell your data. We do not use your data to train third-party AI models without your consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">4. OAuth Connections (Meta & Google Ads)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">When you connect your Meta or Google Ads account, we use OAuth 2.0 — the industry standard for secure, delegated access. This means:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>We receive a temporary access token, not your password</li>
              <li>Access is read-only — we can never modify, pause, or create campaigns on your behalf</li>
              <li>You can revoke access at any time from your Meta or Google account settings, or by disconnecting within creativOS AI</li>
              <li>Access tokens are stored encrypted in our database and are never exposed in logs or URLs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">5. Data Storage & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored in a managed PostgreSQL database hosted on Supabase (AWS infrastructure, ap-south-1 region). All data is encrypted at rest and in transit using TLS 1.2+.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Each brand's data is isolated at the database level. We use Row Level Security and brand-scoped queries to ensure one brand can never access another brand's data.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              AI analysis requests are processed via Anthropic's Claude API. Campaign data sent to Anthropic contains only aggregated metrics (spend, ROAS, etc.) — never customer names, audience segments, or personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">6. Data Retention & Deletion</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your analysis history and feedback for as long as your account is active. This data is what powers personalised recommendations over time.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You can request full deletion of your account and all associated data at any time by emailing <a href="mailto:privacy@creativos.ai" className="text-primary hover:underline">privacy@creativos.ai</a>. We will process deletion requests within 30 days.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Disconnecting a platform (Meta or Google) removes the OAuth token immediately. We retain historical analysis data from that platform unless you request full account deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">7. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the following third-party services to operate the platform:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong className="text-foreground">Anthropic (Claude API)</strong> — AI analysis engine. Data processed per Anthropic's enterprise data policies.</li>
              <li><strong className="text-foreground">Supabase</strong> — Database and authentication infrastructure.</li>
              <li><strong className="text-foreground">Meta Platforms</strong> — Ad data access via Meta Marketing API (read-only).</li>
              <li><strong className="text-foreground">Google</strong> — Ad data access via Google Ads API and sign-in via Google OAuth.</li>
              <li><strong className="text-foreground">PostHog</strong> — Anonymous product analytics to understand feature usage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, export, or delete your personal data at any time. To exercise any of these rights, email <a href="mailto:privacy@creativos.in" className="text-primary hover:underline">privacy@creativos.in</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You can also disconnect any platform integration from within the app at any time, with no loss of your analysis history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading mb-3">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy as the product evolves. We will notify you of material changes via email or an in-app notice. Continued use of the platform after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
