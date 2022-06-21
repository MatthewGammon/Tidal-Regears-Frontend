import React, {useState, useEffect} from 'react';
import './Home.css';

export default function Home() {
    return (
        <>
            <main className="home">
                <div className="welcome-text">
                    <h1>Welcome Home!</h1>
                </div>
                <div className="home-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur debitis,
                        dicta doloremque ducimus expedita harum hic ipsum labore magni natus nesciunt nihil nulla
                        quaerat quibusdam quod reprehenderit saepe sequi soluta unde veritatis voluptatem voluptatum.
                        Architecto aut cumque dolor eaque est et officia quaerat quibusdam ratione repellat, sequi
                        totam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aut, dolor dolorum
                        eligendi iure iusto maxime nemo nesciunt odio officiis quisquam repellendus, reprehenderit
                        sapiente, veritatis. Error nemo perferendis sapiente?</p>
                </div>
                <div className="just-test">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dicta doloremque inventore
                        minima non odio? Accusantium architecto, aut autem beatae blanditiis esse est labore nemo quo
                        rerum saepe sapiente!</p>
                </div>
            </main>
        </>
    )
}