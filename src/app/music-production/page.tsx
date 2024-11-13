"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
export default function MusicProduction() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 pt-36 relative">
        {/* BackgroundBeams with adjusted z-index */}
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        
        {/* Content with higher z-index */}
        <div className="max-w-3xl mx-auto p-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-12">
            Music Production
          </h1>
  
          <section className="space-y-8">
            {/* Introduction to Music Production */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                What is Music Production?
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                Music production is the process of creating, recording, arranging, and mixing music. It involves various techniques and tools to bring a musical idea to life.
              </p>
            </div>
  
            {/* Steps in Music Production */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Steps in Music Production
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-6">
                Music production involves several stages that help turn raw ideas into polished tracks: Recording, Mixing, and Mastering.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl text-teal-400">🎤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Recording</h3>
                    <p className="text-lg text-neutral-300">
                      The first stage in music production is recording. This involves capturing the performance of instruments or vocals using microphones and recording software.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl text-teal-400">🎚️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Mixing</h3>
                    <p className="text-lg text-neutral-300">
                      Mixing is the process of adjusting levels, panning, EQ, and adding effects to the recorded tracks to make them sound cohesive and balanced.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl text-teal-400">🎛️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Mastering</h3>
                    <p className="text-lg text-neutral-300">
                      Mastering is the final step in the music production process, where the mixed track is polished, leveled, and prepared for distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Tips for Music Production */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Tips for Effective Music Production
              </h2>
              <ul className="space-y-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                <li className="flex space-x-3">
                  <span className="text-teal-400">💡</span>
                  <p>Start with a solid demo – It’s easier to build a track from a strong idea.</p>
                </li>
                <li className="flex space-x-3">
                  <span className="text-teal-400">🎧</span>
                  <p>Use quality headphones or studio monitors for accurate sound.</p>
                </li>
                <li className="flex space-x-3">
                  <span className="text-teal-400">🎶</span>
                  <p>Experiment with different instruments and sounds to make your track stand out.</p>
                </li>
                <li className="flex space-x-3">
                  <span className="text-teal-400">📝</span>
                  <p>Keep organized – Track your project files and save your progress regularly.</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
  