import React from "react";

const CancellationPolicy = () => (
  <main className="section-padding max-w-3xl mx-auto">
    <h1 className="text-3xl font-serif font-bold mb-6 text-gold">Cancellation Policy</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">1. General Policy</h2>
      <p>We understand that plans can change. To avoid charges, please notify us of cancellations at least 24 hours before your scheduled pickup time.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">2. Cancellation Fees</h2>
      <p>Cancellations made less than 24 hours before the scheduled service may incur a full fare charge. No-shows will be charged the full amount of the booking.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">3. How to Cancel</h2>
      <p>To cancel a booking, please contact us by phone at <a href="tel:8327663140" className="text-gold underline">832 766 3140</a> or email at <a href="mailto:info@imslimoandchaufferservice.com" className="text-gold underline">info@imslimoandchaufferservice.com</a>.</p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">4. Refunds</h2>
      <p>Refunds for eligible cancellations will be processed within 5-7 business days to the original payment method.</p>
    </section>
  </main>
);

export default CancellationPolicy;
