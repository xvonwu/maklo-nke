export interface ShoeVariant {
  id: string;
  name: string;
  colorName: string;
  price: number;
  bgGradient: string;
  accentColor: string;
  circleColor: string;
  imageFilter: string;
  progressWidth: string;
  description: string;
  image: string;
  tag: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  subBadge?: string;
  category: string[]; // running, basketball, lifestyle, air-max, zoom
  color: string;
  sku: string;
  description: string;
  image: string;
  defaultSize: number | string;
  availableSizes: (number | string)[];
  isArchival?: boolean;
  featured?: boolean;
  discountPercentage?: number;
}

export const LEBRON_VARIANTS: ShoeVariant[] = [
  {
    id: 'orange',
    name: 'Cheetah Orange',
    colorName: 'Orange / White / Wolf Grey',
    price: 185,
    bgGradient: 'linear-gradient(135deg, #FF8A4C 0%, #E8500A 100%)',
    accentColor: '#E8500A',
    circleColor: '#E2E2E2',
    imageFilter: 'none',
    progressWidth: '25%',
    description:
      'Sepatu basket signature LeBron James yang dirancang untuk performa tinggi. Dilengkapi bagian atas Battleknit yang kuat dan fleksibel, bantalan Air Max di tumit serta Zoom Air di depan untuk peredam benturan dan respons cepat, dan sol luar dengan cengkeraman kuat di lapangan indoor. Tampil berani dengan pilihan warna yang digemari pemain maupun kolektor sneakers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIKp409pw_mITClWhFK1v4FVJFkrLwtH2QWtBsBpog7YD7tzf05_hxq4dnOdRzjA3tiIVlKBcWFVIdNhkSyH-s9wrGpKrpMYxT5YHziAM0sn-is01h9Cd0HbTvhkdGSymUwwQYcOdIDlNK8izW9HhWDxj8aeABU6BV7nssr0V8quzO3SOmVE3Zhu4PHAkks-ORANm7q9IV2kVF3XHdIxA5SC81d-yx0q3IPQu-ffOkd0-LQuZW7HTxQrROY8Y12FGEpg',
    tag: 'Zoom Air + Battleknit',
  },
  {
    id: 'blue',
    name: 'Royal Court Blue',
    colorName: 'Deep Royal / Game Blue',
    price: 195,
    bgGradient: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)',
    accentColor: '#1E3A8A',
    circleColor: '#CBD5E1',
    imageFilter: 'hue-rotate(185deg) saturate(1.4) brightness(0.95)',
    progressWidth: '50%',
    description:
      'Warna biru laut megah melambangkan dominasi sang raja di lapangan basket profesional. Dilengkapi tenunan Battleknit berkekuatan tinggi serta bantalan udara ganda responsif.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIKp409pw_mITClWhFK1v4FVJFkrLwtH2QWtBsBpog7YD7tzf05_hxq4dnOdRzjA3tiIVlKBcWFVIdNhkSyH-s9wrGpKrpMYxT5YHziAM0sn-is01h9Cd0HbTvhkdGSymUwwQYcOdIDlNK8izW9HhWDxj8aeABU6BV7nssr0V8quzO3SOmVE3Zhu4PHAkks-ORANm7q9IV2kVF3XHdIxA5SC81d-yx0q3IPQu-ffOkd0-LQuZW7HTxQrROY8Y12FGEpg',
    tag: 'Zoom Air + Royal Knit',
  },
  {
    id: 'black',
    name: 'Triple Stealth Black',
    colorName: 'Anthracite / Black / Dark Grey',
    price: 210,
    bgGradient: 'linear-gradient(135deg, #374151 0%, #111827 100%)',
    accentColor: '#111827',
    circleColor: '#4B5563',
    imageFilter: 'grayscale(100%) brightness(0.65) contrast(1.3)',
    progressWidth: '75%',
    description:
      'Tampilan serba hitam gelap dengan sentuhan stealth untuk gaya minimalis yang tangguh. Dirancang dengan serat komposit karbon tersembunyi untuk stabilitas lateral maksimum.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIKp409pw_mITClWhFK1v4FVJFkrLwtH2QWtBsBpog7YD7tzf05_hxq4dnOdRzjA3tiIVlKBcWFVIdNhkSyH-s9wrGpKrpMYxT5YHziAM0sn-is01h9Cd0HbTvhkdGSymUwwQYcOdIDlNK8izW9HhWDxj8aeABU6BV7nssr0V8quzO3SOmVE3Zhu4PHAkks-ORANm7q9IV2kVF3XHdIxA5SC81d-yx0q3IPQu-ffOkd0-LQuZW7HTxQrROY8Y12FGEpg',
    tag: 'Stealth Carbon Lockdown',
  },
  {
    id: 'white',
    name: 'Pure Platinum',
    colorName: 'Pure Platinum / Metallic Silver',
    price: 190,
    bgGradient: 'linear-gradient(135deg, #9CA3AF 0%, #4B5563 100%)',
    accentColor: '#4B5563',
    circleColor: '#F3F4F6',
    imageFilter: 'grayscale(100%) brightness(1.35) contrast(0.9)',
    progressWidth: '100%',
    description:
      'Balutan warna platinum bersih nan elegan, sangat diminati oleh para kolektor sneakers dunia. Jahitan knit presisi dengan detail reflektif di bawah sorot cahaya malam.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIKp409pw_mITClWhFK1v4FVJFkrLwtH2QWtBsBpog7YD7tzf05_hxq4dnOdRzjA3tiIVlKBcWFVIdNhkSyH-s9wrGpKrpMYxT5YHziAM0sn-is01h9Cd0HbTvhkdGSymUwwQYcOdIDlNK8izW9HhWDxj8aeABU6BV7nssr0V8quzO3SOmVE3Zhu4PHAkks-ORANm7q9IV2kVF3XHdIxA5SC81d-yx0q3IPQu-ffOkd0-LQuZW7HTxQrROY8Y12FGEpg',
    tag: 'Platinum Reflective Knit',
  },
];

