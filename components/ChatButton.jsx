'use client';
import { useEffect } from 'react';

// The floating "How can we help?" message button (Formspree's widget), same as the old site.
export default function ChatButton({ chat, accent }) {
  useEffect(() => {
    if (!chat || !chat.enabled || !chat.formspreeUrl) return;
    window.formbutton = window.formbutton || function () { (window.formbutton.q = window.formbutton.q || []).push(arguments); };
    const color = /^#[0-9a-fA-F]{3,8}$/.test(accent || '') ? accent : '#e9ad71';
    window.formbutton('create', {
      action: chat.formspreeUrl,
      title: chat.title,
      fields: [
        { type: 'email', label: chat.emailLabel, name: 'email', required: true, placeholder: 'your@email.com' },
        { type: 'textarea', label: chat.messageLabel, name: 'message', placeholder: chat.messagePlaceholder },
        { type: 'submit' },
      ],
      styles: { title: { backgroundColor: color }, button: { backgroundColor: color } },
    });
    const s = document.createElement('script');
    s.src = 'https://formspree.io/js/formbutton-v1.min.js';
    s.defer = true;
    document.body.appendChild(s);
    return () => { s.remove(); document.querySelectorAll('[id^="formbutton"]').forEach((el) => el.remove()); };
  }, [chat, accent]);
  return null;
}
