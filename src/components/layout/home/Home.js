import React, {useState, useEffect} from 'react';
import './Home.css';

export default function Home() {
    return (
        <>
            <main className="home-main">
                <section className="media">
                    <div className="vid-col1">
                        <div className="vid">
                            <div className="vid-text">
                                <h2>Fight for the cause!</h2>
                                <p>Check out some Tidal and SURF ZVZ highlights below.</p>
                            </div>
                            <iframe
                                className="yt-video"
                                src="https://www.youtube.com/embed/biEOppwljVk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="vid">
                            <div className="vid-text">
                                <h2>ZVZ Montage!</h2>
                                <p>Former Members are still family.</p>
                            </div>
                            <iframe
                                className="yt-video"
                                src="https://www.youtube.com/embed/Yb8s6S0o3U4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="vid-col2">
                        <div className="vid">
                            <div className="vid-text">
                                <h2>Loonie led wipe of Militant!</h2>
                                <p>Ninshika Bloodletter POV.</p>
                            </div>
                            <iframe
                                className="yt-video"
                                src="https://www.youtube.com/embed/8I3y9HVWhOc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="vid">
                            <div className="vid-text">
                                <h2>Too Turnt Tuna!</h2>
                                <p>Big Tuna claps.</p>
                            </div>
                            <iframe
                                className="yt-video"
                                src="https://www.youtube.com/embed/mVpndHswjx4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>
                <section className="guild-info">
                    <h2>Tidal</h2>
                    <div className="about-guild">
                        <h3>About the Guild</h3>
                        <p>
                            Tidal is a Thetford-based guild built by ex-Phrasing ZvZ'ers that is
                            recruiting active EU and NA english-speaking players.
                        </p>
                        <p>We are pushing Crystal Rank for Season 14.</p>
                        <p>
                            The timers we play include 3 / 6 / 12 / 15 / 18 / 21 / 0 UTC.
                            (basically around the clock)
                        </p>
                    </div>
                    <div className="guild-offers">
                        <h3>What Tidal Offers</h3>
                        <ul>
                            <li>
                                Daily Competitive PvP Content (ZvZ’s, Crystals, Ganking,
                                Hellgates, Faction Warfare)
                            </li>
                            <li>
                                Guild events with ranking/reward systems for almost all activities
                            </li>
                            <li>Regears for mandatory CTA’s</li>
                            <li>Tight-knit community of friends that enjoy playing the game</li>
                            <li>Low guild tax + Silver Refunds for HCE'ers</li>
                            <li>Territories and Hideouts in high-tier zones</li>
                        </ul>
                    </div>
                    <div className="guild-requirements">
                        <h3>Requirements to Join</h3>
                        <ul>
                            <li>25 mil pvp fame + 50 mil pve Fame</li>
                            <li>Positive attitude and willingness to improve your gameplay.</li>
                            <li>Interest in ZvZing</li>
                        </ul>
                    </div>
                    <div className="how-to-join">
                        <h3>How to Apply</h3>
                        <ol>
                            <li>
                                Join the discord server
                                <a href="https://discord.gg/DUuPwVzH" target="_blank"> here</a> and
                                read the guild rules.
                            </li>
                            <li>
                                Post an in game screenshot of your stats screen, character select
                                screen, and ZvZ build in 📜tidal-application or
                                📝ripple-application
                            </li>
                            <li>
                                Post your local time zone and the UTC hours when you are usually
                                active. Include which days of the week you are active.
                            </li>
                            <li>
                                Include a description of why you want to join Tidal and why you
                                left your previous guild.
                            </li>
                            <li>
                                Let us know if you know anyone personally in the guild already.
                            </li>
                            <li>Send in-game application to Tidal.</li>
                        </ol>
                    </div>
                </section>
            </main>
        </>
    )
}