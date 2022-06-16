import React, {useState} from 'react';
import ChestGear from '../gear/chest/ChestGear'
import HeadGear from '../gear/head/HeadGear';

export default function CreateBuild() {

    return (
        <div className="select-menus">
            <div className="chest-dropdown">
                <HeadGear/>
            </div>

            <div className="head-dropdown">
                <ChestGear/>
            </div>
        </div>

    )

}