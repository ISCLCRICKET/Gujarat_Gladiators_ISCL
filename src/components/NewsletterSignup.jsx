
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Simulate submission delay
    setTimeout(() => {
      // Store in localStorage
      const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
      
      // Check if already subscribed
      if (subscriptions.includes(email)) {
        toast.error('This email is already subscribed');
        setIsSubmitting(false);
        return;
      }

      subscriptions.push(email);
      localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));

      toast.success('Successfully subscribed to newsletter');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0"
      >
        {isSubmitting ? (
          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : (
          <Mail size={18} />
        )}
      </Button>
    </form>
  );
}

export default NewsletterSignup;
