import React, { Component } from 'react';
import requireAuth from './require_auth'

const Resources = () => {
    return (
        <div>
            Rcp Secret
            <ul>
                <li>1 Sup</li>
                <li>2 sec</li>
                <li>3 w00t</li>
            </ul>
        </div>
    )
}

export default requireAuth(Resources)
