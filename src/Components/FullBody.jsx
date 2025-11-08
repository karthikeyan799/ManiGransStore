import React from 'react'
import Body from './Body'
import Discount from './Discount'
import CatagoryList from './CatagoryList'
import LuxuryCollection from './LuxuryCollection'
import ModernCollection from './ModernCollection'
import FastSelling from './FastSelling'
import SpecialOfferse from './SpecialOfferse'

export default function FullBody() {
    return (
        <>
            <Body />
            <Discount />
            <CatagoryList />
            {/* <Catagory2/> */}
            {/* <Category/> */}
            <LuxuryCollection />
            <ModernCollection />
            <FastSelling />
            <SpecialOfferse />
        </>
    )
}
