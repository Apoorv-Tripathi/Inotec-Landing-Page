import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBeaker,
  HiOutlineCog6Tooth,
  HiOutlineClipboardDocumentCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentCheck,
  HiOutlineFlag,
} from 'react-icons/hi2'
import { TbBuildingFactory2 } from 'react-icons/tb'

const registry = {
  gauge: HiOutlineAdjustmentsHorizontal,
  droplet: HiOutlineBeaker,
  compressor: HiOutlineCog6Tooth,
  install: HiOutlineClipboardDocumentCheck,
  wrench: HiOutlineWrenchScrewdriver,
  contract: HiOutlineDocumentCheck,
  flag: HiOutlineFlag,
  factory: TbBuildingFactory2,
}

export default function Icon({ name, size = 26 }) {
  const Cmp = registry[name] || HiOutlineAdjustmentsHorizontal
  return <Cmp size={size} />
}
