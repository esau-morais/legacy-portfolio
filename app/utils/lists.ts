import type { TListItem, TMenuItem } from '@/lib/types'

export const MENU_ITEMS: Array<TMenuItem> = [
  {
    id: 1,
    label: 'Home',
    path: '/'
  },
  {
    id: 2,
    label: 'Projects',
    path: '/projects'
  },
  {
    id: 3,
    label: 'Uses',
    path: '/uses'
  },
  {
    id: 4,
    label: 'Karaoke Time',
    path: '/karoke'
  },
  {
    id: 5,
    label: 'Get In Touch',
    path: '/contact'
  },
  {
    id: 6,
    label: 'About',
    path: '/about'
  },
]


export const HARDWARE_USES_LIST: Array<TListItem> = [
  {
    id: 1,
    content: 'Husky gaming blizzard 60% keyboard',
  },
  {
    id: 2,
    content: 'Logitech  G203 Lyghtsync gaming mouse'
  },
  {
    id: 3,
    content: 'Acer Aspire A515-54'
  },
  {
    id: 4,
    content: 'QCY T13 Wireless Earbuds'
  }
]

export const CODING_USES_LIST: Array<TListItem> = [
  {
    id: 1,
    content: 'Editor: Neovim',
  },
  {
    id: 2,
    content: 'Theme: Dracula'
  },
  {
    id: 3,
    content: 'Font: Fira Code'
  },
  {
    id: 4,
    content: 'Terminal: WSL Ubuntu/ZSH'
  }
]

export const SOFTWARE_USES_LIST: Array<TListItem> = [
  {
    id: 1,
    content: 'Excalidraw',
  },
  {
    id: 2,
    content: 'Figma'
  },
  {
    id: 3,
    content: 'Notion'
  }
]
