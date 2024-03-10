type Dict = Record<string, any>

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      const hoverColor = 'urbanik.orange'
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? hoverColor
          : 'white',
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      }
    },
    'nav-link-scroll': (props: Dict) => {
      const { isActive } = props

      const hoverColor = 'urbanik.orange'
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? hoverColor
          : 'black',
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      }
    },
  },
}
