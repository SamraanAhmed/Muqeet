import { useEffect, useRef } from "react";

export function BirthdayAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.volume = 0.5;
    audio.loop = true;

    // Try to play the audio
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay prevented. Audio will play on user interaction.");
        // Add a one-time listener for user interaction to play audio
        const playOnInteraction = () => {
          audio
            .play()
            .catch((err) => console.error("Failed to play audio:", err));
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("touchstart", playOnInteraction);
        };
        document.addEventListener("click", playOnInteraction);
        document.addEventListener("touchstart", playOnInteraction);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      playAudio();
    }, 100);
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      style={{ display: "none" }}
      src="https://cdn.builder.io/o/assets%2F097a4358a92c4fd2a0bf0d62e32611f3%2F89ef26c4655849f4b4a918bcb5d06738?alt=media&token=74d1e708-927b-4470-b6de-bea8935e8d39&apiKey=097a4358a92c4fd2a0bf0d62e32611f3"
    />
  );
}
