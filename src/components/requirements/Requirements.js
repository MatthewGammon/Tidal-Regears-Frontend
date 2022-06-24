import './Requirements.css';

export default function Requirements(){

    return (
        <main className="requirements-main">
            <section className="requirements">
                <div className="requirements-text">
                    <h2>Regear Requirements</h2>
                    <div className="basic-requirements">
                        <h3>Basic Requirements</h3>
                        <ul className="requirements-list">
                            <li>
                                Players must wear the minimum tier shown in the picture of their
                                build and hit the minimum IP.
                            </li>
                            <li>
                                T7 equivalent for weapons on DPS, Support and Tank (for example:
                                4.3/5.2/6.1/7.0)
                            </li>
                            <li>
                                T8 equivalent for everything else (for example: 6.2/7.1/8.0)
                            </li>
                            <li>
                                Cleric Cowls will be regeared for tanks as long as it is T8
                                equivalent / T6 glaives
                            </li>
                            <li>
                                Off-hands, Capes, Mounts and Consumables are
                                <b>NOT</b> re-geared.
                            </li>
                        </ul>
                    </div>
                    <div className="tier-equivalent">
                        <h3>Tier Equivalent Minimum</h3>
                        <p>
                            "Tier Equivalent Minimum Items" in the picture mean Tier
                            Equivalent Minimum, for example if there is a T7 Grovekeeper in
                            the picture, you can wear 4.3, 5.2, 6.1, 7.0 (and obviously
                            above). If there is a T6 Cape, you can wear 4.2, 5.1, 6.0 and
                            above. T8 is 5.3, 6.2, 7.1, 8.0 and etc. (5 + 3 = 8, 6 + 2 = 8
                            ....)
                        </p>
                    </div>
                    <div className="disclaimer">
                        <h3>Disclaimer</h3>
                        <ul className="disclaimer-list">
                            <li>
                                <strong
                                >ALL REGEARS ARE AT THE DISCRETION OF THE REGEAR
                                    OFFICERS.</strong
                                >
                            </li>
                            <li>
                                If IP is being inflated with higher gear/capes to meet the
                                minimum you may be denied or downgraded.
                            </li>
                            <li>
                                If you are not wearing the approved ZvZ build you may be denied
                                or partially re-geared.
                            </li>
                            <li>
                                Re-gears do not include additional sets in your inventory.
                            </li>
                            <li>
                                Anything written above can be overwritten by an update that is
                                more recent. Make sure to see the most up to date post in the
                                discord server
                                <a href="https://discord.gg/6RnFRVWE" target="_blank">here</a>.
                            </li>
                        </ul>
                    </div>
                    <div className="approved-roles">
                        <h3>Approved Roles</h3>
                        <p>
                            We are now enforcing Approved Roles for certain builds in our
                            zerg. Without this role, you'll have to pick something else to
                            play. These roles are also limited in the zerg, so be mindful that
                            you'll need to flex other roles.
                        </p>
                        <h4>Roles Requiring Approval</h4>
                        <ul className="approved-list">
                            <li>Energy Shaper</li>
                            <li>Hand of Justice</li>
                            <li>Galatine Pairs</li>
                            <li>Bloodletter</li>
                            <li>
                                Wailing Bow (no solo play/must be in TeamSpeak and coordinated
                                with other Wailings)
                            </li>
                            <li>Ursine Maulers / Ravenstrike</li>
                        </ul>
                        <br/>
                        <p>
                            <b>
                                If you wish to play any of the roles above, we will need a vouch
                                from majority of our party leaders AND video evidence. Send me
                                video evidence of you playing the role, and we will deliberate.
                            </b>
                        </p>
                    </div>
                    <div className="fines">
                        <h3>Fines and Penalties</h3>
                        <p>
                            <b>
                                Anyone playing an unapproved build in CTA's will be fined 2mil
                                silver.
                            </b>
                            Roamings are at shotcaller discretion.
                        </p>
                    </div>
                </div>
            </section>
            {/*<section className="requirements-media">*/}
            {/*    <div className="builds">*/}
            {/*        <img*/}
            {/*            className="approved-builds"*/}
            {/*            src="../assets/images/tidal-regear-reqs.png"*/}
            {/*            alt="Tidal approved ZVZ builds"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="battlemounts">*/}
            {/*        <h2*/}
            {/*            style="*/}
            {/*  background-color: #c9f0ff;*/}
            {/*  text-align: center;*/}
            {/*  padding: 1em;*/}
            {/*  border-top-left-radius: 5px;*/}
            {/*  border-top-right-radius: 5px;*/}
            {/*"*/}
            {/*        >*/}
            {/*            Battle Mount Builds*/}
            {/*        </h2>*/}
            {/*        <img*/}
            {/*            className="battlemount-builds"*/}
            {/*            src="../assets/images/tidal-battlemount-builds.png"*/}
            {/*            alt="Tidal approved battlemount builds"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    )
}