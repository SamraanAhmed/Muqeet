import { useState } from "react";
import { Heart, Send } from "lucide-react";
import { Confetti } from "@/components/Confetti";
import { BirthdayAudio } from "@/components/BirthdayAudio";

export default function Index() {
  const [wishes, setWishes] = useState<
    Array<{ name: string; message: string }>
  >([]);
  const [newWish, setNewWish] = useState("");
  const [wishName, setWishName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.trim() && wishName.trim()) {
      setWishes([...wishes, { name: wishName, message: newWish }]);
      setNewWish("");
      setWishName("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  const photos = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fc918e594deec46c49d9215ebb68e5832?format=webp&width=800",
      title: "Radiant in Yellow",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F9e47206bef52489780fe8653b81c1a44?format=webp&width=800",
      title: "Golden Beauty",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F35a5b86a44f54567a6dae52cac54421c?format=webp&width=800",
      title: "Elegant Style",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Ff0223f1304a44e51aa6480b6b8e398ca?format=webp&width=800",
      title: "Urban Chic",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fc3d2d235f53a42159c9d2e2bc7ac7fb8?format=webp&width=800",
      title: "Confident Smile",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F12ff2557aba544a4bf746e66e0145fb2?format=webp&width=800",
      title: "Nature's Grace",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F709d665db22749bcb9a60bd7f927c8cc?format=webp&width=800",
      title: "Playful Moment",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2Fd58bd324b2c14518a6abedbbf1d4d19e?format=webp&width=800",
      title: "Pure Joy",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F402bb0bff04e4fe58eba43d1bc1bf388?format=webp&width=800",
      title: "Serene Beauty",
    },
  ];

  const whyWeLove = [
    {
      emoji: "✨",
      title: "Your Radiant Energy",
      description:
        "You light up every room you walk into with your infectious positivity and genuine warmth.",
    },
    {
      emoji: "💪",
      title: "Incredible Strength",
      description:
        "Your resilience and determination inspire everyone around you to be better.",
    },
    {
      emoji: "❤️",
      title: "Boundless Kindness",
      description:
        "Your compassion and care for others make you truly special and loved.",
    },
    {
      emoji: "😂",
      title: "Your Amazing Humor",
      description:
        "You have the gift of making people laugh and feel at ease in any situation.",
    },
    {
      emoji: "🌟",
      title: "Creative Spirit",
      description:
        "Your imagination and creativity bring joy and beauty to everything you do.",
    },
    {
      emoji: "💎",
      title: "True Friend",
      description:
        "Your loyalty and support mean the world to those who are lucky enough to know you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      <Confetti />
      <BirthdayAudio />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b-2 border-party-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎉</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-party-pink via-party-purple to-party-blue bg-clip-text text-transparent">
                Happy Birthday Fariha
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-party-purple font-semibold hover:text-party-pink transition"
              >
                Home
              </a>
              <a
                href="#gallery"
                className="text-party-purple font-semibold hover:text-party-pink transition"
              >
                Gallery
              </a>
              <a
                href="#why"
                className="text-party-purple font-semibold hover:text-party-pink transition"
              >
                Why We Love You
              </a>
              <a
                href="#wishes"
                className="text-party-purple font-semibold hover:text-party-pink transition"
              >
                Wishes
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 text-6xl sm:text-7xl animate-float">🎂</div>
          <h2 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-party-pink via-party-purple to-party-blue bg-clip-text text-transparent">
            Happy Birthday
            <br />
            Fariha!
          </h2>
          <p className="text-xl sm:text-2xl text-party-purple mb-12 font-semibold">
            Today is all about celebrating YOU! 🌟
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            You deserve all the love, joy, and happiness in the world. This day
            is dedicated to celebrating the amazing person you are and all the
            wonderful moments we've shared with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="px-8 py-4 bg-gradient-to-r from-party-pink to-party-purple text-white font-bold rounded-full text-lg hover:shadow-2xl transition transform hover:scale-105 inline-block"
            >
              View Gallery 📸
            </a>
            <a
              href="#why"
              className="px-8 py-4 bg-gradient-to-r from-party-blue to-party-cyan text-white font-bold rounded-full text-lg hover:shadow-2xl transition transform hover:scale-105 inline-block"
            >
              Why We Love You 💕
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        id="gallery"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-party-pink to-party-purple bg-clip-text text-transparent">
              Your Beautiful Moments
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-party-pink via-party-purple to-party-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              A celebration of your radiance through the lens
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 animate-bounce-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-xl font-bold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Love Fariha */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-party-pink to-party-blue bg-clip-text text-transparent">
              Why We Love Fariha ❤️
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-party-pink via-party-purple to-party-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWeLove.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-2 border-transparent hover:border-party-pink animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-party-purple mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Wishes Section */}
      <section
        id="wishes"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-party-pink/10 via-party-purple/10 to-party-blue/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-party-purple to-party-blue bg-clip-text text-transparent">
              Birthday Wishes 🎊
            </h2>
            <p className="text-lg text-gray-700">
              Share your love and birthday wishes for Fariha
            </p>
          </div>

          {/* Add Wish Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <form onSubmit={handleAddWish} className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-party-purple mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={wishName}
                  onChange={(e) => setWishName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-6 py-3 border-2 border-party-pink rounded-xl focus:outline-none focus:border-party-purple transition text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-party-purple mb-2">
                  Your Birthday Wish
                </label>
                <textarea
                  value={newWish}
                  onChange={(e) => setNewWish(e.target.value)}
                  placeholder="Share your heartfelt wishes for Fariha..."
                  rows={4}
                  className="w-full px-6 py-3 border-2 border-party-pink rounded-xl focus:outline-none focus:border-party-purple transition resize-none text-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-party-pink to-party-purple text-white font-bold rounded-xl text-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {submitted ? "Wish Sent! 💕" : "Send Wish"}
              </button>
            </form>
          </div>

          {/* Display Wishes */}
          {wishes.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-party-purple text-center mb-8">
                Birthday Wishes for Fariha
              </h3>
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-party-pink animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-party-pink flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed mb-3">
                        {wish.message}
                      </p>
                      <p className="text-party-purple font-bold text-lg">
                        — {wish.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-party-purple via-party-pink to-party-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎈🎉🎁</div>
            <h3 className="text-3xl font-bold mb-4">Happy Birthday Fariha!</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              May your day be filled with as much joy and beauty as you bring to
              the world. Here's to celebrating YOU!
            </p>
            <div className="text-2xl mb-6">✨ 💖 ✨</div>
            <p className="opacity-75">
              &copy; 2024 Celebrating Fariha's Special Day
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
