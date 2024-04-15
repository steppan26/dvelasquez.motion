//@ts-ignore
import { Theming } from "./theming"

export const Stores:React.FC<any> = ({ children }) => {
  return(
    <Theming>
      {children}
    </Theming>
  )
}
