import React from 'react';
import GridPattern from '@/components/magicui/grid-pattern';
import BlurIn from '@/components/magicui/blur-in';
import { cn } from '@/lib/utils';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-black flex flex-col items-center justify-center font-courier">
            <div className="mb-8 space-x-6">
                <button className="retro-button">
                    Archive
                </button>
                <button className="retro-button">
                    WIP
                </button>
            </div>
            <div className="relative flex h-[500px] w-[80%] max-w-3xl flex-col items-center justify-center overflow-hidden rounded-lg border-4 border-blue-900 bg-white md:shadow-xl">

                <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-wide mb-4 uppercase">

                </p>
                <BlurIn word="cecepizza" />
                <GridPattern
                    squares={[
                        [4, 4],
                        [5, 1],
                        [8, 2],
                        [5, 3],
                        [5, 5],
                        [10, 10],
                        [12, 15],
                        [15, 10],
                        [10, 15],
                        [15, 10],
                        [10, 15],
                        [15, 10],
                    ]}
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50"
                    )}
                />
            </div>
        </div>
    );
};

export default App;