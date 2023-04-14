import {MdSwapVerticalCircle, MdEnergySavingsLeaf} from 'react-icons/md'
import {BsFillAwardFill, BsFillBarChartFill} from 'react-icons/bs'
import {AiTwotoneHome} from 'react-icons/ai'


export const link = [
    {
      title: "Home",
      links: "/" || "/home",
      icon: AiTwotoneHome,
      active: "home",
      size: 20
    },
    {
      title: "Savings",
      links: "/savings",
      icon: MdEnergySavingsLeaf,
      active: "savings",
      size: 25
    },
    {
      title: "Investment",
      links: "/",
      icon:  BsFillBarChartFill,
      active: "investment",
      size: 25
    },
    {
      title: "Rewards",
      links: "/",
      icon: BsFillAwardFill,
      active: "rewards",
      size: 25
    },
    {
      title: "Swap",
      links: "/",
      icon: MdSwapVerticalCircle,
      active: "Stake",
      size: 25
    },
  ]