export const navMain = [
    { label: 'Enter', slug: '/enter' },
    { label: 'About', slug: '/about' },
    { label: 'Inspiration', slug: '/inspiration?page=1' },
    { label: 'Past Winners', slug: '/past-winners?page=1' },
]

export const navAuth = {
    unauthenticated: [{ label: 'Login', path: '/knack.html' }],
    authenticated: [
        { label: 'Account', path: '/knack.html' },
        { label: 'Log out', path: '/knack.html' },
    ],
}

export const menuToggleIcons = [
    { src: '/images/close.svg', alt: 'close menu' },
    { src: '/images/hamburger_menu.svg', alt: 'open menu' },
]
