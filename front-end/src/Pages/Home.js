import React from 'react'
import Features from '../Components/Feature'
import FeaturesItem from '../Components/FeaturesItem'
import Char from '../Components/Char'
import HeroSubtitle from '../Components/CharSubtitle'
import HeroText from '../Components/CharText'
import iconChatImg from '../Media/icon-chat.png'
import iconMoneyImg from '../Media/icon-money.png'
import iconSecurityImg from '../Media/icon-security.png'


/**
 * Homepage doc
 * @component
 */


export default function Home() {
    return (
        <main className="main">
            <Char srTitle="Promoted Content"> 
                <HeroSubtitle>No fees.</HeroSubtitle>
                <HeroSubtitle>No minimum deposit.</HeroSubtitle>
                <HeroSubtitle>High interest rates.</HeroSubtitle>
                <HeroText>Open a savings account with Argent Bank today!</HeroText>
            </Char>
            <Features srTitle="Features">
                <FeaturesItem picture={iconChatImg} pictureAlt="Chat Icon">
                    <h3>You are our #1 priority</h3>
                    <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </FeaturesItem>
                <FeaturesItem picture={iconMoneyImg} pictureAlt="Money Icon">
                    <h3>More savings means higher rates</h3>
                    <p>The more you save with us, the higher your interest rate will be!</p>
                </FeaturesItem>
                <FeaturesItem picture={iconSecurityImg} pictureAlt="Shield check Icon">
                    <h3>Security you can trust</h3>
                    <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                </FeaturesItem>
            </Features>
        </main>
    )
}