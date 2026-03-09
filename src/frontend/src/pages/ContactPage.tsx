import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useMetaTags } from "../hooks/useMetaTags";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  propertySize: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  propertySize: "",
  message: "",
};

export default function ContactPage() {
  useMetaTags({
    title: "Contact Tru Bond Back Cleaning Perth | Free Quote",
    description:
      "Contact Tru Bond Back Cleaning Perth for a free bond cleaning quote. WhatsApp 0488 841 883. Serving all Perth suburbs. Fast response guaranteed.",
    keywords:
      "contact bond cleaning Perth, bond cleaning quote Perth, book bond clean Perth, end of lease cleaning quote Perth WA",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/contact",
  });

  const { actor } = useActor();
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Basic validation
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.serviceType ||
      !form.propertySize
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to backend
      if (actor) {
        const messageWithSize = `Property Size: ${form.propertySize}\n\n${form.message}`;
        await actor.submitEnquiry(
          form.name.trim(),
          form.phone.trim(),
          form.email.trim(),
          form.serviceType,
          messageWithSize,
        );
      }

      // Open mailto link to send from customer's email (recipient hidden)
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry - ${form.name}`,
      );
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Email: ${form.email}`,
          `Service: ${form.serviceType}`,
          `Property Size: ${form.propertySize}`,
          `Message: ${form.message || "No additional message"}`,
        ].join("\n"),
      );
      const recipient = atob(
        "aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==",
      );
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      setSubmitSuccess(true);
      setForm(initialForm);
      toast.success(
        "Enquiry submitted! Your email client will open to send your message.",
      );
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or contact us on WhatsApp.",
      );
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="bg-brand-navy py-16 md:py-20"
        aria-label="Contact page hero"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Get Your Free Bond Cleaning Quote
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Fill in the form below and we'll get back to you with a
              fixed-price quote within a few hours. We service all Perth
              suburbs, 7 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-12 lg:py-16 bg-background"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-brand-navy mb-6 font-display"
              >
                Book Your Bond Clean Online
              </h2>

              {submitSuccess ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2 font-display">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-green-700 mb-4 leading-relaxed">
                    Thanks for reaching out! Your email client should have
                    opened to send your message directly to our team. We'll get
                    back to you with a fixed-price quote within a few hours.
                  </p>
                  <p className="text-green-700 text-sm">
                    In the meantime, you can also reach us on WhatsApp at{" "}
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      0488 841 883
                    </a>
                  </p>
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 bg-brand-navy text-white hover:bg-brand-green"
                  >
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Bond cleaning enquiry form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2 md:col-span-1">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.name_input"
                        type="text"
                        placeholder="e.g. Sarah Smith"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        autoComplete="name"
                        className="h-11"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        data-ocid="contact.phone_input"
                        type="tel"
                        placeholder="e.g. 0412 345 678"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        autoComplete="tel"
                        className="h-11"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        data-ocid="contact.email_input"
                        type="email"
                        placeholder="e.g. sarah@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        autoComplete="email"
                        className="h-11"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label
                        htmlFor="service-type"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Service Type <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.serviceType}
                        onValueChange={(v) => handleChange("serviceType", v)}
                        required
                      >
                        <SelectTrigger
                          id="service-type"
                          data-ocid="contact.service_select"
                          className="h-11"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Bond Clean">
                            General Bond Clean
                          </SelectItem>
                          <SelectItem value="Carpet Steam Clean">
                            Carpet Steam Clean
                          </SelectItem>
                          <SelectItem value="Oven & Kitchen Clean">
                            Oven &amp; Kitchen Clean
                          </SelectItem>
                          <SelectItem value="Window Cleaning">
                            Window Cleaning
                          </SelectItem>
                          <SelectItem value="Bathroom & Toilet Clean">
                            Bathroom &amp; Toilet Clean
                          </SelectItem>
                          <SelectItem value="Wall Washing">
                            Wall Washing
                          </SelectItem>
                          <SelectItem value="Full Package">
                            Full Package (All Services)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Property Size */}
                    <div>
                      <Label
                        htmlFor="property-size"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Property Size{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.propertySize}
                        onValueChange={(v) => handleChange("propertySize", v)}
                        required
                      >
                        <SelectTrigger
                          id="property-size"
                          data-ocid="contact.size_select"
                          className="h-11"
                        >
                          <SelectValue placeholder="Select property size..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Studio / 1 Bedroom">
                            Studio / 1 Bedroom
                          </SelectItem>
                          <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                          <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                          <SelectItem value="4+ Bedroom">4+ Bedroom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        Message / Additional Notes
                      </Label>
                      <Textarea
                        id="message"
                        data-ocid="contact.message_textarea"
                        placeholder="Tell us anything extra — preferred date, specific cleaning concerns, access instructions..."
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        rows={5}
                        className="resize-y"
                      />
                    </div>
                  </div>

                  {/* Error state */}
                  {submitError && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-start gap-2.5 mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-destructive">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isSubmitting}
                    className="mt-6 bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold px-8 py-3 h-auto w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          data-ocid="contact.loading_state"
                          className="w-4 h-4 mr-2 animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    We respond within a few hours. For urgent bookings, please
                    WhatsApp us directly.
                  </p>
                </form>
              )}
            </div>

            {/* Contact details sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-card sticky top-24">
                <h3 className="text-xl font-bold text-brand-navy mb-5 font-display">
                  Contact Details
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">
                        WhatsApp / Phone
                      </div>
                      <a
                        href="https://wa.me/61488841883"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-green font-bold text-lg hover:underline"
                        aria-label="Contact Tru Bond Back Cleaning Perth on WhatsApp"
                      >
                        0488 841 883
                      </a>
                      <div className="text-xs text-muted-foreground">
                        WhatsApp preferred
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">
                        Service Area
                      </div>
                      <div className="text-foreground">All Perth Suburbs</div>
                      <div className="text-xs text-muted-foreground">
                        Western Australia
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">
                        Operating Hours
                      </div>
                      <div className="text-foreground text-sm">
                        Mon – Sat: 7am – 7pm
                      </div>
                      <div className="text-foreground text-sm">
                        Sun: 8am – 5pm
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-semibold text-brand-navy mb-2">
                    Prefer to chat directly?
                  </p>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-white transition-colors"
                    style={{ backgroundColor: "#25D366" }}
                    aria-label="Open WhatsApp chat with Tru Bond Cleaning Perth"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-4 space-y-2">
                  {[
                    "100% Bond Back Guarantee",
                    "Free quotes within hours",
                    "REIWA-standard clean",
                    "Fully insured team",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
