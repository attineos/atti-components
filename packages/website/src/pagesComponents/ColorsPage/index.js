import React from "react"
import { withTheme } from "styled-components"

import { Header1, Text } from "@components/global"
import SEO from "@components/seo"

import { Square, SquareContainer } from "./styles"

const ColorsPage = ({ theme }) => (
  <>
    <SEO title="Colors" />
    <Header1>Colors</Header1>
    <Text>
      The themes come with a bunch of colors that you can use in your
      components.
    </Text>
    <SquareContainer>
      <Square background="lighterPrimary" color="black">
        lighterPrimary
        <br />
        {theme.colors.lighterPrimary}
      </Square>
      <Square background="lightPrimary" color="white">
        lightPrimary
        <br />
        {theme.colors.lightPrimary}
      </Square>
      <Square background="primary" color="white">
        primary
        <br />
        {theme.colors.primary}
      </Square>
      <Square background="darkPrimary" color="white">
        darkPrimary
        <br />
        {theme.colors.darkPrimary}
      </Square>
      <Square background="darkerPrimary" color="white">
        darkerPrimary
        <br />
        {theme.colors.darkerPrimary}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterNeutral" color="black">
        lighterNeutral
        <br />
        {theme.colors.lighterNeutral}
      </Square>
      <Square background="lightNeutral" color="white">
        lightNeutral
        <br />
        {theme.colors.lightNeutral}
      </Square>
      <Square background="neutral" color="white">
        neutral
        <br />
        {theme.colors.neutral}
      </Square>
      <Square background="darkNeutral" color="white">
        darkNeutral
        <br />
        {theme.colors.darkNeutral}
      </Square>
      <Square background="darkerNeutral" color="white">
        darkerNeutral
        <br />
        {theme.colors.darkerNeutral}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightInfo" color="black">
        supportLightInfo
        <br />
        {theme.colors.supportLightInfo}
      </Square>
      <Square background="supportInfo" color="white">
        supportInfo
        <br />
        {theme.colors.supportInfo}
      </Square>
      <Square background="supportDarkInfo" color="white">
        supportDarkInfo
        <br />
        {theme.colors.supportDarkInfo}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightSuccess" color="black">
        supportLightSuccess
        <br />
        {theme.colors.supportLightSuccess}
      </Square>
      <Square background="supportSuccess" color="white">
        supportSuccess
        <br />
        {theme.colors.supportSuccess}
      </Square>
      <Square background="supportDarkSuccess" color="white">
        supportDarkSuccess
        <br />
        {theme.colors.supportDarkSuccess}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightWarning" color="black">
        supportLightWarning
        <br />
        {theme.colors.supportLightWarning}
      </Square>
      <Square background="supportWarning" color="white">
        supportWarning
        <br />
        {theme.colors.supportWarning}
      </Square>
      <Square background="supportDarkWarning" color="white">
        supportDarkWarning
        <br />
        {theme.colors.supportDarkWarning}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightDanger" color="black">
        supportLightDanger
        <br />
        {theme.colors.supportLightDanger}
      </Square>
      <Square background="supportDanger" color="white">
        supportDanger
        <br />
        {theme.colors.supportDanger}
      </Square>
      <Square background="supportDarkDanger" color="white">
        supportDarkDanger
        <br />
        {theme.colors.supportDarkDanger}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterBlack" color="white">
        lighterBlack
        <br />
        {theme.colors.lighterBlack}
      </Square>
      <Square background="lightBlack" color="white">
        lightBlack
        <br />
        {theme.colors.lightBlack}
      </Square>
      <Square background="black" color="white">
        black
        <br />
        {theme.colors.black}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="white" color="black">
        white
        <br />
        {theme.colors.white}
      </Square>
      <Square background="darkWhite" color="black">
        darkWhite
        <br />
        {theme.colors.darkWhite}
      </Square>
      <Square background="darkerWhite" color="black">
        darkerWhite
        <br />
        {theme.colors.darkerWhite}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterGrey" color="white">
        lighterGrey
        <br />
        {theme.colors.lighterGrey}
      </Square>
      <Square background="lightGrey" color="white">
        lightGrey
        <br />
        {theme.colors.lightGrey}
      </Square>
      <Square background="grey" color="white">
        grey
        <br />
        {theme.colors.grey}
      </Square>
      <Square background="darkGrey" color="white">
        darkGrey
        <br />
        {theme.colors.darkGrey}
      </Square>
      <Square background="darkerGrey" color="white">
        darkerGrey
        <br />
        {theme.colors.darkerGrey}
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="transparent" color="black">
        transparent
        <br />
        {theme.colors.transparent}
      </Square>
    </SquareContainer>
  </>
)

export default withTheme(ColorsPage)
