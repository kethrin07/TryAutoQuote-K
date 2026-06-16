export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/50 text-xs text-center py-6 px-4">
      <p>© {new Date().getFullYear()} TryAutoQuote. All rights reserved.</p>
      <p className="mt-1 max-w-xl mx-auto">
        Quotes are estimates and may vary based on driving history, location, vehicle, and coverage selected.
      </p>
    </footer>
  );
}
