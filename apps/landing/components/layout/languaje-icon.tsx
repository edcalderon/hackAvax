import { IconButton} from '@chakra-ui/react'
import { MdLanguage } from "react-icons/md";


const LanguajeIcon = () => {
  return (
    <IconButton
      variant="ghost"
      aria-label="theme toggle"
      icon={<MdLanguage size="24" />}
      borderRadius="md"
    />
  )
}

export default LanguajeIcon