"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function MusicTheory() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 pt-36 relative">
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      
      {/* Content with higher z-index */}
      <div className="max-w-3xl mx-auto p-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-12">
          Basic Music Theory
        </h1>

        <section className="space-y-8">
          {/* What is Music Theory */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              What is Music Theory?
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Music theory is the study of the practices and possibilities of music.
              It includes the study of scales, chords, rhythm, harmony, and more.
            </p>
          </div>

          {/* Scales Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Scales
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-6">
              A scale is a sequence of notes in a specific order. The most common scales are major and minor scales.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="bg-neutral-800 p-6 rounded-lg shadow-xl w-full max-w-xs">
                <h3 className="text-xl text-white font-semibold text-center">C Major Scale</h3>
                <p className="text-lg text-teal-400 text-center">C - D - E - F - G - A - B - C</p>
              </div>
            </div>
          </div>

          {/* Chords Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Chords
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-6">
              A chord is a combination of three or more notes played together. The basic chord types are major, minor, and diminished.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-neutral-800 p-6 rounded-lg shadow-xl w-full max-w-xs">
                <h3 className="text-xl text-white font-semibold text-center">C Major Chord</h3>
                <p className="text-lg text-teal-400 text-center">C - E - G</p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg shadow-xl w-full max-w-xs">
                <h3 className="text-xl text-white font-semibold text-center">C Minor Chord</h3>
                <p className="text-lg text-teal-400 text-center">C - Eb - G</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
