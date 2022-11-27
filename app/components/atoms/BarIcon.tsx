import { cx } from '@/utils/classNames'

const BarIcon = ({ className }: { className?: string }) =>
  <span className={cx('inline-block w-12 h-[2px] bg-light', className)} />

export default BarIcon

