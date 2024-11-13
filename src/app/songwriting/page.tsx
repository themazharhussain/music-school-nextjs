"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function Songwriting() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 pt-36 relative">
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content with higher z-index */}
      <div className="max-w-3xl mx-auto p-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-12">
          Songwriting
        </h1>

        <section className="space-y-8">
          {/* Introduction to Songwriting */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              What is Songwriting?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Songwriting is the process of creating and composing music,
              lyrics, and melody. It involves creativity and inspiration,
              combined with an understanding of structure, harmony, and rhythm.
            </p>
          </div>

          {/* Songwriting Process */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              The Songwriting Process
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-6">
              Successful songwriting often follows a few key steps: Idea
              Generation, Lyrics Writing, Melody Creation, and Structuring the
              Song.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl text-teal-400">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Idea Generation
                  </h3>
                  <p className="text-lg text-neutral-300">
                    The first step is brainstorming and coming up with the theme
                    or concept for your song. This can be based on emotions,
                    experiences, or storytelling.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl text-teal-400">✍️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Writing Lyrics
                  </h3>
                  <p className="text-lg text-neutral-300">
                    Writing the lyrics is an essential part of songwriting.
                    Craft your words to convey the message or feeling you want
                    to express through your song.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl text-teal-400">🎶</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Creating Melody
                  </h3>
                  <p className="text-lg text-neutral-300">
                    The melody is the musical element that carries the emotion
                    of the song. It's important to experiment with different
                    melodies until you find the perfect one that matches the
                    mood of the lyrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl text-teal-400">🎚️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Song Structure
                  </h3>
                  <p className="text-lg text-neutral-300">
                    The structure refers to the arrangement of verses, choruses,
                    bridges, and outros. Common song structures include
                    verse-chorus-verse or A-B-A-B.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Songwriting */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Tips for Effective Songwriting
            </h2>
            <ul className="space-y-4 text-lg text-neutral-300 max-w-3xl mx-auto">
              <li className="flex space-x-3">
                <span className="text-teal-400">💡</span>
                <p>
                  Write from personal experience – authenticity connects with
                  listeners.
                </p>
              </li>
              <li className="flex space-x-3">
                <span className="text-teal-400">🎵</span>
                <p>
                  Experiment with chord progressions to find the right vibe for
                  your lyrics.
                </p>
              </li>
              <li className="flex space-x-3">
                <span className="text-teal-400">✍️</span>
                <p>
                  Don't be afraid to edit – sometimes the best lyrics come
                  through revisions.
                </p>
              </li>
              <li className="flex space-x-3">
                <span className="text-teal-400">🔄</span>
                <p>
                  Keep a notebook or voice memo app handy to capture ideas on
                  the go.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
