interface Constants {
  // colors: {
  //   [key: string]: string
  // }
  pokemonTypes: {
    [key: string]: {
      background: string
      color: string
    }
  }
}

export const constants: Constants = {
  // colors: {
  //   aaa: ''
  // },
  pokemonTypes: {
    bug: {
      color: '#8CB230',
      background: '#8BD674'
    },
    dark: {
      color: '#58575F',
      background: '#6F6E78'
    },
    dragon: {
      color: '#0F6AC0',
      background: '#7383B9'
    },
    electric: {
      color: '#EED535',
      background: '#F2CB55'
    },
    fairy: {
      color: '#ED6EC7',
      background: '#EBA8C3'
    },
    fighting: {
      color: '#D04164',
      background: '#EB4971'
    },
    fire: {
      color: '#FD7D24',
      background: '#FFA756'
    },
    flying: {
      color: '#748FC9',
      background: '#83A2E3'
    },
    ghost: {
      color: '#556AAE',
      background: '#8571BE'
    },
    grass: {
      color: '#62B957',
      background: '#8BBE8A'
    },
    ground: {
      color: '#DD7748',
      background: '#F78551'
    },
    ice: {
      color: '#61CEC0',
      background: '#91D8DF'
    },
    normal: {
      color: '#9DA0AA',
      background: '#B5B9C4'

    },
    poison: {
      color: '#A552CC',
      background: '#9F6E97'
    },
    psychic: {
      color: '#EA5D60',
      background: '#FF6568'
    },
    rock: {
      color: '#BAAB82',
      background: '#D4C294'
    },
    steel: {
      color: '#417D9A',
      background: '#4C91B2'
    },
    water: {
      color:'#4A90DA',
      background: '#58ABF6'
    }
  }
}