import SearchForm from "@/components/features/SearchForm";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-10rem)]">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Search Form */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <SearchForm />
      </div>
    </div>
  );
}
