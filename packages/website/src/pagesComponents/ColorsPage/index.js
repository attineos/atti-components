import React from "react"
import { Header1, Text } from "atti-components"

import { Square, SquareContainer } from "./styles"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

const ColorsPage = () => (
  <Layout>
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
        #BEF8FD
      </Square>
      <Square background="lightPrimary" color="white">
        lightPrimary
        <br />
        #54D1DB
      </Square>
      <Square background="primary" color="white">
        primary
        <br />
        #2CB1BC
      </Square>
      <Square background="darkPrimary" color="white">
        darkPrimary
        <br />
        #0E7C86
      </Square>
      <Square background="darkerPrimary" color="white">
        darkerPrimary
        <br />
        #044E54
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterNeutral" color="black">
        lighterNeutral
        <br />
        #D9E2EC
      </Square>
      <Square background="lightNeutral" color="white">
        lightNeutral
        <br />
        #9FB3C8
      </Square>
      <Square background="neutral" color="white">
        neutral
        <br />
        #627D98
      </Square>
      <Square background="darkNeutral" color="white">
        darkNeutral
        <br />
        #334E68
      </Square>
      <Square background="darkerNeutral" color="white">
        darkerNeutral
        <br />
        #102A43
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightInfo" color="black">
        supportLightInfo
        <br />
        #C1FEF6
      </Square>
      <Square background="supportInfo" color="white">
        supportInfo
        <br />
        #3AE7E1
      </Square>
      <Square background="supportDarkInfo" color="white">
        supportDarkInfo
        <br />
        #099AA4
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightSuccess" color="black">
        supportLightSuccess
        <br />
        #C6F7E2
      </Square>
      <Square background="supportSuccess" color="white">
        supportSuccess
        <br />
        #3EBD93
      </Square>
      <Square background="supportDarkSuccess" color="white">
        supportDarkSuccess
        <br />
        #147D64
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightWarning" color="black">
        supportLightWarning
        <br />
        #FFF3C4
      </Square>
      <Square background="supportWarning" color="white">
        supportWarning
        <br />
        #F7C948
      </Square>
      <Square background="supportDarkWarning" color="white">
        supportDarkWarning
        <br />
        #CB6E17
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="supportLightDanger" color="black">
        supportLightDanger
        <br />
        #FFD0B5
      </Square>
      <Square background="supportDanger" color="white">
        supportDanger
        <br />
        #F9703E
      </Square>
      <Square background="supportDarkDanger" color="white">
        supportDarkDanger
        <br />
        #C52707
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterBlack" color="white">
        lighterBlack
        <br />
        #515151
      </Square>
      <Square background="lightBlack" color="white">
        lightBlack
        <br />
        #3B3B3B
      </Square>
      <Square background="black" color="white">
        black
        <br />
        #222222
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="white" color="black">
        white
        <br />
        #FFFFFF
      </Square>
      <Square background="darkWhite" color="black">
        darkWhite
        <br />
        #F7F7F7
      </Square>
      <Square background="darkerWhite" color="black">
        darkerWhite
        <br />
        #E1E1E1
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="lighterGrey" color="white">
        lighterGrey
        <br />
        #CFCFCF
      </Square>
      <Square background="lightGrey" color="white">
        lightGrey
        <br />
        #B1B1B1
      </Square>
      <Square background="grey" color="white">
        grey
        <br />
        #9E9E9E
      </Square>
      <Square background="darkGrey" color="white">
        darkGrey
        <br />
        #7E7E7E
      </Square>
      <Square background="darkerGrey" color="white">
        darkerGrey
        <br />
        #626262
      </Square>
    </SquareContainer>

    <SquareContainer>
      <Square background="transparent" color="black">
        transparent
        <br />
        transparent
      </Square>
    </SquareContainer>
  </Layout>
)

export default ColorsPage
