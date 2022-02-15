export const getInlineSvg = (svgLink: string) => {
    return fetch(svgLink)
        .then(res => {
            return res.text()
        })
        .then(svgCode => {
            return svgCode
        })
}
