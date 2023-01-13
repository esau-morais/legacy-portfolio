import type { TListItem } from '@/lib/types'

const List = ({ items }: { items: Array<TListItem> }) =>
  <ul className="ml-4 list-['▲'] flex-wrap">
    {items.map(item => (
      <li key={item.id} className="pl-4">{item.content}</li>
    ))}
  </ul>

export default List