export const COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'pegasus-34',
    title: 'Nike Air Zoom Pegasus 34',
    price: 110,
    category: ['running', 'zoom'],
    color: 'Dark Charcoal / Orange',
    sku: 'PG34-1904',
    subBadge: 'PERFORMANCE',
    description: 'Engineered mesh upper with responsive Zoom Air heel and forefoot cushioning.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTlzIxFC1L4yoZVogHClAEhTLFH0k4WibVSY1s1YS9lR7wNhcl6zpb00of_HYi_0_MFloR1_Z8MSBkLAYijB9C7CvypIh4jSnRShN9XeHtVDjMK3psqjJ4wW9hFub2LSXZq4s3r3gVhFk2qRTrmH3yWViacjDKkO0QufywgWFpmOYNRhx5k_J1uf_vHcaCUIF6ICT0ipeDalWEBjgxB66lP29jFcb0I8-n9m4llp3y5WvKZV3JSqDs5JQ__9jRSaJrlQ',
    defaultSize: 10,
    availableSizes: [8, 9, 10, 11, 12],
    featured: true,
  },
  {
    id: 'structure-20',
    title: 'Nike Air Zoom Structure 20',
    price: 120,
    category: ['running', 'zoom'],
    color: 'Royal Blue / Volt',
    sku: 'STR20-4402',
    subBadge: 'DYNAMIC FIT',
    description: 'Dynamic Support platform guides your foot smoothly through every heel-to-toe stride.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDN1q6jrgP_zh-_RbZwnyR6C_wuDr4CY45rjIQSoKF2sILjcvCKxhAwHudDbX3fSMQuw7WNa5MCL1BgOcxnmb9dCiGx8bE1AX4FSpD5d873gOIQzk4Q6fCuYR1hCa4BeCCw5kOoQ_HC3pUpON_wVvJQW9HtAkpNCmNbJCoZT47e0M6qCRRaL7gL6bSRl7-85Tgx9AUlfbz58IhtANlnvy0_uJp79rcbt9u6eJkwFRVfvsWJIeUyxgn7scifXollkYqT-A',
    defaultSize: 9,
    availableSizes: [8, 9, 10, 11, 12],
    featured: true,
  },
  {
    id: 'air-jordan-1',
    title: 'Nike Air Jordan',
    price: 220,
    category: ['basketball', 'lifestyle'],
    color: 'Black / Gym Red',
    sku: 'AJ1-8921',
    subBadge: 'ICONIC DROP',
    description: 'The legendary high-top silhouette in archival Bred Heritage colorway with premium leather build.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFsz8ydBDBQR0kz5PsnT_bXzGk8G7cqSrIMoiaaBZFmEkw8zzx3EtNfTomzgh4YQQcFwAJLRtPs5_hJrwVgPW9n82rq11Zd0fvY339i-hIAUi9qV-VQlW3oz8n4r0SAz2TDHtY38O96xqcLLF5ZcBvnZ4s99wKy-nxDcxR9Hbvpts_YYu1Z6H4NQFlZjXEHzcv8DZhR8E_7JWD_62B6L5F74bDwyUP7ixzlpWIenwBCgaEudo1Tepmw85AB9GI0S-SQ',
    defaultSize: 10.5,
    availableSizes: [8.5, 9.5, 10.5, 11, 12],
    featured: true,
  },
  {
    id: 'free-run-2',
    title: 'Nike Free Run 2',
    price: 90,
    category: ['running', 'lifestyle'],
    color: 'Ocean Blue / Flame Orange',
    sku: '537732-403',
    subBadge: 'LIGHTWEIGHT',
    description: 'Barefoot-feel training icon with deep laser-cut flex sipes and dynamic strap cage.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLXJsCs1h6igpWhAwchUnwMJ4yCoks8psg6aBEk9DWRHpDZ2VpSEWok_YWyGNz6V2ya1TmoQNp-hzVyOYbj2UcVY5cj243hy2bB1ZTyl0x4Z1W2HmHTrNtfdAR3Rb9bzf8TL18Ozazf0OElDOpKHXlDloLsH_sexHjfBoZ7CEvmS9KUf5fg2dwRFyTWxjjeV91rgn9Sa2JTTtY6s2EQRy7VPQ6NB8cxi1_S2v1e7uy4z8EHKvLRGUvjak75uPskj4d7g',
    defaultSize: 10,
    availableSizes: [7, 8, 9, 10, 11],
    featured: true,
  },
  {
    id: 'pegasus-30',
    title: 'Nike Air Pegasus 30',
    price: 130,
    category: ['running'],
    color: 'Crimson / Black / Silver',
    sku: '599205-614',
    subBadge: 'DUAL PROFILE',
    description: 'Cushioned responsive foam sole with bold mesh upper engineered for durability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDe6DtnpTTkpx8mz03f6c0ryFx6MJ1vioxENheM6pqgN3dkJrXuhXbpQ4olS31Nu1uesbX3VbXP7Zx5U91Jkz59O-4NMHZEUbPQCFoXNx3fphvZ4hjV3227qOC5ddt5EbSeSrE57zk_aQ0hQYWvbry9_6MbsPiY3NInwj3HEJQTxzeVRZRAMvyNLMBgTTHTW_v9hKnc4zrZNQVCMfLQaihk30_-BCZy6XxdLBvfrscmCBJleqw0MEjiP69Jrr6Bc0ElzA',
    defaultSize: 9,
    availableSizes: [8, 9, 10, 11],
    featured: false,
  },
  {
    id: 'air-max-2017',
    title: 'Nike Air Max 2017',
    price: 190,
    category: ['air-max', 'running'],
    color: 'Bright Red / Silver',
    sku: '849559-602',
    subBadge: 'FULL AIR',
    description: 'Full-length Max Air unit delivering maximum impact protection and bold streetwear aesthetic.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSnNwZbFji61oF3LNLbkkPSd2jiXay-INfhLNxuPSvPKOd9G0c0Eo1K8l6VlEYJqgjvfr4batn6pY6OS2t4X0I550lbTzVM_BGacMTfNTcPga6IS9nfr2bk0ncexQYHz7b-UTJrZfMMqaRaG___FuBGNUxmc9l0WjPr9X2n9xzHsmGJEaYOrKDtxAJG3tGeVRc-0VjV7g0lHj3_guA5iOqzZmxCwfGmJcMsRUj7HZhWhzkP0yB6PqKgKrpjaMW7YZLig',
    defaultSize: 10,
    availableSizes: [8.5, 9.5, 10, 11],
    featured: false,
  },
  {
    id: 'pegasus-34-white',
    title: 'Nike Air Zoom Pegasus 34',
    price: 110,
    category: ['running', 'lifestyle'],
    color: 'Triple White / Pure Platinum',
    sku: 'PG34-001W',
    subBadge: 'TRIPLE WHITE',
    description: 'Ultra-crisp monochromatic triple white edition with breathable Flymesh weave.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMTdHW_Xsw3ep4ij80CHjGz5DeCwwBjG_bsxewCBqXdIWxm7oRclMb7q7IX49Iz4dB9_rH9VUQ4-XDITjTCA-wMA51m6J7ibT5skG6WMoYFS1syQenn6eLJb0ubafk99ToTUAvn6ws5nf7r4pQWcOcM2fl7lyFj1S_0ZYk0lSiPNibr1zAHQ5VUn5AL0r4OA5GmpekSCRjBFS7arthe8TAB0p-T1BqdtmKzY8cPJPnZmguDBSezogIhcdKFBU9_UQvQg',
    defaultSize: 10,
    availableSizes: [8, 9, 10, 11, 12],
    featured: false,
  },
  {
    id: 'structure-20-volt',
    title: 'Nike Air Zoom Structure 20',
    price: 120,
    category: ['running', 'zoom'],
    color: 'Electric Volt / Black',
    sku: 'STR20-VOLT',
    subBadge: 'ELECTRIC VOLT',
    description: 'High-visibility neon volt colorway with dual-density foam core and Zoom Air sprint chamber.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUvPIz47YiMzQdJC3Mrz60Dn_jyreicH-MshT8z3lxWzVGwzfW8NY_6OVz9b2CQhr-gEedlmKkjXWQY6TTMVI_gwFEkgfNrTmAr_zpEph1bbqGvCFZcJnTnVOqX1cuFM-xQuPXKIT0YH7gSwIighcnfpcsrhus2Y0SZNmqNp_5OkJY5gv8tCklsAAg9SX6-hSib07AZ7xwe2Yj5pVGEbc7d_P8HKAo2PTGV556vEgZENGL5WO-wBXLq66jyYqS-PfGmw',
    defaultSize: 9.5,
    availableSizes: [8.5, 9.5, 10.5, 11],
    featured: false,
  },
];

