import React, {useState} from 'react';
import HeadGear from '../gear/head/HeadGear';
import ChestGear from '../gear/chest/ChestGear'
import Shoes from '../gear/shoes/Shoes';
import Capes from '../accessories/Capes';

import MainHand from '../weapons/MainHand';
import OffHand from '../weapons/OffHand';

import Food from '../consumables/food/Food';
import Potion from '../consumables/potions/Potions';
import Mounts from '../mounts/Mounts';

export default function CreateBuild() {

    return (
        <div className="select-menus">
            <div className="head-dropdown">
                <HeadGear/>
            </div>

            <div className="chest-dropdown">
                <ChestGear/>
            </div>

            <div className="shoes-dropdown">
                <Shoes/>
            </div>

            <div className="mainHand-dropdown">
                <MainHand/>
            </div>

            <div className="offHand-dropdown">
                <OffHand/>
            </div>

            <div className="capes-dropdown">
                <Capes/>
            </div>

            <div className="food-dropdown">
                <Food/>
            </div>

            <div className="potions-dropdown">
                <Potion/>
            </div>

            <div className="mounts-dropdown">
                <Mounts/>
            </div>
        </div>

    )

}