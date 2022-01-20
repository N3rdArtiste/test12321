import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const AllFilmsDocument = gql`
    query AllFilms {
  allFilms {
    films {
      title
      id
    }
  }
}
    `;
export const AllPeopleDocument = gql`
    query AllPeople {
  allPeople {
    people {
      name
      homeworld {
        name
      }
      species {
        name
      }
      gender
      id
    }
  }
}
    `;
export const AllPlanetsDocument = gql`
    query AllPlanets {
  allPlanets {
    planets {
      name
      diameter
      population
      gravity
      id
    }
  }
}
    `;
export const AllSpeciesDocument = gql`
    query AllSpecies {
  allSpecies {
    species {
      name
      id
    }
  }
}
    `;
export const AllStarshipsDocument = gql`
    query AllStarships {
  allStarships {
    starships {
      name
      id
    }
  }
}
    `;
export const StatsDocument = gql`
    query Stats {
  allFilms {
    totalCount
  }
  allPeople {
    totalCount
  }
  allPlanets {
    totalCount
  }
  allSpecies {
    totalCount
  }
  allStarships {
    totalCount
  }
  allVehicles {
    totalCount
  }
}
    `;
export const AllVehiclesDocument = gql`
    query AllVehicles {
  allVehicles {
    vehicles {
      id
      name
      model
      model
    }
  }
}
    `;