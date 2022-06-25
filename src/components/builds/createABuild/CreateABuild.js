import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {baseUrl, createBuild, readBuild, updateBuild} from '../../../utils/buildsService';
import './CreateABuild.css';
import ErrorAlert from '../../../errors/ErrorAlert';

export default function CreateABuild() {
    const [headGear, setHeadGear] = useState(null);
    const [chestGear, setChestGear] = useState(null);
    const [shoes, setShoes] = useState(null);
    const [mainHand, setMainHand] = useState(null);
    const [offHand, setOffHand] = useState(null);
    const [capes, setCapes] = useState(null);
    const [food, setFood] = useState(null);
    const [potions, setPotions] = useState(null);
    const [mounts, setMounts] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [buildError, setBuildError] = useState(null);
    const [build, setBuild] = useState({
        buildName: '',
        buildRole: '',
        minimumIp: '',
        minimumTier: '',
        headGear: '',
        chestGear: '',
        shoes: '',
        mainHand: '',
        offHand: '',
        cape: '',
        food: '',
        potion: '',
        mount: '',
    })

    const navigate = useNavigate();
    const params = useParams();
    const buildId = params.buildId;

    const urls = [`${baseUrl}/headGear`, `${baseUrl}/chestGear`, `${baseUrl}/shoes`, `${baseUrl}/mainHand`, `${baseUrl}/offHand`, `${baseUrl}/capes`, `${baseUrl}/food`, `${baseUrl}/potions`, `${baseUrl}/mounts`]

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const loadMenus = async () => {
            try {
                const fetchJobs = urls.map((url) => fetch(url, {signal}));
                const response = await Promise.all(fetchJobs);
                const data = await Promise.all(response.map((res) => res.json()));
                setHeadGear(data[0]);
                setChestGear(data[1]);
                setShoes(data[2]);
                setMainHand(data[3]);
                setOffHand(data[4]);
                setCapes(data[5]);
                setFood(data[6]);
                setPotions(data[7]);
                setMounts(data[8]);
                if (buildId){
                    const originalBuild = await readBuild(
                        buildId,
                        controller.signal
                    );
                    setBuild(originalBuild);
                    console.log(originalBuild)
                    console.log(build)
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setFetchError(error);
                }
            }
        }
        loadMenus();

        return () => {
            controller.abort();
            setFetchError(null);
        };
    }, [buildId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setBuildError(null);
        if (buildId) {
            try {
                await updateBuild(build)
                window.alert("Build successfully updated");
                navigate("/builds");
            } catch (error) {
                setBuildError(error);
            }
        } else {
            try {
                await createBuild(build);
                window.alert("Build successfully created!")
                navigate("/builds");
            } catch (error) {
                console.log("I caught something bad")
                setBuildError(error);
                window.scrollTo(0, 0);
            }
        }

    }

    const handleChange = async ({target: {name, value}}) => {
        setBuild((previousBuild) => ({
            ...previousBuild,
            [name]: value,
        }));
    }


    return (
        <>
            {buildError && (
                <div className="error-alert">
                    <ErrorAlert error={buildError}/>
                </div>
            )}
            <main className="create-a-build">
                <div className="create-build-header">
                    {buildId ?
                        <h2>Edit Selected Build</h2>
                        :
                        <h2>Create a New Build</h2>
                    }

                </div>
                <form className="build-form" onSubmit={handleSubmit}>
                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Build Info</legend>

                        <label htmlFor="build-name">Build Name:</label>
                        <input type="text" id="build-name" name="buildName" value={build.buildName}
                               onChange={handleChange}
                               required
                        />

                        <label htmlFor="build-role">Build Role:</label>
                        <select name="buildRole" id="build-role" onChange={handleChange} required>
                            {
                                buildId &&
                                <option value={build.buildRole}>{build.buildRole}</option>
                            }
                            <option value="">-- Select A Role --</option>
                            <option value="Tank">Tank</option>
                            <option value="Support">Support</option>
                            <option value="Healer">Healer</option>
                            <option value="Melee DPS">Melee DPS</option>
                            <option value="Ranged DPS">Ranged DPS</option>
                            <option value="Battle Mount">Battle Mount</option>
                            <option value="Rat">Ratletter</option>
                            <option value="Other">Other</option>
                        </select>

                        <label htmlFor="min-tier">Minimum Tier Equivalent:</label>
                        <input name="minimumTier" type="number" id="min-tier" min="6" max="10" placeholder={8}
                               value={build.minimumTier}
                               onChange={handleChange}
                               required
                        />

                        <label htmlFor="minimum-ip">Minimum IP:</label>
                        <input name="minimumIp" type="number" id="minimum-ip" min="1200" max="1950" step="50"
                               placeholder={1350}
                               value={build.minimumIp}
                               onChange={handleChange}
                               required
                        />
                    </fieldset>

                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Armor</legend>
                        <div className="head-gear">
                            <label htmlFor="head-gear-select">Head Gear:</label>
                            <select
                                name="headGear"
                                id="head-gear-select"
                                onChange={handleChange}
                                required>
                                {
                                    buildId &&
                                    <option value={build.headGear}>{build.headGear}</option>
                                }
                                <option value="">-- Select Head Gear --</option>
                                {
                                    headGear?.map((headGear, id) => (
                                        <option value={headGear.headName}
                                                key={headGear.headId}>{headGear.headName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="chest-gear">
                            <label htmlFor="chestGear-select">Chest Gear:</label>
                            <select
                                name="chestGear"
                                id="chestGear-select"
                                onChange={handleChange}
                                required
                            >
                                {
                                    buildId &&
                                    <option value={build.chestGear}>{build.chestGear}</option>
                                }
                                <option value="">-- Select Chest Gear --</option>
                                {
                                    chestGear?.map((chestGear, id) => (
                                        <option value={chestGear.chestName}
                                                key={chestGear.chestId}>{chestGear.chestName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="shoes">
                            <label htmlFor="shoes-select">Shoes:</label>
                            <select name="shoes" id="shoes-select"
                                    onChange={handleChange}
                                    required>
                                {
                                    buildId &&
                                    <option value={build.shoes}>{build.shoes}</option>
                                }
                                <option value="">-- Select Shoes --</option>
                                {
                                    shoes?.map((shoe, id) => (
                                        <option value={shoe.shoeName} key={shoe.shoeId}>{shoe.shoeName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Weapons</legend>
                        <div className="mainHands">
                            <label htmlFor="mainHand-select">Main Hand:</label>
                            <select name="mainHand" id="mainHand-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.mainHand}>{build.mainHand}</option>
                                }
                                <option value="">-- Select Main Hand --</option>
                                {
                                    mainHand?.map((mainHand, id) => (
                                        <option value={mainHand.main_hand_id}
                                                key={mainHand.mainHandId}>{mainHand.mainHandName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="offHands">
                            <label htmlFor="offHand-select">Off Hand:</label>
                            <select name="offHand" id="offHand-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.offHand}>{build.offHand !== "null" ? build.offHand : "None"}</option>
                                }
                                <option value="">-- Select Off Hand --</option>
                                <option value="null">None</option>
                                {
                                    offHand?.map((offHand, id) => (
                                        <option value={offHand.offHandName}
                                                key={offHand.offHandId}>{offHand.offHandName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Accessories</legend>
                        <div className="capes">
                            <label htmlFor="capes-select">Cape:</label>
                            <select name="cape" id="capes-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.cape}>{build.cape}</option>
                                }
                                <option value="">-- Select Cape --</option>
                                {
                                    capes?.map((cape, id) => (
                                        <option value={cape.capeName} key={cape.capeId}>{cape.capeName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Consumables</legend>
                        <div className="food">
                            <label htmlFor="food-select">Food:</label>
                            <select name="food" id="food-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.food}>{build.food}</option>
                                }
                                <option value="">-- Select Food --</option>
                                {
                                    food?.map((food, id) => (
                                        <option value={food.foodName} key={food.foodId}>{food.foodName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="potions">
                            <label htmlFor="potions-select">Potion:</label>
                            <select name="potion" id="potions-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.potion}>{build.potion}</option>
                                }
                                <option value="">-- Select Potion --</option>
                                {
                                    potions?.map((potion, id) => (
                                        <option value={potion.potionName}
                                                key={potion.potionId}>{potion.potionName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="create-build-fieldset">
                        <legend className="create-build-legend">Mounts</legend>
                        <div className="mounts">
                            <label htmlFor="mounts-select">Mount:</label>
                            <select name="mount" id="mounts-select" onChange={handleChange} required>
                                {
                                    buildId &&
                                    <option value={build.mount}>{build.mount}</option>
                                }
                                <option value="">-- Select Mount --</option>
                                {
                                    mounts?.map((mount, id) => (
                                        <option value={mount.mountName} key={mount.mountId}>{mount.mountName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>
                    <button className="build-submit-button" type="submit">Submit Build</button>
                </form>
            </main>
        </>
    )


}