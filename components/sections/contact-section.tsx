'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { fadeIn } from '@/lib/animation-variants';

const CONTACT_INFO = {
  location: 'UPSA, Behind Hostel C',
  locationFull: 'University of Professional Studies, Accra (UPSA), Behind Hostel C, Accra, Ghana',
  phone1: '0257 743 913',
  phone2: '0249 990 455',
  hours: 'Monday - Saturday: 10:00 AM - 8:00 PM',
  hoursClosed: 'Sunday: Closed',
  tiktok: '@streetmanfoods',
  instagram: '@streetmanfoods_gh',
  // Google Maps embed URL - Update with your actual location
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8277193470744!2d-0.1872659!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sUniversity%20of%20Professional%20Studies%2C%20Accra!5e0!3m2!1sen!2sgh!4v1234567890',
};

export function ContactSection() {
  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const handleWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\s/g, '');
    const internationalPhone = `233${cleanPhone.substring(1)}`; // 0257... → 233257...
    const message = encodeURIComponent(
      "Hi! I'd like to place an order from Streetman Flames."
    );
    window.open(`https://wa.me/${internationalPhone}?text=${message}`, '_blank');
  };

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir//University+of+Professional+Studies,+Accra',
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#FFF8F0] to-[#FFEFD5] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF9F0D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#8B0000]/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0D0D0D] mb-4">
            Visit Us Today 📍
          </h2>
          <p className="text-base md:text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Come pick up your fresh street food at our UPSA location. We&apos;re ready to serve you!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF9F0D]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF9F0D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0D0D0D] mb-2">
                      Our Location
                    </h3>
                    <p className="text-[#4F4F4F] text-sm leading-relaxed">
                      {CONTACT_INFO.location}
                    </p>
                    <p className="text-[#4F4F4F]/80 text-xs mt-1">
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF9F0D]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF9F0D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0D0D0D] mb-3">
                      Call or WhatsApp Us
                    </h3>
                    <div className="space-y-2">
                      {/* Phone 1 */}
                      <button
                        onClick={() => handlePhoneClick(CONTACT_INFO.phone1)}
                        className="flex items-center gap-2 text-[#4F4F4F] hover:text-[#FF9F0D] transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {CONTACT_INFO.phone1}
                      </button>
                      {/* Phone 2 */}
                      <button
                        onClick={() => handlePhoneClick(CONTACT_INFO.phone2)}
                        className="flex items-center gap-2 text-[#4F4F4F] hover:text-[#FF9F0D] transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {CONTACT_INFO.phone2}
                      </button>
                    </div>
                    {/* WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsApp(CONTACT_INFO.phone1)}
                      className="mt-4 w-full px-4 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Order on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF9F0D]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#FF9F0D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0D0D0D] mb-2">
                      Operating Hours
                    </h3>
                    <p className="text-[#4F4F4F] text-sm">
                      {CONTACT_INFO.hours}
                    </p>
                    <p className="text-[#4F4F4F]/60 text-sm mt-1">
                      {CONTACT_INFO.hoursClosed}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-[#0D0D0D] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {/* TikTok */}
                  <a
                    href={`https://www.tiktok.com/${CONTACT_INFO.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 p-3 bg-[#FF9F0D]/5 hover:bg-[#FF9F0D]/10 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0D0D0D] flex items-center justify-center">
                      <FaTiktok className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#4F4F4F]/60">TikTok</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] group-hover:text-[#FF9F0D] transition-colors truncate">
                        {CONTACT_INFO.tiktok}
                      </p>
                    </div>
                  </a>
                  {/* Instagram */}
                  <a
                    href={`https://www.instagram.com/${CONTACT_INFO.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 flex-1 p-3 bg-[#FF9F0D]/5 hover:bg-[#FF9F0D]/10 rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
                      <FaInstagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#4F4F4F]/60">Instagram</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] group-hover:text-[#FF9F0D] transition-colors truncate">
                        {CONTACT_INFO.instagram}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Important Notice */}
              {/* <div className="bg-[#8B0000] p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Important Notice
                    </h3>
                    <p className="text-white/90 text-sm font-semibold mb-1">
                      PICKUP ONLY - NO DELIVERY SERVICE
                    </p>
                    <p className="text-white/80 text-xs">
                      Please come to our location to collect your order. We don't offer delivery at this time.
                    </p>
                  </div>
                </div>
              </div> */}

            </div>
          </motion.div>

          {/* Right Column - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Map Container */}
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <iframe
                  src={CONTACT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Streetman Flames Location - UPSA"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={handleGetDirections}
              className="w-full px-6 py-4 bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white rounded-xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-3"
            >
              <MapPin className="w-6 h-6" />
              Get Directions
            </button>

            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-[#0D0D0D] mb-3">
                Payment Methods
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#4F4F4F]">
                  <span className="text-[#FF9F0D]">✓</span>
                  <span>Mobile Money (MOMO Pay)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4F4F4F]">
                  <span className="text-[#FF9F0D]">✓</span>
                  <span>Cash on Pickup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4F4F4F]">
                  <span className="text-[#FF9F0D]">✓</span>
                  <span>Call to Place Order</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}