export interface WalletConnectorProps {
    onLoginSuccess?: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

export interface RegisterLandModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "create"|"edit";
    editData?: LandData
  }
  
export interface LandData {
    landId?: string, 
    area: number|null,
    landUse: string,
    latitude: number|null,
    longitude: number|null
}

export interface ButtonProps extends React.PropsWithChildren {
    classname?: string;
    variant?: "default" | "error" | "success" | "gray" | "white" | "whiteWithBorder";
    size?: "small" | "medium" | "large" | "full";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    "aria-label"?: string;
  }


export interface SmallNumberCardProps {
    iconColor:'blue'|'yellow'|'orange'|'purple'|'green', 
    title:string, 
    subtitle:string
}

export interface DropdownMenuItems {
    label:string,
    action: () => void,
    variant?: 'base'|'danger',
  }
  
export interface DropdownMenuProps {
    position:"bottom-left"|"top-left"|'bottom-right'|"top-right"|"bottom",
    items: DropdownMenuItems[],
    show:boolean
  }

export interface HeaderItem {
    label:string,
    alignText?:'left'|'center'|'right',
    fixedWidth?: number
  } 
  
export interface TableHeaderProps {
    items:HeaderItem[]
  }
  

  export interface RowItem {
    value?:string|number,
    alignText?:'left'|'center'|'right',
    fixedWidth?: number, 
    customjsx?: ()=>React.ReactNode
  } 
  
  export interface TableRowProps {
    items:RowItem[], 
    headers: string[]
  }

export interface TagProps {
    variant: 'approved'|'unapproved'|'pending'|"rejected"|"bought"
  }

 export  interface UseBlockiesParams {
    address: string | undefined;
  }

  export interface UseLandverContractParams {
    name:"landRegister"
  }

  export interface DynamicObject {
    [key: string]: string; // Allows any string as a key
  }