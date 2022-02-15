export const getInlineSvg = (svgLink: string): Promise<string> => {
    return fetch(svgLink)
        .then(res => {
            return res.text()
        })
        .then(svgCode => {
            return svgCode
        })
}