export const DISCOUNT_PRODUCTS: Product[] = [
  {
    id: 'disc-air-max-2017',
    title: 'Nike Air Max 2017',
    price: 142.5,
    originalPrice: 190,
    discountPercentage: 25,
    discountBadge: '-25% OFF',
    subBadge: 'HOT RELEASE',
    category: ['air-max', 'running'],
    color: 'Bright Red',
    sku: '849559-602',
    description: 'Full-length engineered Air unit • Bright Red',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2AOSh6M5yJtyXwk4RcB8L4uCY0Fc4xtEnfQ6941mFhT38VyhVsWOfgqC8IFQMVWBS1V9z8dc9nZKlxyTyde4cLREO0Pc5ItRtk6O7SP81aDRYYLgjvMg1Qf9KSCo-l61K-1xO_efJ7NZk_9fAnAYPidaEP4yIY7CHNJU1vsa6rw8b7WxJIw4FreK14SjWl1TvRWFo9qRZbthZbanP0HulqEJaNEc6bMpYBVsT6VUEktRIS107w2-Kw9tQ_ATXOhUozA',
    defaultSize: 10,
    availableSizes: [8, 9, 10, 11, 12],
    isArchival: true,
  },
  {
    id: 'disc-structure-20',
    title: 'Nike Air Zoom Structure 20',
    price: 84.0,
    originalPrice: 120,
    discountPercentage: 30,
    discountBadge: '-30% OFF',
    subBadge: 'RUNNING SPECIAL',
    category: ['running', 'zoom'],
    color: 'Blue / Volt',
    sku: '849576-400',
    description: 'Dynamic Support Platform • Blue/Volt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBL5sfJpT-N88BIfJIu_rFoRBsaXtGOkrfL5q6bD_iRegrMLkd_HbLbjCpzE9dbK9vhCglK7hPjHkI4Tny1hMyFByu3CgoJOMAApoyTs7goRZtgM4CVyuwsjKFeHEpJBxnKuIi8Vu-LbuL-bVD_YIs9roB35BMCz7F02FU7oexCxrvNWYQcwfyPztn5YPREX9QaRB7uoc2Ycmh1UCeu24G6dhXhJiYzL-vc6X5mHD_KpgHeGJcBGy0rVpdgTRIbb-QHLA',
    defaultSize: 9.5,
    availableSizes: [8, 9, 9.5, 10, 11],
    isArchival: true,
  },
  {
    id: 'disc-free-run-2',
    title: 'Nike Free Run 2',
    price: 58.5,
    originalPrice: 90,
    discountPercentage: 35,
    discountBadge: '-35% OFF',
    subBadge: 'LIGHTWEIGHT DEAL',
    category: ['running', 'lifestyle'],
    color: 'Ocean Blue / Flame',
    sku: '537732-403',
    description: 'Deep flex siping • Ocean Blue/Flame',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvBYswPu_gpJBMS7rpKtzsvx-SkKiXUS4RM_cig7Ird2RauqwCjhE5FvmIIblnJemvKiOBA2-FKPfnF5ZAqyshX-T73CTnGZKBF46hsCSYco2Ssjtpcmm8nfdjgVGLNNCS6uU2N7mIwigQOuAJP2OItzzACriOmtT7i9cgC9CB2-K8GTqRtBs1-3MrtXOYX4kqaYSAgaK23rb84B-R3YO-ZFZCOIbJlmPbSsoebFSMnZip0Bb4EgkxSRFmEXYP2W8Hg',
    defaultSize: 10,
    availableSizes: [7, 8, 9, 10, 11],
    isArchival: true,
  },
  {
    id: 'disc-pegasus-30',
    title: 'Nike Air Pegasus 30',
    price: 104.0,
    originalPrice: 130,
    discountPercentage: 20,
    discountBadge: '-20% OFF',
    subBadge: 'DUAL PROFILE',
    category: ['running'],
    color: 'Crimson / Black',
    sku: '599205-614',
    description: 'Classic waffle lug grip • Crimson/Black',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKS_W8K4V4ssgn-gsH72T8hPEdt68IIY-Fn79hKYrKUdPCkIQZ6niwQuZSsfVb8JsnszBaYqlpJsr61OBfabpf8FtlC_WcZXmtNN0B-xh-Z4qhWvIsfW3gUR6MUcghQYEyMB0QpsG8hsoIrQlpKd2jOesPQ1kQyVrH8C18Hl9J2AkjN8FaMmj2DOaPWFhGdY3Z_p8HPZRf75fLfJQwCQh8NWfa7-xM5ZJzPor5qVr-KKh6iGPQQGBGdCFHKxaUYKuDww',
    defaultSize: 9,
    availableSizes: [8, 9, 10, 11],
    isArchival: true,
  },
  {
    id: 'disc-air-jordan-1',
    title: 'Nike Air Jordan 1 Retro',
    price: 187.0,
    originalPrice: 220,
    discountPercentage: 15,
    discountBadge: '-15% OFF',
    subBadge: 'MEMBER EXCLUSIVE',
    category: ['basketball', 'lifestyle'],
    color: 'Bred Heritage',
    sku: '555088-062',
    description: 'Premium leather build • Bred Heritage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCG5XxmfhOtzukivmtMwypb2C7kE3A77MxmhpDST-yE1F22EAOdSbvmbc4Fu1Cu1jwiosvlomkt8AXWXBfVysNnjiyhQbYZ5oYPvRfmFvTk515ESnhmIYIa-WqIfm79x9ti7Rv1scqZ5TbHnYUoY8qWIFwt-N4PLQYBa2ci2Sv06mDkL7IF75w8Me3q6DifFkI84BkEUsMkTjCG6mh8WavsZsOdQ-wsK1wvhs1Kq5IKwzBDL6DH7JIenyOFK-m_1jkNPw',
    defaultSize: 10,
    availableSizes: [8.5, 9.5, 10, 11],
    isArchival: true,
  },
  {
    id: 'disc-pegasus-34',
    title: 'Nike Air Zoom Pegasus 34',
    price: 82.5,
    originalPrice: 110,
    discountPercentage: 25,
    discountBadge: '-25% OFF',
    subBadge: 'DAILY TRAINER',
    category: ['running', 'zoom'],
    color: 'Anthracite',
    sku: '880555-001',
    description: 'Cushlon foam responsive ride • Anthracite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFTN6o7MUixZrInjrrVBY5hDwEwjcYXA6V_Y5hInTd1u4A6xZLi4Ro6FAdg5R6X7bPl56daGjEUZwLrutRTXfgNX4cxQWbgoieyt177kU0ocm2U71An66B8nZNjUgMaD_cInN-xrRSmNmHRYdn5RZrDy2U2URddudklHSz38U2bF5M_e-EIPIKoV2YJXe6sYheJy2trRUiAfQLJftdHi7wV9iLVcz4WcHNgXD93692P5jCJzqKAP1lDh1NC17L1MMCg',
    defaultSize: 10,
    availableSizes: [8, 9, 10, 11, 12],
    isArchival: true,
  },
];

