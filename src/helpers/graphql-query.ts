export const getPastWinnersFilterQuery = (category: string | null) => {
    switch (category?.replace(/[0-9]/g, '')) {
        case 'cat':
            return {
                categories: {
                    past_winners_category: {
                        id: {
                            _eq: parseFloat(category.replace('cat', '')),
                        },
                    },
                },
            }

        case 'year':
            return {
                year: {
                    past_winners_year: {
                        id: {
                            _eq: parseFloat(category.replace('year', '')),
                        },
                    },
                },
            }
        default:
            return null
    }
}

export const getJudgesFilterQuery = (category: string | null) => {
    switch (category?.replace(/[0-9]/g, '')) {
        case 'year':
            return {
                years: {
                    judges_year: {
                        id: {
                            _eq: parseFloat(category.replace('year', '')),
                        },
                    },
                },
            }
        default:
            return null
    }
}
