<script lang="ts">
    export let imageSrc: string = ''
    export let imageAlt: string = ''

    let imageElementScale = 1

    let start = { x: 0, y: 0, distance: 0 }

    // Calculate distance between two fingers
    const distance = (event: any) => {
        return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY)
    }

    const touchstart = (event: any) => {
        if (event.touches.length === 2) {
            event.preventDefault() // Prevent page scroll

            // Calculate where the fingers have started on the X and Y axis
            start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2
            start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2
            start.distance = distance(event)
        }
    }

    const touchmove = (event: any) => {
        const element = event.target as HTMLElement
        if (event.touches.length === 2) {
            event.preventDefault() // Prevent page scroll

            // Safari provides event.scale as two fingers move on the screen
            // For other browsers just calculate the scale manually
            let scale
            if (event.scale) {
                scale = event.scale
            } else {
                const deltaDistance = distance(event)
                scale = deltaDistance / start.distance
            }
            imageElementScale = Math.min(Math.max(1, scale), 4)

            // Calculate how much the fingers have moved on the X and Y axis
            const deltaX = ((event.touches[0].pageX + event.touches[1].pageX) / 2 - start.x) * 2 // x2 for accelarated movement
            const deltaY = ((event.touches[0].pageY + event.touches[1].pageY) / 2 - start.y) * 2 // x2 for accelarated movement

            // Transform the image to make it grow and move with fingers
            const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`
            element.style.transform = transform
            element.style.webkitTransform = transform
            element.style.zIndex = '9999'
        }
    }

    const touchend = (event: Event) => {
        // Reset image to it's original format
        const element = event.target as HTMLElement
        element.style.transform = ''
        element.style.webkitTransform = ''
        element.style.zIndex = ''
    }
</script>

<img on:touchstart={touchstart} on:touchmove={touchmove} on:touchend={touchend} src={imageSrc} alt={imageAlt} />

<style lang="scss">
    img {
        width: 100%;
        height: 100%;
    }
</style>