export const CURATED_PAIRINGS: Product[] = [
  COLLECTION_PRODUCTS.find((p) => p.id === 'pegasus-30')!,
  COLLECTION_PRODUCTS.find((p) => p.id === 'air-max-2017')!,
];

export const INITIAL_CART_ITEMS = [
  {
    id: 'air-jordan-1',
    name: 'Nike Air Jordan 1 Retro',
    price: 220,
    size: 'US 10',
    color: 'Black/Gym Red',
    sku: 'AJ1-8921',
    badge: 'HIGH DEMAND',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnFsz8ydBDBQR0kz5PsnT_bXzGk8G7cqSrIMoiaaBZFmEkw8zzx3EtNfTomzgh4YQQcFwAJLRtPs5_hJrwVgPW9n82rq11Zd0fvY339i-hIAUi9qV-VQlW3oz8n4r0SAz2TDHtY38O96xqcLLF5ZcBvnZ4s99wKy-nxDcxR9Hbvpts_YYu1Z6H4NQFlZjXEHzcv8DZhR8E_7JWD_62B6L5F74bDwyUP7ixzlpWIenwBCgaEudo1Tepmw85AB9GI0S-SQ',
    quantity: 1,
  },
  {
    id: 'pegasus-34',
    name: 'Nike Air Zoom Pegasus 34',
    price: 110,
    size: 'US 9.5',
    color: 'Dark Charcoal/Orange',
    sku: 'PG34-1904',
    badge: 'RUNNING',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTlzIxFC1L4yoZVogHClAEhTLFH0k4WibVSY1s1YS9lR7wNhcl6zpb00of_HYi_0_MFloR1_Z8MSBkLAYijB9C7CvypIh4jSnRShN9XeHtVDjMK3psqjJ4wW9hFub2LSXZq4s3r3gVhFk2qRTrmH3yWViacjDKkO0QufywgWFpmOYNRhx5k_J1uf_vHcaCUIF6ICT0ipeDalWEBjgxB66lP29jFcb0I8-n9m4llp3y5WvKZV3JSqDs5JQ__9jRSaJrlQ',
    quantity: 1,
  },
  {
    id: 'structure-20',
    name: 'Nike Air Zoom Structure 20',
    price: 120,
    size: 'US 10',
    color: 'Royal Blue/Volt',
    sku: 'STR20-4402',
    badge: 'STABILITY',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDN1q6jrgP_zh-_RbZwnyR6C_wuDr4CY45rjIQSoKF2sILjcvCKxhAwHudDbX3fSMQuw7WNa5MCL1BgOcxnmb9dCiGx8bE1AX4FSpD5d873gOIQzk4Q6fCuYR1hCa4BeCCw5kOoQ_HC3pUpON_wVvJQW9HtAkpNCmNbJCoZT47e0M6qCRRaL7gL6bSRl7-85Tgx9AUlfbz58IhtANlnvy0_uJp79rcbt9u6eJkwFRVfvsWJIeUyxgn7scifXollkYqT-A',
    quantity: 1,
  },
];
