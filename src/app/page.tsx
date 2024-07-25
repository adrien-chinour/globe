"use client"

import {createRef, useEffect} from "react";
import createGlobe, {Marker} from "cobe";
import {getUsers} from "@/data/users";
import GlobeState, {GlobeLocation} from "@/services/globe";

export default function Home() {
    const canvasRef = createRef<HTMLCanvasElement>();
    const globeState : GlobeState = new GlobeState(0,0.09);
    const users = getUsers();

    useEffect(() => {
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        const globe = canvasRef.current && createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.09,
            dark: 0.9,
            opacity: 0.7,
            diffuse: 0.2,
            mapSamples: 20000,
            mapBrightness: 3,
            mapBaseBrightness: 0,
            baseColor: [61 / 255, 87 / 255, 255 / 255],
            markerColor: [255 / 255, 255 / 255, 255 / 255],
            glowColor: [62 / 255, 62 / 255, 62 / 255],
            markers: users.map((user): Marker => {
                return {
                    location: [user.position.latitude, user.position.longitude],
                    size: 0.03
                }
            }),
            onRender: (state) => {
                let location = globeState.move();
                state.phi = location.phi;
                state.theta = location.theta;

                state.width = width * 2;
                state.height = width * 2;
            }
        });

        setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'))

        return () => {
            globe?.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <main className="my-2">
            <div className="container mx-auto">
                <div style={{
                    width: '100%',
                    maxWidth: 600,
                    aspectRatio: 1,
                    margin: 'auto',
                    position: 'relative',
                }}>
                    {<canvas
                        style={{
                            opacity: 0,
                            width: '100%',
                            height: '100%',
                            contain: 'layout paint size',
                            transition: 'opacity 1s ease',
                        }}
                        ref={canvasRef}
                    />}
                </div>
                <h1 className="font-sans font-bold text-5xl text-white my-8 text-center opacity-50">
                    We are all over the globe
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {users.map((user) => (
                        <button
                            key={user.name}
                            onClick={() => globeState.setTargetLocation(GlobeLocation.fromGpsLocation({latitude: user.position.latitude, longitude: user.position.longitude}))}
                            className="rounded-xl font-bold bg-white/20 hover:bg-white/50 text-white whitespace-nowrap px-2">
                            {user.name}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}
